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
          backgroundColor: '#000',
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
            this.props.navigation.navigate('BasicsTwo');
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
          }}>list</Text>
          </TouchableOpacity>
           
        </View>
        <View
        style={{
            height: '15%',
            //backgroundColor: '#f64',
            alignItems:'center',
            justifyContent: 'center',
        }}>
         <TouchableOpacity
         onPress ={() => {
             const navProps ={
                 name: this.state.name,
                 email: this.state.email,
                 password: this.state.password,
             };
             this.props.navigation.navigate ('EditProfile',navProps);
             //console.warn (this);
         }}
         style={{
             height: '90%',
             width: '90%',
             borderColor: 'red',
             borderWidth:1,
             borderRadius: 10,
             alignItems: 'center',
             justifyContent: 'center',
         }}>
             <Text
             style={{
                 color: '#ffff',
             }}
             >EditProfile</Text>
         </TouchableOpacity>
        </View>
      </View>
    );
  }
}