import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dashboard} from '../screen/dashboard';
import {Settings} from '../screen/settings';
const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      openByDefault={false}
      drawerContent={props => <Settings {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
