/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        //height: '100%',
        //width: '100%',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: 'red',
          height: '30%',
          width: '100%',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            height: 90,
            width: 90,
            backgroundColor: 'black',
          }}></View>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          height: '30%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 80,
            width: 80,
            backgroundColor: 'yellow',
          }}></View>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          height: '30%',
          width: '100%',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            height: 70,
            width: 70,
            backgroundColor: 'yellow',
          }}></View>
      </View>
    </View>
  );
};

export default App;
