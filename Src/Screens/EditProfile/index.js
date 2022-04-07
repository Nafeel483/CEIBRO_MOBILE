import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import PhoneInput from "react-native-phone-number-input";
import Images from '../../Styles/Images'
import Colors from '../../Styles/Colors';
import Styles from './Styles';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { updateMyProfile, updateMyProfilePic } from '../../Redux/Actions/users';
import Loader from '../../Components/Loader';
import { showMessage, hideMessage } from "react-native-flash-message";
import { launchImageLibrary } from 'react-native-image-picker';
import * as API from '../../Redux/Selectors/AllApi';
import * as CONSTANTS from '../../Constants';



class EditScreen extends Component {
  constructor(props) {
    super(props);
    this.phoneInput = React.createRef();
    this.state = {
      password: '',
      repeatPassword: '',
      passwordSeen: false,
      checkBoxValue: false,
      passwordPepeatSeen: false,
      firstName: '',
      workEmail: '',
      surName: '',
      email: '',
      companyName: '',
      companyVat: '',
      companyLocation: '',
      companyPhone: '',
      phoneNumber: '',
      phoneFocus: false,
      formattedValue: '',
      companyPhoneNumber: ''
    }
  }
  componentDidMount = async () => {
    let password = await AsyncStorage.getItem('userPassword')
    const myProfile = this.props.route?.params?.myProfile
    console.log("tThe Phone Number:::::", "myProfile =", myProfile)
    if (myProfile != null && myProfile != undefined) {
      this.setState({
        email: myProfile?.email ? myProfile?.email : '',
        firstName: myProfile?.firstName ? myProfile?.firstName : '',
        surName: myProfile?.surName ? myProfile?.surName : '',
        password: password ? password : '',
        repeatPassword: password ? password : '',
        formattedValue: myProfile?.phone ? myProfile?.phone : '',
        companyName: myProfile?.companyName ? myProfile?.companyName : '',
        companyVat: myProfile?.companyVat ? myProfile?.companyVat : '',
        companyPhone: myProfile?.companyPhone ? myProfile?.companyPhone : '',
        companyLocation: myProfile?.companyLocation ? myProfile?.companyLocation : '',
        workEmail: myProfile?.workEmail ? myProfile?.workEmail : '',
        checkBoxValue: myProfile?.currentlyRepresenting == true ? myProfile?.currentlyRepresenting : false

      })
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
  focusPhone = () => {
    this.setState({
      phoneFocus: !this.state.phoneFocus,
    })
  }

  async selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };
    launchImageLibrary(options, async response => {

      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {

        const uri = response.uri;
        const type = response.type;
        const name = response.fileName;

        const path = response.uri.replace("file://", "");
        const source = {
          uri,
          type,
          name,
        }

        const source1 = {
          name: 'profilePic', type: `image/jpg`, uri
        }


        console.log("The path = ", path,)

        this.uploadProfilePic(source1)
      }

    });
  }
  uploadProfilePic = (source) => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token




    let data = {
      file: source,
      token: token
    }


