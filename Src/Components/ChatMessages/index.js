import React, { useEffect, useState } from 'react';
import styles from './Styles';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ImageBackground
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export const ShowChatMessages = ({ showmessage, userId, oppositeUser, receiverID, senderID, questionModelCall }) => {
  const { message, sender, createdAt, receiverName, receiverProfession, receiverPic } = showmessage;
  var str_Name = receiverName.slice(0, 2)
  var date = new Date()
  const recieved = userId != 2;

  return <View style={senderID != sender ? styles.receivedWrapper : styles.chatMessageWrapper}>
    <View style={senderID != sender ? styles.receivedInnerWrapper : styles.chatMessageInner}>
      <View style={styles.chatMessageHeader}>
        {senderID != sender ?
          <View style={styles.avatarName}>
            {/* <Text style={styles.textName}>{"Rosa Morales Aspillaga"}</Text> */}
            <View style={{
              flexDirection: 'row',
              marginLeft: 5,
            }}>
              <Image source={Images.check} style={styles.ImageChecing} />
              <Image source={Images.check} style={styles.ImageChecing} />
            </View>
          </View>
          :
          <View style={{
            flexDirection: 'row',
            marginLeft: '60%'
          }}>
            <Image source={Images.check} style={styles.ImageChecing} />
          </View>
        }
      </View>

      {
        senderID != sender ?
          <>
            <Menu>
              <MenuTrigger>
                <View style={styles.chatMessageHeaderText}>
                  <View style={styles.innerView}>
                    <View style={styles.messageHeader}>
                      {
                        showmessage?.receiverPic ?
                          <Image source={receiverPic} style={styles.userPicImage} />
                          :
                          <View style={styles.userProfileWrapper}>
                            <Text style={styles.userProfileText}>{str_Name?.toUpperCase()}</Text>
                          </View>
                      }
                      <View style={{
                        marginLeft: hp(2)
                      }}>
                        <View style={styles.messageHeader}>
                          <Text style={styles.userName}>{receiverName}</Text>
                          <Text style={styles.DateWrapper1}>{createdAt}</Text>
                        </View>
                        <Text style={styles.displayMessage}>{`Company . ${receiverProfession}`}</Text>
                        <Text style={styles.messageText}>{message}</Text>

                        {
                          showmessage?.document == true ?
                            <View style={styles.documentWrapper}>
                              <View style={styles.documentInnerWrapper}>
                                <View style={styles.mediaFilesWrapper}>
                                  <TouchableOpacity>
                                    <Image source={Images.media1} style={styles.mediaFiles} />
                                  </TouchableOpacity>
                                  <TouchableOpacity>
                                    <Image source={Images.media2} style={styles.mediaFiles} />
                                  </TouchableOpacity>
                                  <TouchableOpacity>
                                    <Image source={Images.media3} style={styles.mediaFiles} />
                                  </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.menuContainer}>
                                  <Image source={Images.menu} style={styles.menuimage} />
                                </TouchableOpacity>
                              </View>
                            </View>
                            : null
                        }
                      </View>
                    </View>
                  </View>
                </View>


              </MenuTrigger>
              <MenuOptions
                customStyles={{
                  optionsContainer: {
                    marginTop: hp(2.2), borderRadius: 6, marginLeft: hp(4),
                    width: hp(35),
                  },
                  optionWrapper: {
                  },
                }}>
                <MenuOption>
                  <TouchableOpacity style={styles.menuOptionStyle}>
                    <Image source={Images.replyMessage} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Reply to message"}</Text>
                  </TouchableOpacity>
                </MenuOption>
                <View style={styles.menuDivider} />
                <MenuOption>
                  <TouchableOpacity style={styles.menuOptionStyle}>
                    <Image source={Images.forwardMessage} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Forward message"}</Text>
                  </TouchableOpacity>
                </MenuOption>
                <View style={styles.menuDivider} />
                <MenuOption>
                  <TouchableOpacity style={styles.menuOptionStyle}>
                    <Image source={Images.addTask} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Make as task"}</Text>
                  </TouchableOpacity>
                </MenuOption>
                <View style={styles.menuDivider} />
                <MenuOption>
                  <TouchableOpacity style={styles.menuOptionStyle}>
                    <Image source={Images.addTask} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Add subtask to existing task"}</Text>
                  </TouchableOpacity>
                </MenuOption>
                <View style={styles.menuDivider} />
                <MenuOption>
                  <TouchableOpacity style={styles.menuOptionStyle}>
                    <Image source={Images.invite} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Add temporary member"}</Text>
                  </TouchableOpacity>
                </MenuOption>
              </MenuOptions>
            </Menu>
            {/* Seen Users */}
            <View style={styles.bottomScene}>
              <View style={styles.mediaFilesWrapper}>
                <TouchableOpacity>
                  <Image source={Images.charUserpic1} style={styles.mediaSeenFiles} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={Images.charUserpic4} style={styles.mediaSeenFiles} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={Images.charUserpic5} style={styles.mediaSeenFiles} />
                </TouchableOpacity>
              </View>
              <Text style={styles.seenMessage}>{"Seen"}</Text>
            </View>
            {/* <Text style={styles.DateWrapper}>{createdAt}</Text> */}
          </>
          :
          <>
            <View style={styles.chatMessageHeaderText1}>
              <View style={styles.innerView}>
                <View style={styles.messageHeader}>
                  {
                    showmessage?.receiverPic ?
                      <Image source={receiverPic} style={styles.userPicImage} />
                      :
                      <View style={styles.userProfileWrapper}>
                        <Text style={styles.userProfileText}>{str_Name?.toUpperCase()}</Text>
                      </View>
                  }
                  <View style={{
                    marginLeft: hp(2)
                  }}>
                    <View style={styles.messageHeader}>
                      <Text style={styles.userName}>{receiverName}</Text>
                      <Text style={styles.DateWrapper1}>{createdAt}</Text>
                    </View>
                    <Text style={styles.displayMessage}>{`Company . ${receiverProfession}`}</Text>
                    {
                      showmessage?.questionare == true ?
                        <TouchableOpacity onPress={questionModelCall}
                          style={styles.questionContainer}>
                          <Text style={styles.questionText}>{"Questionarie name"}</Text>
                          <Image source={Images.document} style={styles.questionDoc} />
                        </TouchableOpacity>
                        :
                        <Text style={styles.messageText}>{message}</Text>
                    }

                    {
                      showmessage?.document == true ?
                        <View style={styles.documentWrapper}>
                          <View style={styles.documentInnerWrapper}>
                            <View style={styles.mediaFilesWrapper}>
                              <TouchableOpacity>
                                <Image source={Images.media1} style={styles.mediaFiles} />
                              </TouchableOpacity>
                              <TouchableOpacity>
                                <Image source={Images.media2} style={styles.mediaFiles} />
                              </TouchableOpacity>
                              <TouchableOpacity>
                                <Image source={Images.media3} style={styles.mediaFiles} />
                              </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.menuContainer}>
                              <Image source={Images.menu} style={styles.menuimage} />
                            </TouchableOpacity>
                          </View>
                        </View>
                        : null
                    }
                  </View>
                </View>
              </View>
            </View>
            {/* <Text style={styles.DateWrapper1}>{createdAt}</Text> */}
          </>
      }
    </View>
  </View>

}