import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { observer } from 'mobx-react';
import Context from '../../context';

const container = { flex: 1, alignItems: 'center', justifyContent: 'center' };

const message = ({ navigation }) => {
  const { store } = useContext(Context);

  useEffect(() => {
    store.setTotal('5000');
  }, []);

  return (
    <View style={container}>
      <Text>Messages Screen</Text>
      <Text>Total {store.total}</Text>
      <TextInput text="Total" style={{ backgroundColor: '#FFF', width: 200 }} onChangeText={(e) => store.setTotal(e)} />
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Message2')} />
    </View>
  );
};

export default observer(message);
