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
export class ColumnList extends React.Component {
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
  };
  renderDesign = (item, index) => (
    <View
      style={{
        height: h('10%'),
        width: w('70%'),
        //backgroundColor: '#aa2',
        marginRight: h('2%'),
        marginLeft: index === 0 ? h('2%') : 0,
        flexDirection: 'row',
        borderWidth: h('0.1%'),
        borderRadius: h('1%'),
        borderColor: 'grey',
      }}>
      <View
        style={{
          height: '100%',
          width: '20%',
          //backgroundColor: '#afa',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
        <Image
          source={item.img}
          style={{
            height: h('9%'),
            width: h('9%'),
            resizeMode: 'cover',
            borderRadius: h('5%'),
          }}
        />
      </View>
      <View
        style={{
          height: '100%',
          width: '80%',
          //backgroundColor: '#a3a',
        }}>
        <View
          style={{
            height: '50%',
            width: '100%',
            //backgroundColor: '#a3f',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: '70%',
              //backgroundColor: 'red',
              justifyContent: 'center',
              paddingLeft: h('2%'),
            }}>
            <Text
              style={{
                color: 'black',
              }}>
              Name: {item.name}
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              width: '30%',
              //backgroundColor: 'green',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'black',
              }}>
              Age: {item.age}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: '50%',
            width: '100%',
            //backgroundColor: '#a89',
            paddingLeft: h('2%'),
          }}>
          <Text
            style={{
              color: 'black',
            }}>
            Phone: {item.phone}
          </Text>
        </View>
      </View>
    </View>
  );
  renderColumn = item => (
    <View
      style={{
        height: h('10%'),
        width: w('47%'),
        //backgroundColor: '#faf',
        marginLeft: h('1%'),
        marginBottom: h('2%'),
        flexDirection: 'row',
        borderWidth: h('0.1%'),
        borderRadius: h('1%'),
        borderColor: 'grey',
      }}>
      <View
        style={{
          height: '100%',
          width: '30%',
          //backgroundColor: '#faf',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
        <Image
          source={item.img}
          style={{
            height: h('7%'),
            width: h('7%'),
            resizeMode: 'cover',
            borderRadius: h('4%'),
          }}
        />
      </View>
      <View
        style={{
          height: '100%',
          width: '70%',
          //backgroundColor: '#a81',
        }}>
        <View
          style={{
            height: '50%',
            width: '100%',
            //backgroundColor: '#a21',
            justifyContent: 'center',
            paddingLeft: h('1%'),
          }}>
          <Text
            style={{
              color: 'black',
            }}>
            Name: {item.name}
          </Text>
        </View>
        <View
          style={{
            height: '50%',
            width: '100%',
            //backgroundColor: '#a31',
            justifyContent: 'center',
            paddingLeft: h('1%'),
          }}>
          <Text
            style={{
              color: 'black',
            }}>
            Phone: {item.phone}
          </Text>
        </View>
      </View>
    </View>
  );
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'ColumnList'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        <View
          style={{
            height: h('10%'),
            marginTop: h('2%'),
          }}>
          <FlatList
            horizontal
            data={this.state.data}
            renderItem={({item, index}) => this.renderDesign(item, index)}
            keyExtractor={(index, item) => item.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View
          style={{
            height: h('5%'),
            //backgroundColor: '#faf',
          }}
        />
        <FlatList
          numColumns={2}
          data={this.state.data}
          renderItem={({item, index}) => this.renderColumn(item, index)}
          keyExtractor={(index, item) => item.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
