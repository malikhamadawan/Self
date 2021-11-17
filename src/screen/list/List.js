/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class List extends React.Component {
  state = {
    Data: [],
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: '#a4f',
          flex: 1,
        }}>
        <NavHeader title={'List'} />
        <FlatList
          style={{
            margin: h('1'),
            marginTop: h('5'),
          }}
          data={[
            {
              name: 'Hammad',
              fName: 'Javed Iqbal',
            },
            {
              name: 'Hammad',
              fName: 'Javed Iqbal',
            },
            {
              name: 'Hammad',
              fName: 'Javed Iqbal',
            },
            {
              name: 'Hammad',
              fName: 'Javed Iqbal',
            },
            {
              name: 'Hammad',
              fName: 'Javed Iqbal',
            },
          ]}
          renderItem={({item}) => (
            <View
              style={{
                height: h('8%'),
                //backgroundColor: '#a2a',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                borderRadius: h('1%'),
                borderWidth: h('0.1%'),
              }}>
              <Text
                style={{
                  fontSize: h('3%'),
                }}>
                Name: {item.name}
              </Text>
              <Text>Father Name: {item.fName}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: h('1%'),
              }}
            />
          )}
          keyExtractor={(index, item) => item.toString()}
        />
      </View>
    );
  }
}
