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

  const profileName = `${props?.userData?.firstName?.[0]}${props?.userData?.surName?.[0]}`


  return (
    <>
      <View style={Styles.mainHeader}>
        <View style={Styles.mainContentHeader}>
          <Image source={Images.logo} style={Styles.headerLogo} />
          <View style={Styles.rightContent}>

            {/* Members Tag */}
            <TouchableOpacity onPress={() => {
              props.navigation.navigate('ProfileStack', {
                screen: 'Connection',
              })
            }}
              style={{ marginTop: hp(1.5) }}>

              <View style={Styles.notificationWrapper}>
                <Image source={Images.members} style={Styles.notificationImage} />
              </View>
              {
                props?.inviteCount != null && props?.inviteCount != 0 ?
                  <View style={Styles.notifTag}>
                    <Text style={Styles.tagTextStyle}>
                      {`${props?.inviteCount?.toString()}`}
                    </Text>
                  </View>
                  : null
              }
            </TouchableOpacity>
            {/* Notification Tag */}
            <TouchableOpacity style={{ marginTop: hp(1.5), marginLeft: hp(4) }}>

              <View style={Styles.notificationWrapper}>
                <Image source={Images.notification} style={Styles.notificationImage} />
              </View>
              {/* <View style={Styles.notifTag}>
                <Text style={Styles.tagTextStyle}>
                  {'5'}
                </Text>
              </View> */}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              props.navigation.navigate('ProfileStack', {
                screen: 'Profile',
              })
            }}>
              {
                props?.userData?.profilePic ?

                  <Image source={{ uri: props?.userData?.profilePic }} style={Styles.userPicImage} />
                  :
                  <View style={Styles.userProfileWrapper}>
                    <Text style={Styles.userProfileText}>{profileName?.toUpperCase()}</Text>
                  </View>
              }
            </TouchableOpacity>


          </View>
        </View>
      </View>
    </>
  )
}
export default Header;