import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from '../screens/home-screen/detail';
import FeedScreen from '../screens/home-screen/feed';
import MessageScreen from '../screens/home-screen/message';
import Message2Screen from '../screens/home-screen/message2';
import Message3Screen from '../screens/home-screen/message3';
import Message4Screen from '../screens/home-screen/message4';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardTab} />
      <Stack.Screen name="Detail" component={DetailsScreen} />
      <Stack.Screen name="Message2" component={Message2Screen} />
      <Stack.Screen name="Message3" component={Message3Screen} />
      <Stack.Screen name="Message4" component={Message4Screen} />
    </Stack.Navigator>
  );
};

const DashboardTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessageScreen} />
    </Tab.Navigator>
  );
};
