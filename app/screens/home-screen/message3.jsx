import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const container = { flex: 1, alignItems: 'center', justifyContent: 'center' };

const message = ({ navigation }) => {
  return (
    <View style={container}>
      <Text>Messages Screen 3</Text>
      <Button title="Go to Screen 4" onPress={() => navigation.navigate('Message4')} />
    </View>
  );
};

export default message;
