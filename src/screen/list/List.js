/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import {AppInput, NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    filteredData: [
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
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate('DetailsScreen', item);
      }}
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
          overflow: 'hidden',
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
          width: '70%',
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
              width: '70%',
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
              width: '30%',
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
              height: '80%',
              width: '100%',
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
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Alert....', 'Do really want to delete this item?', [
            {
              text: 'As Me Later',
            },
            {
              text: 'No',
            },
            {
              text: 'Yes',
              onPress: () => this.remove(item),
            },
          ]);
        }}
        style={{
          //backgroundColor: '#faf',
          height: '100%',
          width: '10%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Ionicons name={'trash'} size={h('3.5%')} color={'red'} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
  remove = item => {
    let arr = [...this.state.filteredData];

    var ind = arr.findIndex(element => element.name === item.name);
    if (ind > -1) {
      arr.splice(ind, 1);
      this.setState({filteredData: arr});
    }
  };
  add = () => {
    //this is used to concat two arrays
    //let arr=[...this.state.filteredData];
    //const newItem=[
    //{
    //name: 'Test User',
    //fName: 'User',
    //phone: '12345678',
    //age: '56',
    //dob: '10-10-1997',
    //img: require('../../assets/1.jpg'),
    //},
    //{
    //name: 'Test User 2',
    //fName: 'User 2',
    //phone: '12345678',
    //age: '56',
    //dob: '10-10-1997',
    //img: require('../../assets/1.jpg'),
    //},
    //];
    //this.setState({filteredData: arr.concat(newItem)});
    const newItem = {
      name: 'Test User',
      fName: 'User',
      phone: '12345678',
      age: '56',
      dob: '10-10-1997',
      img: require('../../assets/1.jpg'),
    };
    this.setState(
      prevState => ({
        filteredData: [...prevState.filteredData, newItem],
      }),
      () => {
        console.warn('done');
      },
    );
  };
  searchFilterFunction = txt => {
    const newData = this.state.data.filter(item => {
      const itemData = `${item.name.toUpperCase()} ${item.fName.toUpperCase()} ${
        item.phone
      }`;
      const searchTxt = txt.toUpperCase();
      return itemData.indexOf(searchTxt) > -1;
    });
    this.setState({filteredData: newData});
  };
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
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
          rightIc={'person'}
          rightPressed={() => {
            this.add();
          }}
        />
        <AppInput
          ic={'search'}
          placeholder={'Search Here'}
          placeholderTextColor={'black'}
          color={'black'}
          st={{
            marginTop: h('1%'),
          }}
          onChangeText={txt => this.searchFilterFunction(txt)}
        />
        <FlatList
          //inverted
          style={{
            margin: h('1'),
          }}
          data={this.state.filteredData}
          renderItem={({item}) => this.renderDesign(item)}
          ItemSeparatorComponent={() => this.separator()}
          keyExtractor={(index, item) => item.toString()}
        />
      </View>
    );
  }
}
