import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardNavigation from './dashboard-navigation';
import SettingNavigation from './setting-navigation';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={DashboardNavigation} />
      <Drawer.Screen name="Setting" component={SettingNavigation} />
    </Drawer.Navigator>
  );
};
