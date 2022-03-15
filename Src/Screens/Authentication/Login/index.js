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


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checkBoxValue: false,
      passwordSeen: false
    };
  }

  onChange = () => {
    this.setState({ checkBoxValue: !this.state.checkBoxValue })
  }
  passwordShow = () => {
    this.setState({ passwordSeen: !this.state.passwordSeen })
  }
  render() {
    const { password, email, checkBoxValue, passwordSeen } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeAreaContainer} forceInset={{ top: 'never' }}>
            <StatusBar barStyle="light-content" />
            <View style={Styles.headerContent}>
              <ImageBackground source={Images.visual} style={Styles.headingBackground} >
                <Image source={Images.loginLogo} style={Styles.logoStyle} />
                <View style={Styles.innerHeader}>
                  <Text style={Styles.loginText}>{"Login"}</Text>
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

                <View style={Styles.emailWrapper}>
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

                <View style={Styles.orderCheckContainer}>
                  <CheckBox
                    disabled={false}
                    value={checkBoxValue}
                    onValueChange={this.onChange}
                    boxType='square'
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
                  <Text style={[Styles.cartProductName, {
                    marginLeft: hp(1.5),
                  }]}>{"Remember me"}</Text>
                </View>

                <View style={Styles.loginButtonContainer}>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate("Dashboard") }}
                  style={Styles.checkOutButton}>
                    <Text style={Styles.checkOutText}>{"Login"}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={Styles.forgotText}>{"Forgot Password?"}</Text>
                  </TouchableOpacity>
                </View>



              </View>
            </View>
            <View style={Styles.bottomContent1}>
              <View style={Styles.bottomContainer1}>
                <View style={Styles.orderCheckContainer}>
                  <Text style={Styles.noAccountText}>{"Don't have an account? "}</Text>
                  <TouchableOpacity>
                    <Text style={Styles.signupText}>{"Sign Up!"}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}
export default Login;