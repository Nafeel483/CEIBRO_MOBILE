import React, { useState } from 'react';
import {
  Image,
  View,
  ImageBackground,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Modal from 'react-native-modal';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import CheckBox from '@react-native-community/checkbox';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ChatRoomMembers = (props) => {
  const { open, close, moreMembersList, chatMemberName,
    memberId,
    selectCheckedMembers, submit } = props

  return (
    <>
      <Modal animationInTiming={300}
        animationOutTiming={300}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.9}
        avoidKeyboard={true}
        backdropColor={"rgba(0,0,0,0.7)"}
        transparent={true}
        isVisible={open}
        onBackdropPress={close}
        style={{ flex: 1, justifyContent: 'flex-start', marginTop: hp(6) }}>
        <View style={Styles.modalCont}>
          {/* Heading */}
          <View style={Styles.headerWrapper}>
            <TouchableOpacity onPress={close}>
              <Image source={Images.close} style={Styles.Setimage} />
            </TouchableOpacity>
            <Text style={Styles.touchViewprofileOne}>{"Add Members"}</Text>
            <TouchableOpacity onPress={submit}
              style={Styles.filterStyle}>
              <Text style={Styles.plusIconText}>{"Add"}</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.seperator} />
          {/* Heading Ends*/}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>
              {
                moreMembersList?.length > 0 ?
                  moreMembersList?.map((val, index) => {
                    return (
                      <>
                        <TouchableOpacity onPress={() => selectCheckedMembers(val)}
                          style={Styles.headerWrapper}>
                          <Text style={Styles.userName}>{`${val?.firstName} ${val?.surName}`}</Text>
                          {
                            chatMemberName != '' && memberId == val?.id ?
                              <Image source={Images.checked} style={Styles.checkStyle} />
                              :
                              <Image source={Images.emptyChecked} style={Styles.checkStyle} />
                          }
                        </TouchableOpacity>
                        <View style={Styles.seperator} />
                      </>
                    )
                  }) :
                  null
              }
            </View>

          </ScrollView>
        </View>
      </Modal>
    </>
  );
}
export default ChatRoomMembers;