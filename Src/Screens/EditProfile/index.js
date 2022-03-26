import React, { Component } from 'react'
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Images from '../../Styles/Images'
import Colors from '../../Styles/Colors';
import Styles from './Styles'


class EditScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      repeatPassword: '',
      passwordSeen: false,
      checkBoxValue: false,
      passwordPepeatSeen: false
    }
  }
  onChange = () => {
    this.setState({ checkBoxValue: !this.state.checkBoxValue })
  }
  passwordShow = () => {
    this.setState({ passwordSeen: !this.state.passwordSeen })
  }
  passwordRepeactShow = () => {
    this.setState({ passwordPepeatSeen: !this.state.passwordPepeatSeen })
  }


  render() {
    const { password, checkBoxValue, passwordPepeatSeen, passwordSeen, repeatPassword } = this.state
    return (
      <>
        <View style={Styles.MainContainer}>
          <View style={Styles.contain} >
            <TouchableOpacity style={Styles.touchstyles} onPress={() => this.props.navigation.goBack()}>
              <Image source={Images.close} style={Styles.Setimage} />
            </TouchableOpacity >
            <View style={Styles.touchviewone}>
              <Text style={Styles.touchViewprofileOne}>{"Edit Profile"}</Text>
            </View>
            <TouchableOpacity style={Styles.touchwrite}>

              <Text style={Styles.btn}>{"Update"}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={Styles.line}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollStyle}>
              <TouchableOpacity style={Styles.mainviewtwo}>
                <Image source={Images.User} style={Styles.mainimgtwo} />
                <Image source={Images.Photo} />
              </TouchableOpacity>
              <View
                style={Styles.line}
              />
              <View style={Styles.textone}>
                <Text style={Styles.lefttext}>{"Name"}</Text>
                <View style={Styles.verticleLine}></View>
                <Text style={Styles.textstyle}>{"llja"}</Text>
              </View>
              <View
                style={Styles.line}
              />
              <View style={Styles.textone}>
                <Text style={Styles.lefttext}>{"Surname"}</Text>
                <View style={Styles.barist}></View>
                <Text style={Styles.textstyle}>{"Nikolajev"}</Text>
              </View>
              <View
                style={Styles.line}
              />
              <View style={Styles.textone}>
                <Text style={Styles.lefttext}>{"Email"}</Text>
                <View style={Styles.baremail}></View>
                <Text style={Styles.textstyle}>{'name.surname@ceibro.com'}</Text>
              </View>
              <View
                style={Styles.line}
              />
              <View style={Styles.textone}>
                <Text style={Styles.lefttext}>{"Contact"}</Text>
                <View style={Styles.barcontact}></View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={Styles.three}>{'+372'}</Text>
                  <Image source={Images.downarrow} style={Styles.dowimage} />
                  <Text style={Styles.five}>{"5679 7470"}</Text>
                </View>
              </View>
              <View
                style={Styles.line}
              />
              <View style={Styles.emailWrapper}>
                <Text style={Styles.lefttext}>
                  {"Password"}
                </Text>
                <View style={Styles.vertiLine}></View>

                <TextInput
                  style={Styles.emailInput}
                  value={password}
                  placeholder={"************"}
                  secureTextEntry={passwordSeen == false ? true : false}
                  placeholderTextColor={Colors.textColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({
                      password: value,
                    })
                  }}
                />
                <TouchableOpacity onPress={() => {
                  this.passwordShow()
                }}>
                  <Image source={Images.passwordVisible} style={Styles.inputImage} />
                </TouchableOpacity>
              </View>
              <View style={Styles.emailWrapper}>
                <View>
                  <Text style={Styles.lefttext}>{"Repeat"}</Text>
                  <Text style={Styles.lefttext}>{"password"}</Text>
                </View>
                <View style={Styles.vertiLine} />

                <TextInput
                  style={Styles.emailInput}
                  value={repeatPassword}
                  placeholder={"************"}
                  secureTextEntry={passwordPepeatSeen == false ? true : false}
                  placeholderTextColor={Colors.textColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({
                      repeatPassword: value,
                    })
                  }}
                />
                <TouchableOpacity onPress={() => {
                  this.passwordRepeactShow()
                }}>
                  <Image source={Images.passwordVisible} style={Styles.inputImage} />
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: hp('3%') }}>
                <View style={Styles.textone}>
                  <Text style={Styles.lefttext}>{"Company"}</Text>
                  <View style={{
                    height: '110%',
                    width: 1.5,
                    backgroundColor: '#DBDBE5',
                    marginLeft: hp('2.5%')
                  }}></View>
                  <Text style={Styles.textstyle}>{"Ceibro LTD"}</Text>
                </View>
              </View>
              <View
                style={Styles.line}
              />
              <View style={Styles.textone}>
                <Text style={Styles.lefttext}>{"VAT"}</Text>
                <View style={Styles.vat}></View>
                <Text style={Styles.textstyle}>{"123456865"}</Text>
              </View>
              <View
                style={Styles.line}
              />
              <View style={Styles.textone}>
                <Text style={Styles.lefttext}>{"Location"}</Text>
                <View style={Styles.locatbar}></View>
                <Text style={Styles.textstyle}>{"Vase 12, Tallin, Harjuma 12345"} </Text>
              </View>
              <View
                style={Styles.line}
              />

              <View style={Styles.textone}>
                <View>
                  <Text style={Styles.lefttext}>Work</Text>
                  <Text style={Styles.lefttext}>Number</Text>
                </View>
                <View style={Styles.workbar}></View>
                <View style={Styles.workview}>
                  <Text style={Styles.three}>{'+372'}</Text>
                  <Image source={Images.downarrow} style={Styles.dowimage} />
                  <Text style={Styles.five}>5679 7470</Text>
                </View>
              </View>
              <View
                style={Styles.line}
              />
              <View style={Styles.textone}>
                <Text style={Styles.lefttext}>Email</Text>
                <View style={Styles.emailview}></View>
                <Text style={Styles.textstyle}>{'name.surname@ceibro.com'}</Text>
              </View>
              <View
                style={Styles.line}
              />

              <TouchableOpacity style={Styles.currenttouch}>
                <Image source={Images.downarrow} style={Styles.dowimage} />
                <Text style={Styles.lastText}>Currently representing company</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.touchDelete}>
                <Image source={Images.Delete} style={Styles.imageDelete} />
                <Text style={Styles.lastTextone}>Delete Account</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


        </View>


      </>
    );
  }
}


export default EditScreen