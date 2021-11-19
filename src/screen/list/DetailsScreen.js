/* eslint-disable no-unused-vars */
/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class DetailsScreen extends React.Component {
  state = {
    data: {},
  };
  componentDidMount = () => {
    const navProps = this.props.route.params;
    this.setState({data: navProps});
    //console.warn(navProps);
  };
  render() {
    return (
      <ImageBackground
        source={require('../../assets/bg.jpg')}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            //backgroundColor: '#faf',
            flex: 1,
          }}>
          <NavHeader
            title={'Details'}
            leftIc={'ios-arrow-back'}
            leftPressed={() => {
              this.props.navigation.goBack();
            }}
          />
          <View
            style={{
              height: h('15%'),
              width: '100%',
              //backgroundColor: '#aa2',
              alignItems: 'center',
              justifyContent: 'center',
            }}></View>
          <View
            style={{
              //backgroundColor: 'blue',
              height: h('8%'),
              marginTop: h('5'),
              borderWidth: h('0.1'),
              flexDirection: 'row',
            }}>
            <View
              style={{
                //backgroundColor: '#f56',
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth: h('0.1'),
              }}>
              <Text
                style={{
                  fontSize: h('3'),
                  fontWeight: 'bold',
                }}>
                Name
              </Text>
            </View>
            <View
              style={{
                //backgroundColor: '#ad1',
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('3'),
                  fontWeight: 'bold',
                }}>
                {this.state.data.name}
              </Text>
            </View>
          </View>
          <View
            style={{
              //backgroundColor: '#f32',
              height: h('8%'),
              marginTop: h('3%'),
              borderWidth: h('0.1%'),
              flexDirection: 'row',
            }}>
            <View
              style={{
                //backgroundColor: '#ad2',
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: h('3%'),
                }}>
                Father Name
              </Text>
            </View>
            <View
              style={{
                //backgroundColor: '#ff6',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('3%'),
                  fontWeight: 'bold',
                }}>
                {this.state.data.fName}
              </Text>
            </View>
          </View>
          <View
            style={{
              //backgroundColor: 'red',
              height: h('8%'),
              marginTop: h('3%'),
              borderWidth: h('0.1%'),
              flexDirection: 'row',
            }}>
            <View
              style={{
                //backgroundColor: 'blue',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('3%'),
                  fontWeight: 'bold',
                }}>
                Age
              </Text>
            </View>
            <View
              style={{
                //backgroundColor: 'orange',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('3%'),
                  fontWeight: 'bold',
                }}>
                {this.state.data.age}
              </Text>
            </View>
          </View>
          <View
            style={{
              //backgroundColor: 'black',
              height: h('8%'),
              borderWidth: h('0.1'),
              marginTop: h('3%'),
              flexDirection: 'row',
            }}>
            <View
              style={{
                //backgroundColor: 'red',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('3%'),
                  fontWeight: 'bold',
                }}>
                Phone
              </Text>
            </View>
            <View
              style={{
                //backgroundColor: 'blue',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('3%'),
                  fontWeight: 'bold',
                }}>
                {this.state.data.phone}
              </Text>
            </View>
          </View>
          <View
            style={{
              //backgroundColor: 'golden',
              height: h('8%'),
              borderWidth: h('0.1%'),
              marginTop: h('3%'),
              flexDirection: 'row',
            }}>
            <View
              style={{
                //backgroundColor: 'grey',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('3%'),
                  fontWeight: 'bold',
                }}>
                Date of Birth
              </Text>
            </View>
            <View
              style={{
                //backgroundColor: 'yellow',
                width: '50%',
              }}>
              <Text>{this.state.data.dob}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
