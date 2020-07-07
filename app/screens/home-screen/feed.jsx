import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as Resources from '../../services/api/resources';
import * as Auth from '../../services/api/auth';
import * as Text from '../../components/Text';
import * as Button from '../../components/Button';
import * as mainStyle from '../../assets/styles/main-style';
import style from './feed.style';

function Feed({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');

  useEffect(() => {
    getUsers();
    checkIsLogin();
  }, []);

  const getUsers = () => {
    Resources.getUsers()
      .then((r) => {
        console.tron.log(r);
      })
      .catch((e) => {
        console.tron.log(e);
      });
  };

  const checkIsLogin = async () => {
    const t = await AsyncStorage.getItem('TOKEN');

    if (t) setIsLogin(true);
    else setIsLogin(false);
  };

  const login = () => {
    Auth.login(username, password)
      .then((r) => {
        console.log(r);
        AsyncStorage.setItem('TOKEN', r.data).then(() => {
          checkIsLogin();
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const logout = () => {
    AsyncStorage.clear().then(() => {
      checkIsLogin();
    });
  };

  const getAbsensi = () => {
    Resources.getAbsensi(115)
      .then((r) => {
        console.log(r);
        setName(r.Name);
        setCheckin(r.CheckIn);
        setCheckout(r.CheckOut);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <View style={{}}>
      {!isLogin && (
        <>
          <TextInput
            style={{ backgroundColor: '#FFF', padding: 20 }}
            onChangeText={(v) => setUsername(v)}
            placeholder="username"
            value={username}
          />
          <TextInput
            style={{ backgroundColor: '#FFF', padding: 20 }}
            onChangeText={(v) => setPassword(v)}
            secureTextEntry
            placeholder="password"
            value={password}
          />
        </>
      )}
      {isLogin ? (
        <Button.Regular style={{ ...mainStyle.button.default, marginTop: 5 }} onPress={logout} text="Logout" />
      ) : (
        <Button.Regular style={{ ...mainStyle.button.default, marginBottom: 0 }} onPress={login} text="Login" />
      )}
      {isLogin && (
        <>
          <Button.Regular
            style={{ ...mainStyle.button.default, marginTop: 5 }}
            onPress={getAbsensi}
            text="Get Absensi"
          />
          <Text.Regular>Nama: {name}</Text.Regular>
          <Text.Regular>Checkin: {checkin}</Text.Regular>
          <Text.Regular>Checkout: {checkout}</Text.Regular>
        </>
      )}
    </View>
  );
}

export default Feed;
