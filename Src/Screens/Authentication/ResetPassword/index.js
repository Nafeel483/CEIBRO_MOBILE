import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { resetUserPassword } from '../../../Redux/Actions/auth';
import Loader from '../../../Components/Loader';
import { showMessage, hideMessage } from "react-native-flash-message";

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      password: '',
      c_password: '',
      passwordSeen: false,
      c_passwordSeen: false
    };
  }

  c_passwordShow = () => {
    this.setState({ c_passwordSeen: !this.state.c_passwordSeen })
  }
  passwordShow = () => {
    this.setState({ passwordSeen: !this.state.passwordSeen })
  }

  submit = () => {
    const { otp, password, c_password } = this.state
    if (otp.length == 0) {
      showMessage({
        message: "Invaid OTP Code",
        description: "Enter Valid OTP Code",
        type: "default",
        backgroundColor: "#9c1730", // background color
        color: "white", // text color
      });
    }
    else if (password.length == 0 || regPassword.test(password) === false) {
      showMessage({
        message: "Invaid Password",
        description: "Password must contain at least 8 characters, one uppercase, one number and one special case character",
        type: "default",
        backgroundColor: "#9c1730", // background color
        color: "white", // text color
      });
    }
    else if (c_password.length == 0 || regPassword.test(c_password) === false) {
      showMessage({
        message: "Invaid Repeat Password",
        description: "Repeat Password must contain at least 8 characters, one uppercase, one number and one special case character",
        type: "default",
        backgroundColor: "#9c1730", // background color
        color: "white", // text color
      });
    }
    else if (password != c_password) {
      showMessage({
        message: "Password Not Matched",
        description: "Re-Enter Password / Repeat Password For Match",
        type: "default",
        backgroundColor: "#9c1730", // background color
        color: "white", // text color
      });
    }
    else {
      const user = {
        otp: otp,
        password: password
      };
      console.log("otp User::", user)
      this.props.resetUserPassword(user);

      // this.props.navigation.navigate('Dashboard')
    }
  }

  render() {
    const { otp, c_password, c_passwordSeen, password, passwordSeen } = this.state
    const { loadingReset } = this.props.auth

    return (
      <>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={Styles.fullContainer}>
          <SafeAreaProvider>
            <SafeAreaView style={Styles.safeAreaContainer} forceInset={{ top: 'never' }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="light-content" />
                <View style={Styles.headerContent}>
                  <ImageBackground source={Images.visual} style={Styles.headingBackground} >
                    <Image source={Images.loginLogo} style={Styles.logoStyle} />
                    <View style={Styles.innerHeader}>
                      <Text style={Styles.loginText}>{"Reset Password"}</Text>
                    </View>
                  </ImageBackground>
                </View>
                <View style={Styles.bottomContent}>
                  <View style={Styles.bottomContainer}>

                    <View style={Styles.emailWrapper}>
                      <TextInput
                        style={Styles.emailInput}
                        value={otp}
                        placeholder={"Type Otp Code"}
                        placeholderTextColor={Colors.textColor}
                        autoCapitalize='none'
                        onChangeText={(value) => {
                          this.setState({
                            otp: value,
                          })
                        }}
                      />
                    </View>

                    <View style={Styles.emailWrapper}>
                      <TextInput
                        style={Styles.emailInput}
                        value={password}
                        placeholder={"New User Password"}
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
                      <TextInput
                        style={Styles.emailInput}
                        value={c_password}
                        placeholder={"Re-Type User Password"}
                        secureTextEntry={c_passwordSeen == false ? true : false}
                        placeholderTextColor={Colors.textColor}
                        autoCapitalize='none'
                        onChangeText={(value) => {
                          this.setState({
                            c_password: value,
                          })
                        }}
                      />
                      <TouchableOpacity onPress={() => {
                        this.c_passwordShow()
                      }}>
                        <Image source={Images.passwordVisible} style={Styles.inputImage} />
                      </TouchableOpacity>
                    </View>



                    <View style={Styles.loginButtonContainer}>
                      <TouchableOpacity onPress={this.submit}
                        // onPress={() => {
                        //   this.props.navigation.navigate('BottomTabView', {
                        //     screen: 'Dashboard',
                        //   })
                        // }}
                        style={Styles.checkOutButton}>
                        <Text style={Styles.checkOutText}>{"Confirm"}</Text>
                      </TouchableOpacity>

                    </View>



                  </View>
                </View>
                <View style={Styles.bottomContent1}>
                  <View style={Styles.bottomContainer1}>
                    <View style={Styles.orderCheckContainer}>
                      <Text style={Styles.noAccountText}>{"Already Verify? "}</Text>
                      <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('AuthStack', {
                          screen: 'Login',
                        })
                      }}>
                        <Text style={Styles.signupText}>{"Login"}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {loadingReset ? <Loader /> : null}
              </ScrollView>
            </SafeAreaView>
          </SafeAreaProvider>
        </KeyboardAwareScrollView>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    resetUserPassword: (user) => dispatch(resetUserPassword(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);