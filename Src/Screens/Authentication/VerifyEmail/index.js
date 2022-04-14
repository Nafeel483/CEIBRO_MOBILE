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
import { verifyUser } from '../../../Redux/Actions/auth';
import Loader from '../../../Components/Loader';
import { showMessage, hideMessage } from "react-native-flash-message";

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



class VerifyEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
    };
  }

  submit = () => {
    const { otp } = this.state
    if (otp.length == 0) {
      showMessage({
        message: "Invaid OTP Code",
        description: "Enter Valid OTP Code",
        type: "default",
        backgroundColor: "#9c1730", // background color
        color: "white", // text color
      });
    }
    else {
      const user = {
        otp: otp,
      };
      console.log("otp User::", user)
      this.props.verifyUser(user);

      // this.props.navigation.navigate('Dashboard')
    }
  }

  render() {
    const { otp } = this.state
    const { loadingVerifyOtp } = this.props.auth

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
                      <Text style={Styles.loginText}>{"Verify Email"}</Text>
                    </View>
                  </ImageBackground>
                </View>
                <View style={Styles.bottomContent}>
                  <View style={Styles.bottomContainer}>

                    <View style={Styles.emailWrapper}>
                      <TextInput
                        style={Styles.emailInput}
                        value={otp}
                        placeholder={"Enter Otp Code"}
                        placeholderTextColor={Colors.textColor}
                        autoCapitalize='none'
                        onChangeText={(value) => {
                          this.setState({
                            otp: value,
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
                        <Text style={Styles.checkOutText}>{"Verify"}</Text>
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
                {loadingVerifyOtp ? <Loader /> : null}
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
    verifyUser: (user) => dispatch(verifyUser(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyEmail);