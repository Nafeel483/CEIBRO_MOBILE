import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Images from '../../Styles/Images'
import Styles from './Styles'
import Colors from '../../Styles/Colors';
import { connect } from 'react-redux';
import { logoutUser } from '../../Redux/Actions/auth';
import { getMyProfile } from '../../Redux/Actions/users';
import Loader from '../../Components/Loader';
import { showMessage, hideMessage } from "react-native-flash-message";


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    this.focusListener = this.props.navigation.addListener('focus', async () => {
      let accessToken = this.props.auth?.userLogin?.tokens?.access?.token
      this.props.getMyProfile(accessToken)
    })
    let accessToken = this.props.auth?.userLogin?.tokens?.access?.token
    this.props.getMyProfile(accessToken)
  }

  userlogOut = () => {
    let data = {
      refreshToken: this.props.auth?.userLogin?.tokens?.refresh?.token
    }
    this.props.logoutUser(data)
  }



  render() {

    const { loadingMyProfile } = this.props.user
    const myProfile = this.props.user?.myProfile

    const profileName = `${this.props.user?.myProfile?.firstName?.[0]}${this.props.user?.myProfile?.surName?.[0]}`
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.MainContainer} >
            <View style={Styles.firstPortion}>
              <View style={Styles.contain} >
                <View style={Styles.myconnect}>
                  <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                    <Image source={Images.leftArrow} style={Styles.Setimage} />
                  </TouchableOpacity >
                  <View style={Styles.touchviewone}>
                    <Text style={Styles.touchViewprofileOne}>{"Profile"}</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('ProfileStack', {
                    screen: 'EditProfile',
                    params: {
                      myProfile: myProfile,
                    }
                  })
                }}>

                  <Image source={Images.write} style={Styles.searchStyle} />
                </TouchableOpacity>
              </View>
              <View
                style={Styles.line}
              />
              <View style={Styles.mainviewtwo}>
                {myProfile?.profilePic ?
                  <Image source={{ uri: myProfile?.profilePic }} style={Styles.mainimgtwo} />
                  :
                  <View style={Styles.userProfileWrapper}>
                    <Text style={Styles.userProfileText}>{profileName?.toUpperCase()}</Text>
                  </View>
                }
                <Text style={Styles.textiija}>{`${myProfile?.firstName} ${myProfile?.surName}`}</Text>
                <Text>{myProfile?.email}</Text>
                <Text style={Styles.textno}>{myProfile?.companyPhone ? myProfile?.companyPhone : ""}</Text>
                <Text style={{ color: '#0076CB' }}>{myProfile?.workEmail ? myProfile?.workEmail : ""}</Text>
                <Text style={Styles.company}>{myProfile?.companyName ? myProfile.companyName : ""}</Text>
              </View>

              <View
                style={Styles.line}
              />
              <View style={Styles.connect}>
                <View style={Styles.myconnect}>
                  <TouchableOpacity>
                    <Image source={Images.contacts} style={Styles.imgtouch} />
                  </TouchableOpacity>
                  <View style={Styles.myconnect}>
                    <Text style={Styles.myconnectionmain}>{"My connections"}</Text>
                    {/* <View style={Styles.myconnectionContainer}>
                      <Text style={Styles.myconnectionnumber}>{"123"}</Text>
                    </View> */}
                    {/* <View style={Styles.myConWrapper}>
                      <Text style={Styles.mycon}>{"4"}</Text>
                    </View> */}
                  </View>
                </View>
                <TouchableOpacity style={Styles.touchrightarrow}>
                  <Image source={Images.rightArrow} style={Styles.imgrightarrow} />
                </TouchableOpacity>

              </View>
              <View
                style={Styles.line}
              />
              <View style={Styles.connect}>
                <View style={Styles.myconnect}>
                  <TouchableOpacity>
                    <Image source={Images.Setting} style={Styles.imgtouch} />
                  </TouchableOpacity>
                  <View style={Styles.myconnect}>
                    <Text style={Styles.myconnectionmain}>{"Admin"}</Text>
                  </View>
                </View>
                <TouchableOpacity style={Styles.touchrightarrow}>
                  <Image source={Images.rightArrow} style={Styles.imgrightarrow} />
                </TouchableOpacity>
              </View>
              <View
                style={Styles.line}
              />
            </View>
            <View style={Styles.secondPortion}>
              <View style={Styles.mainlog}>
                <TouchableOpacity onPress={this.userlogOut}
                  style={Styles.touchimglogout}>
                  <Image source={Images.logOut} style={Styles.imglogout} />
                  <Text style={Styles.touchtextlogout}>{"Logout"}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.userlogOut}
                  style={Styles.touchableimgarrow}>
                  <Image source={Images.rightArrow} style={Styles.imgarrow} />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
        {loadingMyProfile ? <Loader /> : null}
      </>

    )

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
    logoutUser: (user) => dispatch(logoutUser(user)),
    getMyProfile: (user) => dispatch(getMyProfile(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);