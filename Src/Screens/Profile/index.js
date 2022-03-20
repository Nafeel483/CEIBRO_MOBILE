import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Images from '../../Styles/Images'
import Styles from './Styles'
import Colors from '../../Styles/Colors';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

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
                <TouchableOpacity>

                  <Image source={Images.write} style={Styles.Setimage} />
                </TouchableOpacity>
              </View>
              <View
                style={Styles.line}
              />
              <View style={Styles.mainviewtwo}>
                <Image source={Images.userPic} style={Styles.mainimgtwo} />
                <Text style={Styles.textiija}>{"Ilja Nikolajev"}</Text>
                <Text>{"@name.surname"}</Text>
                <Text style={Styles.textno}>{'+ 372 5512 3456'}</Text>
                <Text style={{ color: '#0076CB' }}>{'name.surname@ceibro.com'}</Text>
                <Text style={Styles.company}>{'Company Ltd'}</Text>
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
                    <View style={Styles.myconnectionContainer}>
                      <Text style={Styles.myconnectionnumber}>{"123"}</Text>
                    </View>
                    <View style={Styles.myConWrapper}>
                      <Text style={Styles.mycon}>{"4"}</Text>
                    </View>
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
                <TouchableOpacity style={Styles.touchimglogout}>
                  <Image source={Images.logOut} style={Styles.imglogout} />
                  <Text style={Styles.touchtextlogout}>{"Logout"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.touchableimgarrow}>
                  <Image source={Images.rightArrow} style={Styles.imgarrow} />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </>

    )

  }

}

export default Profile;