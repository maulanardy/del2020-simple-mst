import AsyncStorage from '@react-native-community/async-storage';
import * as Auth from '../services/api/auth';
import * as CONST from '../config/constants';

export const KEY_AUTH = 'KEY_AUTH';
export const KEY_PROFILE = 'KEY_PROFILE';

export default class AuthManager {
  static validateOTP = (otp) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(CONST.CODE_OTP_PHONE).then((phoneNumber) => {
        Auth.validateOTP(phoneNumber, otp)
          .then(async (result) => {
            AsyncStorage.removeItem(CONST.CODE_OTP_SENT);
            AsyncStorage.removeItem(CONST.CODE_OTP_PHONE);

            resolve(result);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  };

  static resendOTP = () => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(CONST.CODE_OTP_PHONE).then((phoneNumber) => {
        Auth.resendOTP(phoneNumber)
          .then(async (result) => {
            resolve(result);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  };
}
