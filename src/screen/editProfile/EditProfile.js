/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class EditProfile extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    user: {},
  };

  componentDidMount = () => {
    const navProps = this.props.route.params;
    console.warn(navProps);
    if (navProps !== undefined) {
      this.setState({
        user: navProps,
        name: navProps.name,
        email: navProps.email,
        password: navProps.password,
      });
      console.warn('Gift ha');
    } else {
      console.warn('No Roti pani');
    }
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
              EditProfile
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
              value={this.state.name}
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
              value={this.state.email}
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
              value={this.state.password}
            />
            <View
              style={{
                //backgroundColor: '#aaf',
                marginTop: 40,
                width: '100%',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.replace('Dashboard')}
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
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
