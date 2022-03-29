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
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { loginWithEmail } from '../../../Redux/Actions/auth';
import Loader from '../../../Components/Loader';
import { showMessage, hideMessage } from "react-native-flash-message";

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checkBoxValue: false,
      passwordSeen: false,
      emptyEmail: false,
      emptyPassword: false
    };
  }

  onChange = () => {
    this.setState({ checkBoxValue: !this.state.checkBoxValue })
  }
  passwordShow = () => {
    this.setState({ passwordSeen: !this.state.passwordSeen })
  }

  submit = () => {
    const { email, password, storeID } = this.state
    if (email.length == 0 || reg.test(email) === false) {
      showMessage({
        message: "Invaid Email",
        description: "Enter Valid Email",
        type: "default",
        backgroundColor: "#9c1730", // background color
        color: "white", // text color
      });
    }
    else if (password.length == 0) {
      showMessage({
        message: "Invaid Password",
        description: "Enter Valid Password",
        type: "default",
        backgroundColor: "#9c1730", // background color
        color: "white", // text color
      });
    }
    else {
      const user = {
        email: email,
        password: password,
      };
      console.log("Login User::", user)
      this.props.loginUsers(user);

      // this.props.navigation.navigate('Dashboard')
    }
  }

  render() {
    const { password, email, checkBoxValue, passwordSeen } = this.state
    const { loadingLoginEmail } = this.props.auth

    return (
      <>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={Styles.fullContainer}>
          <SafeAreaProvider>
            <SafeAreaView style={Styles.safeAreaContainer} forceInset={{ top: 'never' }}>
              <StatusBar barStyle="light-content" />
              <View style={Styles.headerContent}>
                <ImageBackground source={Images.visual} style={Styles.headingBackground} >
                  <Image source={Images.loginLogo} style={Styles.logoStyle} />
                  <View style={Styles.innerHeader}>
                    <Text style={Styles.loginText}>{"Forgot Password"}</Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={Styles.bottomContent}>
                <View style={Styles.bottomContainer}>

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

                

                  <View style={Styles.loginButtonContainer}>
                    <TouchableOpacity onPress={this.submit}
                      // onPress={() => {
                      //   this.props.navigation.navigate('BottomTabView', {
                      //     screen: 'Dashboard',
                      //   })
                      // }}
                      style={Styles.checkOutButton}>
                      <Text style={Styles.checkOutText}>{"Forgot Password"}</Text>
                    </TouchableOpacity>
                    
                  </View>



                </View>
              </View>
              <View style={Styles.bottomContent1}>
                <View style={Styles.bottomContainer1}>
                  <View style={Styles.orderCheckContainer}>
                    <Text style={Styles.noAccountText}>{"Don't have an account? "}</Text>
                    <TouchableOpacity onPress={() => {
                      this.props.navigation.navigate('AuthStack', {
                        screen: 'Signup',
                      })
                    }}>
                      <Text style={Styles.signupText}>{"Sign Up!"}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {loadingLoginEmail ? <Loader /> : null}
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
    loginUsers: (user) => dispatch(loginWithEmail(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);