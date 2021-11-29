/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp} from '../screen/signUp';
import {Basics} from '../screen/basics';
import {BasicsTwo} from '../screen/basicsTwo';
import {Dashboard} from '../screen/dashboard/Dashboard';
import {EditProfile} from '../screen/editProfile/EditProfile';
import {List} from '../screen/list/List';
import {DetailsScreen} from '../screen/list/DetailsScreen';
import {ColumnList} from '../screen/list/ColumnList';
import { MultiList } from '../screen/list';

const Stack = createNativeStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
      <Stack.Screen
      name= "MultiList"
      component={MultiList}
      options={{headerShown: false}}
      />
      <Stack.Screen
      name= "ColumnList"
      component={ColumnList}
      options={{headerShown: false}}
      />
      <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Basics"
          component={Basics}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BasicsTwo"
          component={BasicsTwo}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
