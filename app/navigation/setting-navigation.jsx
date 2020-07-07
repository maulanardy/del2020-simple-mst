import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../screens/setting-screen/index';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};
