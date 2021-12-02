/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
export class MultiList extends React.Component {
  state = {
    data: [
      {
        name: 'Ali',
        fName: 'Raza',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Hassan',
        fName: 'javed',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Huziafa',
        fName: 'Javed',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Javed',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/4.jpg'),
      },
      {
        name: 'Usman',
        fName: 'Javed',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Usman',
        fName: 'Ali',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Ahsan',
        fName: 'Javed',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Ahmad',
        fName: 'Aslam',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Aslam',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Hashim',
        fName: 'Aslam',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Roshan',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Yonus',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Raza',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Raza',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Raza',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Raza',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Raza',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Raza',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/2.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Raza',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Raza',
        phone: '03038594864',
        age: '27',
        dob: '1-1-2000',
        img: require('../../assets/4.jpg'),
      },
    ],
    num: 1,
  };
  renderColumn = item => (
    <TouchableOpacity
      style={{
        height: this.state.num === 1 ? h('20%') : h('10%'),
        width:
          this.state.num === 1
            ? '100%'
            : this.state.num === 2
            ? w('47%')
            : this.state.num === 3
            ? w('30%')
            : w('23%'),
        backgroundColor: '#faf',
        margin: h('0.5%'),
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderWidth: h('0.1%'),
        borderRadius: h('1%'),
        borderColor: 'grey',
      }}>
      <Image
        source={item.img}
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'cover',
          borderRadius: h('4%'),
        }}
      />
    </TouchableOpacity>
  );
  render() {
    return (
      <View
        style={{
          flex: 1,
          //flexDirection: 'row',
        }}>
        <NavHeader
          title={'Multi List'}
          leftIc={'ios-list'}
          leftPressed={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <View
          style={{
            height: h('10%'),
            //backgroundColor: '#faf',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => this.setState({num: 1})}
            style={{
              height: '100%',
              width: '20%',
              //backgroundColor: '#a81',
              borderRadius: h('0.9%'),
              borderWidth: h('0.1%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: 'bold',
                color: 'black',
              }}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({num: 2})}
            style={{
              height: '100%',
              width: '20%',
              //backgroundColor: '#a81',
              borderRadius: h('0.9%'),
              borderWidth: h('0.1%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: 'bold',
                color: 'black',
              }}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({num: 3})}
            style={{
              height: '100%',
              width: '20%',
              //backgroundColor: '#a81',
              borderRadius: h('0.9%'),
              borderWidth: h('0.1%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: 'bold',
                color: 'black',
              }}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({num: 4})}
            style={{
              height: '100%',
              width: '20%',
              //backgroundColor: '#a81',
              borderRadius: h('0.9%'),
              borderWidth: h('0.1%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: 'bold',
                color: 'black',
              }}>
              4
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          key={
            this.state.num === 1
              ? '1'
              : this.state.num === 2
              ? '2'
              : this.state.num === 3
              ? '3'
              : '4'
          }
          numColumns={
            this.state.num === 1
              ? 1
              : this.state.num === 2
              ? 2
              : this.state.num === 3
              ? 3
              : 4
          }
          data={this.state.data}
          renderItem={({item, index}) => this.renderColumn(item, index)}
          keyExtractor={(index, item) => item.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
