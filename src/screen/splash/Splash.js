/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import {
  heightPercentageToDP as h,
  widthPercentageToDP as w,
} from 'react-native-responsive-screen';
import AysncStorage from '@react-native-async-storage/async-storage';
export class Splash extends React.Component {
  componentDidMount = () => {
    setTimeout(() => {
      AysncStorage.getItem('userData', (err, res) => {
        if (!err && res !== null) {
          this.props.navigation.replace('TabNavigator');
        } else {
          this.props.navigation.replace('SignUp');
        }
      });
    }, 2000);
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            height: h('20%'),
            resizeMode: 'contain',
          }}
          source={require('../../assets/bt.png')}
        />
      </View>
    );
  }
}
