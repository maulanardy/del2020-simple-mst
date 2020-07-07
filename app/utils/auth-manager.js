import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-community/async-storage';
import * as Auth from '../services/api/auth';
import * as CONST from '../config/constants';

export const KEY_AUTH = 'KEY_AUTH';
export const KEY_PROFILE = 'KEY_PROFILE';

export default class AuthManager {
  static register = (data, phone) => {
    return new Promise((resolve, reject) => {
      Auth.register(data)
        .then(async (result) => {
          AsyncStorage.setItem(CONST.CODE_OTP_SENT, '1');
          AsyncStorage.setItem(CONST.CODE_OTP_PHONE, phone);
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  static signIn = (phoneNumber, password) => {
    return new Promise((resolve, reject) => {
      Auth.login(phoneNumber, password)
        .then(async (result) => {
          await Keychain.setGenericPassword(KEY_AUTH, JSON.stringify(result));

          AuthManager.requestProfile()
            .then(() => {
              resolve(true);
            })
            .catch((err) => {
              AuthManager.signOut();
              reject(err);
            });
        })
        .catch(() => {
          AuthManager.signOut();
        });
    });
  };

  static signOut = () => {
    return new Promise((resolve, reject) => {
      try {
        AuthManager.getProfile()
          .then(() => {
            Keychain.resetGenericPassword();
            AsyncStorage.removeItem(KEY_PROFILE);

            resolve(true);
          })
          .catch((err) => {
            reject(err);
          });
      } catch (err) {
        reject(err);
      }
    });
  };

  static requestProfile = () => {
    return new Promise((resolve, reject) => {
      AuthManager.getAuthorization().then((auth) => {
        Auth.getProfile(auth)
          .then((result) => {
            AsyncStorage.setItem(KEY_PROFILE, JSON.stringify(result));
            resolve(result);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  };

  static refreshToken = () => {
    return new Promise((resolve, reject) => {
      Promise.all([AuthManager.getRefreshToken(), AuthManager.getProfile()]).then(([refreshToken, profile]) => {
        Auth.refreshToken(profile.phone_number, refreshToken)
          .then(async (result) => {
            await Keychain.setGenericPassword(KEY_AUTH, JSON.stringify(result));

            resolve(result.id_token);
          })
          .catch((err) => {
            AuthManager.signOut();

            reject(err);
          });
      });
    });
  };

  static requestResetPassword = (phoneNumber) => {
    return new Promise((resolve, reject) => {
      Auth.forgetPassCode(phoneNumber)
        .then((result) => {
          AsyncStorage.setItem(CONST.CODE_OTP_PHONE, phoneNumber);
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  static confirmResetPassword = (phoneNumber, verificationCode) => {
    return new Promise((resolve, reject) => {
      Auth.forgetPassConfirm(phoneNumber, verificationCode)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  static resetPassword = (phoneNumber, verificationCode, password) => {
    return new Promise((resolve, reject) => {
      Auth.forgetPass(phoneNumber, verificationCode, password)
        .then((result) => {
          AsyncStorage.removeItem(CONST.CODE_OTP_PHONE);
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  static async getAuthorization() {
    return `Bearer ${await AuthManager.getToken()}`;
  }

  static async getToken() {
    const res = await Keychain.getGenericPassword();

    const mObj = JSON.parse(res.password);

    return mObj.id_token;
  }

  static async getRefreshToken() {
    const res = await Keychain.getGenericPassword();

    const mObj = JSON.parse(res.password);

    return mObj.refresh_token;
  }

  static async getProfile() {
    const res = await AsyncStorage.getItem(KEY_PROFILE);

    const mObj = JSON.parse(res);

    return mObj;
  }

  static async isLoggedIn() {
    const keychain = await Keychain.getGenericPassword();
    const profile = await AsyncStorage.getItem(KEY_PROFILE);

    if (keychain?.password && profile) return true;

    return false;
  }
}
