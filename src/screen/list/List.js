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
    data: [
      {
        name: 'Hamad',
        fName: 'Javed',
        phone: '03011636183',
        age: '27',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Ahmad',
        fName: 'Aslam',
        phone: '03098935144',
        age: '27',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Yonus',
        phone: '03038594864',
        age: '22',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Usman',
        fName: 'Javed',
        phone: '03170490007',
        age: '17',
        img: require('../../assets/4.jpg'),
      },
    ],
    loggedIn: true,
  };
  /*renderDesign = item => {
    if (this.state.loggedIn) {
      return (
        <View
          style={{
            height: h('8%'),
            //backgroundColor: '#af2',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            borderWidth: h('0.1%'),
            borderRadius: h('1%'),
          }}>
          <Text
            style={{
              fontSize: h('3%'),
            }}>
            Name: {item.name}
          </Text>
          <Text>Father Name: {item.fName}</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            height: h('8%'),
            //backgroundColor: '#a12',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            borderWidth: h('0.1%'),
            borderRadius: h('1%'),
          }}>
          <Text
            style={{
              fontSize: h('3%'),
            }}>
            No data
          </Text>
        </View>
      );
    }
  };*/
  renderDesign = item => (
    <View
      style={{
        height: h('11%'),
        //backgroundColor: '#a23',
        flexDirection: 'row',
        borderWidth: h('0.1%'),
        borderRadius: h('1%'),
        borderColor: 'red',
      }}>
      <View
        style={{
          //backgroundColor: '#d2a',
          height: '100%',
          width: '20%',
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: 'red',
        }}>
        <Image
          source={item.img}
          style={{
            height: h('10%'),
            width: h('10%'),
            resizeMode: 'cover',
            borderRadius: h('5%'),
          }}
        />
      </View>
      <View
        style={{
          //backgroundColor: '#af3',
          height: '100%',
          width: '80%',
        }}>
        <View
          style={{
            height: '50%',
            width: '100%',
            //backgroundColor: '#f2f',
            flexDirection: 'row',
          }}>
          <View
            style={{
              //backgroundColor: 'blue',
              height: '100%',
              width: '50%',
              justifyContent: 'center',
              paddingLeft: h('2%'),
            }}>
            <Text
              style={{
                color: '#000',
              }}>
              Name: {item.name}
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              width: '50%',
              //backgroundColor: 'orange',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#000',
              }}>
              Father Name: {item.fName}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: '50%',
            width: '100%',
            //backgroundColor: 'red',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: '50%',
              //backgroundColor: 'orange',
              justifyContent: 'center',
              paddingLeft: h('2%'),
            }}>
            <Text
              style={{
                color: '#000',
              }}>
              Age: {item.age}
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              width: '50%',
              //backgroundColor: 'blue',
              justifyContent: 'center',
              paddingLeft: h('2%'),
            }}>
            <Text
              style={{
                color: '#000',
              }}>
              Phone: {item.phone}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
  separator = () => (
    <View
      style={{
        height: h('1%'),
      }}
    />
  );
  render() {
    return (
      <View
        style={{
          //backgroundColor: '#aa3',
          flex: 1,
        }}>
        <NavHeader
          title={'List'}
          rightIc={'ios-arrow-forward'}
          rightPressed={() => {
            this.setState({loggedIn: !this.state.loggedIn});
          }}
        />
        <FlatList
          style={{
            margin: h('1'),
          }}
          data={this.state.data}
          renderItem={({item}) => this.renderDesign(item)}
          ItemSeparatorComponent={() => this.separator()}
          keyExtractor={(index, item) => item.toString()}
        />
      </View>
    );
  }
}
