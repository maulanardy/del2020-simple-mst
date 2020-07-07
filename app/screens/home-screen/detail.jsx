import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const container = { flex: 1, alignItems: 'center', justifyContent: 'center' };

export default function Detail({ navigation }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(5000);
  }, []);

  return (
    <View style={container}>
      <Text>Screen 1</Text>

      <Text>Total: {total}</Text>
      <Button onPress={() => navigation.navigate('Screen2', { total: { total } })}>Next</Button>
    </View>
  );
}
