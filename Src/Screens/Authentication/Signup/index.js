import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  FlatList
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import CheckBox from '@react-native-community/checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { showMessage, hideMessage } from "react-native-flash-message";
import { connect } from 'react-redux';
import { registerUser } from '../../../Redux/Actions/auth';
import Loader from '../../../Components/Loader';

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      c_password: '',
      l_name: '',
      f_name: '',
      checkBoxValue: false,
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
    const { f_name, l_name, email, password, c_password, } = this.state
    if (f_name.length == 0) {
      showMessage({
        message: "Invaid First Name",
        description: "Enter First Name",
        type: "default",
        backgroundColor: "#9c1730", // background color
        color: "white", // text color
      });
    }
    else if (l_name.length == 0) {
      showMessage({
        message: "Invaid Last Name",
        description: "Enter Last Name",
        type: "default",
        backgroundColor: "#9c1730", // background color
        color: "white", // text color
      });
    }
    else if (email.length == 0 || reg.test(email) === false) {
      showMessage({
        message: "Invaid Email",
        description: "Enter Valid Email",
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
        firstName: f_name,
        surName: l_name,
        email: email,
        password: password,
      };
      console.log("Register User::", user)
      this.props.userRegister(user);

      // this.props.navigation.navigate('Dashboard')
    }
  }



  render() {
    const { password, email, passwordSeen,
      l_name, f_name,
      c_password, c_passwordSeen } = this.state
    const { loadingRegister } = this.props.auth

    return (
      <>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={Styles.fullContainer}>
          <SafeAreaProvider>
            <SafeAreaView style={Styles.safeAreaContainer} forceInset={{ top: 'never', bottom: 'never' }}>
              <StatusBar barStyle="light-content" />
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.headerContent}>
                  <ImageBackground source={Images.visual} style={Styles.headingBackground} >
                    <Image source={Images.loginLogo} style={Styles.logoStyle} />
                    <View style={Styles.innerHeader}>
                      <Text style={Styles.loginText}>{"Register"}</Text>
                    </View>
                  </ImageBackground>
                </View>
                <View style={Styles.scrollStyle}>
                  <View style={Styles.bottomContent}>
                    <View style={Styles.bottomContainer}>

                      <View style={Styles.emailWrapper}>
                        <TextInput
                          style={Styles.emailInput}
                          value={f_name}
                          placeholder={"First Name"}
                          placeholderTextColor={Colors.textColor}
                          autoCapitalize='none'
                          onChangeText={(value) => {
                            this.setState({
                              f_name: value,
                            })
                          }}
                        />
                      </View>
                      <View style={Styles.emailWrapper}>
                        <TextInput
                          style={Styles.emailInput}
                          value={l_name}
                          placeholder={"Last Name"}
                          placeholderTextColor={Colors.textColor}
                          autoCapitalize='none'
                          onChangeText={(value) => {
                            this.setState({
                              l_name: value,
                            })
                          }}
                        />
                      </View>

                      <View style={Styles.emailWrapper}>
                        <TextInput
                          style={Styles.emailInput}
                          value={email}
                          placeholder={"Enter username or email"}
                          placeholderTextColor={Colors.textColor}
                          autoCapitalize='none'
                          onChangeText={(value) => {
                            this.setState({
                              email: value,
                            })
                          }}
                        />
                      </View>

                      <View style={Styles.emailWrapper}>
                        <TextInput
                          style={Styles.emailInput}
                          value={password}
                          placeholder={"User Password"}
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
                          style={Styles.checkOutButton}>
                          <Text style={Styles.checkOutText}>{"Register"}</Text>
                        </TouchableOpacity>

                      </View>



                    </View>
                  </View>
                  <View style={Styles.bottomContent1}>
                    <View style={Styles.bottomContainer1}>
                      <View style={Styles.orderCheckContainer}>
                        <Text style={Styles.noAccountText}>{"Already have an account? "}</Text>
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
                </View>
              </ScrollView>
              {loadingRegister ? <Loader /> : null}
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
    userRegister: (user) => dispatch(registerUser(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);