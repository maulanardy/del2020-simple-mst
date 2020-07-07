import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { observer } from 'mobx-react';
import Context from '../../context';

const container = { flex: 1, alignItems: 'center', justifyContent: 'center' };

const message = () => {
  const { store } = useContext(Context);

  return (
    <View style={container}>
      <Text>Messages Screen 4</Text>
      <Text>Total {store.total}</Text>
      <TextInput text="Total" style={{ backgroundColor: '#FFF', width: 200 }} onChangeText={(e) => store.setTotal(e)} />
    </View>
  );
};

export default observer(message);
