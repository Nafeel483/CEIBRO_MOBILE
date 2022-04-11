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
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const InviteUser = (props) => {
  const { open, close, submit } = props

  const [inviteEmail, setInviteEmail] = useState("")
  const [validInvite, setValidinvite] = useState(false)

  const emailValidation = (email) => {
    setInviteEmail(email)
    if (reg.test(email) === true) {
      setValidinvite(true)
    }
    else {
      setValidinvite(false)
    }
  }

  const sendIvite = () => {
    submit(inviteEmail)
  }
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
        style={{ flex: 1, justifyContent: 'center', }}>
        <View style={Styles.modalCont}>
          {/* Heading */}
          <View style={Styles.headerWrapper}>
            <TouchableOpacity onPress={close}>
              <Image source={Images.close} style={Styles.Setimage} />
            </TouchableOpacity>
            <Text style={Styles.touchViewprofileOne}>{"Invite User"}</Text>
            <View style={{ width: hp(5) }} />

          </View>
          <View style={Styles.seperator} />

          <View style={[Styles.emailWrapper, { borderColor: inviteEmail.length > 0 ? Colors.blue : Colors.lightGrey }]}>
            <Image source={Images.invite} style={Styles.menuOptionImage} />
            <View style={Styles.inboxLine} />
            <TextInput
              style={Styles.emailInput}
              value={inviteEmail}
              placeholder={"Enter Email for Invite"}
              placeholderTextColor={Colors.textColor}
              autoCapitalize='none'
              onChangeText={(value) => {
                emailValidation(value)
              }}
            />
          </View>
          <TouchableOpacity onPress={sendIvite}
            style={[Styles.filterStyle, { backgroundColor: validInvite == true ? Colors.blue : Colors.lightGrey }]}>
            <Text style={Styles.plusIconText}>{"Invite"}</Text>
          </TouchableOpacity>


        </View>
      </Modal>
    </>
  );
}
export default InviteUser;