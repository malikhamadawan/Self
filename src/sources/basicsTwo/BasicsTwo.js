/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";
import {View,Text,TextInput} from 'react-native';

export class BasicsTwo extends React.Component {
    render (){
        return (
            <View
              style={{
                backgroundColor: 'white',
                //height: '100%',
                //width: '100%'
                flex: 1,
              }}>
              <View
                style={{
                  height: '30%',
                  width: '100%',
                  backgroundColor: 'red',
                  //alignItems: 'flex-start',
                  //justifyContent: 'flex-start'
                  //flexDirection: 'column',
                  //justifyContent: 'space-between',
                  //justifyContent: 'space-evenly',
                  //justifyContent: 'space-around',
                  //alignItems: 'space-between',
                  //paddingBottom: 10,
                  //paddingLeft: 10,
                  //paddingRight: 10,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 90,
                    backgroundColor: 'black',
                    //marginBottom: 10,
                    //marginLeft: 10,
                    //marginRight: 10,
                  }}>
                  <TextInput
                    style={{
                      height: 35,
                      width: '70%',
                    }}
                    placeholder={'Enter name'}
                  />
                </View>
                <Text
                  style={{
                    fontsize: 30,
                    color: 'black',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                    textAlign: 'center',
                  }}>
                  Hammad Javed
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 26,
                  color: 'black',
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                  textAlign: 'center',
                }}>
                Javed Iqbal
              </Text>
            </View>
          ); 
    }
}