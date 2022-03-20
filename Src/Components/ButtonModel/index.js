import React, { Component } from 'react';
import {
  Image,
  View,
  ImageBackground,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ButtonModel = (props) => {
  const { open, close, actions, handleItemPress } = props


  return (
    <>
      <Modal animationInTiming={300}
        animationOutTiming={300}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.9}
        avoidKeyboard={true}
        backdropColor={"rgba(255,255,255,1)"}
        transparent={true}
        isVisible={open}
        onBackdropPress={close}
        style={Styles.modalContainer}>
        <View style={Styles.modalWrapper}>

          {
            actions?.map((item, index) => {
              return (
                <>
                  <View style={Styles.listButtonWrapper}>
                    <TouchableOpacity onPress={() =>handleItemPress(item, index)}>
                      <Text style={Styles.textTitle}>{item.label}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>handleItemPress(item, index)}>
                      <Image source={item.image} style={Styles.imageStyle} />
                    </TouchableOpacity>
                  </View>
                </>
              )
            })
          }

          <TouchableOpacity onPress={close}>
            <Image source={Images.closeIcon} style={Styles.filterStyle} />
          </TouchableOpacity>

        </View>
      </Modal>
    </>
  );
}
export default ButtonModel;