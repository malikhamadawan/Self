/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavHeader} from '../../components/NavHeader';
export class Dashboard extends React.Component {
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
      //console.warn('Gift ha');
    } else {
      //console.warn('No Roti pani');
    }
  };
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../../assets/bg.jpg')}
        style={{
          flex: 1,
          //backgroundColor: '#aa2',
        }}>
        <View
          style={{
            flex: 1,
            //backgroundColor: '#000',
          }}>
          <NavHeader
            leftIc={'ios-list'}
            title={'Dashboard'}
            rightIc={'ios-arrow-forward'}
            leftPressed={() => {
              navigation.openDrawer();
            }}
            rightPressed={() => {
              console.warn('right');
            }}
            custom
          />

          <View
            style={{
              height: '15%',
              //backgroundColor:'#4f4',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('List');
                //console.warn (this);
              }}
              style={{
                height: '90%',
                width: '90%',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                }}>
                List
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: '15%',
              //backgroundColor: '#f64',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MultiList');
                //console.warn (this);
              }}
              style={{
                height: '90%',
                width: '90%',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                }}>
                MultiList
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: '15%',
              //backgroundColor: '#f64',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ColumnList');
                //console.warn (this);
              }}
              style={{
                height: '90%',
                width: '90%',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                }}>
                ColumnList
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: '15%',
              //backgroundColor: '#f64',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                const navProps = {
                  name: this.state.name,
                  email: this.state.email,
                  password: this.state.password,
                };
                this.props.navigation.navigate('EditProfile', navProps);
                //console.warn (this);
              }}
              style={{
                height: '90%',
                width: '90%',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                }}>
                EditProfile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
