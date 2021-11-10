/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  sendData = (param, param2) => {
    //console.warn ('Button pressed');
    console.warn('this is param2 = ' + param2);
    console.warn('this is param = ' + param);
  };
  createUser = () => {
    // if (
    //   this.state.name === '' ||
    //   this.state.email === '' ||
    //   this.state.password === ''
    // ) {
    //   alert('All fields are required');
    // } else {
    //   alert('All ok');
    // }
    // ===========
    // if (this.state.name === '') {
    //   alert('Name is required');
    // } else {
    //   if (this.state.email === '') {
    //     alert('Email is required');
    //   } else {
    //     if (this.state.password.length < 8) {
    //       alert('Password must contain 8 characters');
    //     } else {
    //     }
    //   }
    // }
    //===========

    const navProps = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    this.state.name === ''
      ? alert('Name is required')
      : this.state.email === ''
      ? alert('Email is required')
      : this.state.password.length < 8
      ? alert('Password must contain 8 characters')
      : this.props.navigation.navigate('Dashboard', navProps);
  };

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
          }}>
          <View
            style={{
              height: '15%',
              //backgroundColor: '#afa',
            }}
          />
          <View
            style={{
              //backgroundColor: 'blue',
              paddingLeft: 15,
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#000',
              }}>
              Welcome
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000',
              }}>
              glad to see you...!
            </Text>
          </View>
          <View
            style={{
              //background: '#aaf',
              height: '10%',
            }}
          />
          <View
            style={{
              //backgroundColor: '#444',
              height: 362,
              padding: 15,
            }}>
            <TextInput
              onChangeText={txt => this.setState({name: txt})}
              style={{
                //backgroundColor: '#adf',
                borderColor: 'red',
                borderBottomWidth: 0.5,
                color: '#000',
              }}
              placeholder={'Name'}
              placeholderTextColor={'black'}
            />
            <TextInput
              onChangeText={txt => this.setState({email: txt})}
              style={{
                //backgroundColor: '#afd',
                borderColor: 'red',
                borderBottomWidth: 0.5,
                marginTop: 10,
                color: '#000',
              }}
              placeholder={'Email'}
              placeholderTextColor={'black'}
            />
            <TextInput
              onChangeText={txt => this.setState({password: txt})}
              style={{
                //backgroundColor: '#afd',
                borderColor: 'red',
                borderBottomWidth: 0.5,
                marginTop: 10,
                color: '#000',
              }}
              placeholder={'Password'}
              secureTextEntry={true}
              placeholderTextColor={'black'}
            />
            <TouchableOpacity
              onPress={() => {
                console.warn('123');
                console.log('1234567');
              }}
              style={{
                marginTop: 10,
                marginLeft: 30,
              }}>
              <Text
                style={{
                  color: 'black',
                }}>
                Forget Password.!
              </Text>
            </TouchableOpacity>
            <View
              style={{
                //backgroundColor: '#aaf',
                marginTop: 40,
                width: '100%',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                //onPress={this.sendData}
                //onPress={() => {
                //const param = 'Study';
                //const param2 = 'Study2';
                //this.sendData(param, param2);
                //}}
                //onPress ={() => {
                //const navData = this.state.name;
                //this.props.navigation.navigate('Dashboard', navData);
                //}}
                onPress={() => this.createUser()}
                style={{
                  backgroundColor: '#000',
                  height: 50,
                  width: '70%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 7,
                }}>
                <Text
                  style={{
                    color: '#fff',
                  }}>
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              //backgroundColor: '#afa',
              height: 100,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                marginTop: 2,
                color: '#000',
              }}>
              Already have an account.?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('BasicsTwo');
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'red',
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}>
                SignIn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
