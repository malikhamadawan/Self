/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class AppInput extends React.Component {
  render() {
    return (
      <View
        style={[
          {
            //backgroundColor: '#aa3',
            height: 55,
            flexDirection: 'row',
            borderWidth: 0.5,
            borderRadius: 10,
          },
          this.props.st,
        ]}>
        <View
          style={{
            height: '100%',
            width: '15%',
            //backgroundColor: '#a4f',
            justifyContent: 'center',
            alignItems: 'center',
            borderRightWidth: 0.5,
          }}>
          <Ionicons name={this.props.ic} size={20} color={'red'} />
        </View>
        <View
          style={{
            //backgroundColor: '#f4a',
            height: '100%',
            width: '85%',
          }}>
              <TextInput
              {...this.props}
              style={{
                  height:'100%',
                  width:'100%',
                  paddingLeft:10,
              }}
              />
          </View>
      </View>
    );
  }
}