    console.log(" The Data is==== ", data)
    this.props.updateMyProfilePic(data)
  }

  updateProfile = () => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    let id = this.props.auth?.userLogin?.user?.id

    const { password, checkBoxValue,
      firstName, workEmail, surName, companyName, companyVat, companyLocation,
      companyPhone, formattedValue, companyPhoneNumber
    } = this.state

    const data = {
      id: id,
      firstName: firstName,
      surName: surName,
      password: password,
      phone: formattedValue,
      companyName: companyName,
      companyVat: companyVat,
      companyPhone: companyPhone,
      companyLocation: companyLocation,
      workEmail: workEmail,
      currentlyRepresenting: checkBoxValue,
      token: token
    }
    console.log("Update Data:::", data)
    this.props.updateMyProfile(data)
  }



  render() {
    const { password, checkBoxValue, passwordPepeatSeen, passwordSeen, repeatPassword,
      firstName, workEmail, surName, email, companyName, companyVat, companyLocation,
      companyPhone, phoneNumber, phoneFocus, formattedValue, companyPhoneNumber
    } = this.state

    const { loadingUpdateProfile, loadingUpdateProfilePic } = this.props.user
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
            <TouchableOpacity onPress={this.updateProfile}
              style={Styles.touchwrite}>
              <Text style={Styles.btn}>{"Update"}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={Styles.line}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollStyle}>
              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}
                style={Styles.mainviewtwo}>
                <ImageBackground source={Images.userPic} style={Styles.mainimgtwo} imageStyle={{ borderRadius: 8 }}>
                  <Image source={Images.Photo} style={Styles.clickPhoto} />
                </ImageBackground>
              </TouchableOpacity>
              <View
                style={Styles.line}
              />
              {/* Name */}
              <View style={Styles.emailWrapper}>
                <Text style={Styles.lefttext}>
                  {"Name"}
                </Text>
                <View style={Styles.vertiLine}></View>

                <TextInput
                  style={Styles.emailInput}
                  value={firstName}
                  placeholder={"Name"}
                  placeholderTextColor={Colors.textColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({
                      firstName: value,
                    })
                  }}
                />
              </View>
              {/* Surname */}
              <View style={Styles.emailWrapper}>
                <Text style={Styles.lefttext}>
                  {"Surname"}
                </Text>
                <View style={Styles.vertiLine}></View>

                <TextInput
                  style={Styles.emailInput}
                  value={surName}
                  placeholder={"Surname"}
                  placeholderTextColor={Colors.textColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({
                      surName: value,
                    })
                  }}
                />
              </View>
              {/* Email */}
              <View style={Styles.emailWrapper}>
                <Text style={Styles.lefttext}>
                  {"Email"}
                </Text>
                <View style={Styles.vertiLine}></View>

                <TextInput
                  style={Styles.emailInput}
                  value={email}
                  placeholder={"Email"}
                  placeholderTextColor={Colors.textColor}
                  autoCapitalize='none'
                  editable={false}
                />
              </View>
              {/* Contact Number */}
              <View style={Styles.emailWrapper}>
                <Text style={Styles.lefttext}>
                  {"Contact Number"}
                </Text>
                <View style={Styles.vertiLine} />

                <PhoneInput
                  // ref={this.phoneInput}
                  defaultValue={formattedValue}
                  defaultCode="RO"
                  layout="second"
                  placeholder={"Contact Number"}
                  onChangeText={(text) => {
                    this.setState({
                      phoneNumber: text,
                      bothEmpty: false,
                      wrongPassword: false
                    });
                  }}

                  onChangeFormattedText={(text) => {
                    this.setState({ formattedValue: text });
                  }}
                  textInputProps={{
                    onFocus: this.focusPhone
                  }}
                  flagButtonStyle={{ marginTop: 15 }}
                  textContainerStyle={{ backgroundColor: 'transparent', marginTop: Platform.OS == 'ios' ? 0 : 0 }}
                  textInputStyle={{ width: '60%', backgroundColor: 'transparent', borderColor: "transparent" }}
                  containerStyle={{ width: '74%', backgroundColor: 'transparent', borderColor: "transparent" }}
                // withDarkTheme
                // autoFocus
                />
              </View>
              {/* Password */}
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
              {/* Repeat password */}
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
              {/* Company */}
              <View style={Styles.emailWrapper}>
                <Text style={Styles.lefttext}>
                  {"Company"}
                </Text>
                <View style={Styles.vertiLine}></View>

                <TextInput
                  style={Styles.emailInput}
                  value={companyName}
                  placeholder={"Company"}
                  placeholderTextColor={Colors.textColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({
                      companyName: value,
                    })
                  }}
                />
              </View>
              {/* VAT */}
              <View style={Styles.emailWrapper}>
                <Text style={Styles.lefttext}>
                  {"VAT"}
                </Text>
                <View style={Styles.vertiLine}></View>

                <TextInput
                  style={Styles.emailInput}
                  value={companyVat}
                  placeholder={"VAT"}
                  placeholderTextColor={Colors.textColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({
                      companyVat: value,
                    })
                  }}
                />
              </View>
              {/* Location */}
              <View style={Styles.emailWrapper}>
                <Text style={Styles.lefttext}>
                  {"Location"}
                </Text>
                <View style={Styles.vertiLine}></View>

                <TextInput
                  style={Styles.emailInput}
                  value={companyLocation}
                  placeholder={"Location"}
                  placeholderTextColor={Colors.textColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({
                      companyLocation: value,
                    })
                  }}
                />
              </View>

              {/* Work Number */}
              <View style={Styles.emailWrapper}>
                <Text style={Styles.lefttext}>
                  {"Work Number"}
                </Text>
                <View style={Styles.vertiLine}></View>

                <PhoneInput
                  // ref={this.phoneInput}
                  defaultValue={companyPhone}
                  defaultCode="RO"
                  layout="second"
                  placeholder={"Contact Number"}
                  onChangeText={(text) => {
                    this.setState({
                      companyPhoneNumber: text,

                    });
                  }}

                  onChangeFormattedText={(text) => {
                    this.setState({ companyPhone: text });
                  }}
                  textInputProps={{
                    onFocus: this.focusPhone
                  }}
                  flagButtonStyle={{ marginTop: 15 }}
                  textContainerStyle={{ backgroundColor: 'transparent', marginTop: Platform.OS == 'ios' ? 0 : 0 }}
                  textInputStyle={{ width: '60%', backgroundColor: 'transparent', borderColor: "transparent" }}
                  containerStyle={{ width: '74%', backgroundColor: 'transparent', borderColor: "transparent" }}
                // withDarkTheme
                // autoFocus
                />

              </View>
              {/* E-mail */}
              <View style={Styles.emailWrapper}>
                <Text style={Styles.lefttext}>
                  {"E-mail"}
                </Text>
                <View style={Styles.vertiLine}></View>

                <TextInput
                  style={Styles.emailInput}
                  value={workEmail}
                  placeholder={"E-mail"}
                  placeholderTextColor={Colors.textColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({
                      workEmail: value,
                    })
                  }}
                />
              </View>



              <View style={Styles.currenttouch}>
                <CheckBox
                  disabled={false}
                  value={checkBoxValue}
                  onValueChange={this.onChange}
                  boxType='square'
                  tintColors={checkBoxValue == true ? Colors.golden : "#DADFE6"}
                  onCheckColor={Colors.golden}
                  onTintColor={Colors.golden}
                  tintColor={'#DADFE6'}
                  style={{
                    // marginTop: 5,
                    width: hp(2.5),
                    height: hp(2.5),
                    borderRadius: 15
                  }}
                  onAnimationType={'stroke'}
                  offAnimationType={'one-stroke'}
                />
                <Text style={[Styles.lastText, {
                  marginLeft: hp(2),
                }]}>{"Currently representing company"}</Text>
              </View>
              <TouchableOpacity style={Styles.touchDelete}>
                <Image source={Images.Delete} style={Styles.imageDelete} />
                <Text style={Styles.lastTextone}>{"Delete Account"}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


        </View>
        {loadingUpdateProfile || loadingUpdateProfilePic ? <Loader /> : null}


      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateMyProfile: (user) => dispatch(updateMyProfile(user)),
    updateMyProfilePic: (user) => dispatch(updateMyProfilePic(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditScreen);
