import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dashboard} from '../screen/dashboard';
import {Settings} from '../screen/settings';
import {MultiList} from '../screen/list';
const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      defaultStatus={'closed'}
      drawerContent={props => <Settings {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MultiList"
        component={MultiList}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
