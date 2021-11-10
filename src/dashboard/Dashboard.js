/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export class Dashboard extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    user: {},
  };
  componentDidMount = () => {
    const navProps = this.props.route.params;
    this.setState({
      name: navProps.name,
      email: navProps.email,
      password: navProps.password,
    });
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          //backgroundColor: '#faf',
        }}>
        <View
          style={{
            height: 50,
            //backgroundColor: '#aaf',
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: 'red',
          }}>
          <TouchableOpacity
            style={{
              height: '100%',
              width: '15%',
              //backgroundColor : '#faf',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name={'ios-list'} size={25} color={'red'} />
          </TouchableOpacity>
          <View
            style={{
              height: '100%',
              width: '70%',
              //backgroundColor: '#af2',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{this.state.user.name}</Text>
          </View>
          <TouchableOpacity
            style={{
              height: '100%',
              width: '15%',
              //backgroundColor: '#ffa',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MaterialIcons name={'support-agent'} size={25} color={'red'} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: '15%',
            //backgroundColor:'#4f4',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Basicstwo');
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
              color: 'black',
            }}>
            <Text>list</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
