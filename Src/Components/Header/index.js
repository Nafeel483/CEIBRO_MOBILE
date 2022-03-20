import React, { useState } from 'react';
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
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';

const Header = (props) => {

  return (
    <>
      <View style={Styles.mainHeader}>
        <View style={Styles.mainContentHeader}>
          <Image source={Images.logo} style={Styles.headerLogo} />
          <View style={Styles.rightContent}>

            {/* Members Tag */}
            <TouchableOpacity style={{ marginTop: hp(1.5) }}>

              <View style={Styles.notificationWrapper}>
                <Image source={Images.members} style={Styles.notificationImage} />
              </View>
              <View style={Styles.notifTag}>
                <Text style={Styles.tagTextStyle}>
                  {'4'}
                </Text>
              </View>
            </TouchableOpacity>
            {/* Notification Tag */}
            <TouchableOpacity style={{ marginTop: hp(1.5), marginLeft: hp(4) }}>

              <View style={Styles.notificationWrapper}>
                <Image source={Images.notification} style={Styles.notificationImage} />
              </View>
              <View style={Styles.notifTag}>
                <Text style={Styles.tagTextStyle}>
                  {'5'}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              props.navigation.navigate('ProfileStack', {
                screen: 'Profile',
              })
            }}>
              <Image source={Images.userPic} style={Styles.userPicImage} />
            </TouchableOpacity>


          </View>
        </View>
      </View>
    </>
  )
}
export default Header;