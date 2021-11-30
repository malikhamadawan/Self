/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as h,
  widthPercentageToDP as w,
} from 'react-native-responsive-screen';

export class Settings extends React.Component {
  render() {
    return (
      <View
        style={{
          //backgroundColor: '#afa',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: h('8%'),
            width: '100%',
           // backgroundColor: '#a21',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopWidth: h('0.05%'),
            borderBottomWidth: h('0.05%'),
          }}>
          <Text
            style={{
              height: h('2.5%'),
              color: 'black',
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            //backgroundColor: '#a56',
            height: h('8%'),
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: h('0.05%'),
          }}>
          <Text
            style={{
              height: h('2.5%'),
              color: 'black',
            }}>
            Contact Us
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
