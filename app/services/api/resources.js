import { create } from 'apisauce';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from '../../config/env';
import * as API from '../../config/api';
// import AuthManager from '../../lib/AuthManager'

const api = create({ baseURL: API_URL });

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    api
      .get(API.GET_USERS.replace(/{(page)}/, 1))
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getUserDetail = (id) => {
  return new Promise((resolve, reject) => {
    api
      .get(API.GET_USER.replace(/{(id)}/, id))
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getAbsensiList = (token) => {
  return new Promise((resolve, reject) => {
    api.setHeader('Authorization', `Bearer ${token}`);

    api
      .get(API.GET_ABSENSI_LIST)
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getAbsensi = (id) => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    api.setHeader('Authorization', `Bearer ${token}`);

    api
      .get(API.GET_ABSENSI.replace(/{(id)}/, id))
      .then((response) => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
