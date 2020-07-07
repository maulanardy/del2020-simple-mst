import { create } from 'apisauce';
import { AUTH_URL } from '../../config/env';
import * as API from '../../config/api';

const api = create({ baseURL: AUTH_URL });

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    api
      .post(
        API.LOGIN,
        { Username: username, Password: password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const register = (data) => {
  return new Promise((resolve, reject) => {
    api
      .post(
        API.REGISTER,
        {
          phone_number: data.phone_number,
          password: data.password,
          name: data.name,
          gender: data.gender,
          year_of_birth: data.yob,
          description: data.description,
          email: data.email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const validateOTP = (phoneNumber, otp) => {
  return new Promise((resolve, reject) => {
    api
      .put(
        API.CONFIRM_CODE,
        { phone_number: phoneNumber, verification_code: otp },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const resendOTP = (phoneNumber) => {
  return new Promise((resolve, reject) => {
    api
      .get(API.RESEND_CONFIRM_CODE.replace(/{(phone_number)}/, phoneNumber), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const refreshToken = (phoneNumber, token) => {
  return new Promise((resolve, reject) => {
    api
      .post(
        API.REFRESH_TOKEN,
        { phone_number: phoneNumber, refresh_token: token },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getProfile = (auth) => {
  return new Promise((resolve, reject) => {
    api
      .get(API.PROFILE, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: auth,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const forgetPassCode = (phoneNumber) => {
  return new Promise((resolve, reject) => {
    api
      .post(
        API.FORGET_PASS_CODE,
        { phone_number: phoneNumber },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const forgetPass = (phoneNumber, verificationCode, password) => {
  return new Promise((resolve, reject) => {
    api
      .post(
        API.FORGET_PASS,
        {
          phone_number: phoneNumber,
          verification_code: verificationCode,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const forgetPassConfirm = (phoneNumber, verificationCode) => {
  return new Promise((resolve, reject) => {
    api
      .post(
        API.FORGET_PASS_CONFIRM,
        {
          phone_number: phoneNumber,
          verification_code: verificationCode,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
