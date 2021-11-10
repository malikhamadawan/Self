/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export class BasicsTwo extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <View
          style={{
            //backgroundColor: '#fff',
            flex: 1,
          }}>
          <View
            style={{
              height: 100,
              backgroundColor: '#faf2',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TextInput
              style={{
                //backgroundColor: '#fff',
                //height: 100,
                width: '70%',
                borderColor: 'red',
                //borderLeftColor: 'red',
                //borderRightColor: 'red',
                //borderTopColor: 'red',
                //borderBottomColor: 'red',
                borderWidth: 1,
                //borderRightWidth: 2,
                //borderLeftWidth: 2,
                //borderTopWidth: 2,
                //borderBottomWidth: 2,
                //borderRadius: 15,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 10,
                paddingLeft: 20,
                maxHeight: 80,
                color: 'blue',
                fontSize: 20,
                fontWeight: 'bold',
              }}
              placeholder={'Enter Name'}
              placeholderTextColor={'red'}
              //underlineColorAndroid= {#000}
              multiLine={true}
              numberOfLine={4}
              //maxLength={4}
            />
          </View>
          <View
            style={{
              height: 200,
              //backgroundColor: '#faf2',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                //backgroundColor: '#fff',
                //height: 100,
                width: '70%',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 15,
                paddingLeft: 20,
                marginLeft: 10,
                color: '#000',
              }}
              placeholder={'Email'}
              keyboardType={'email-address'}
              //value= {'hamadawan@gmail.com'}
              //editable= {false}
            />
          </View>
          <View
            style={{
              height: 200,
              //backgroundColor: '#faf2',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                //backgroundColor: '#fff',
                //height: 100,
                width: '70%',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 15,
                paddingLeft: 20,
                color: 'black',
              }}
              placeholder={'Password'}
              placeholderTextColor={'blue'}
              secureTextEntry
            />
          </View>
          <View
            style={{
              height: 200,
              backgroundColor: '#fa2',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                //backgroundColor: '#fff',
                //height: 200,
                width: '70%',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 15,
                paddingLeft: 20,
                color: 'black',
              }}
              placeholder={'Phone'}
              placeholderTextColor={'blue'}
              maxLength={11}
              keyboardType={'phone-pad'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
