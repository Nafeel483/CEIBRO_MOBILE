import React, { useEffect, useState } from 'react';
import styles from './Styles';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  FlatList
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

export const ShowChatMessages = ({ key, showmessage, userId, chatRoomMembers, questionModelCall }) => {
  const { sender, createdAt, receiverName, receiverProfession, receiverPic,
    myMessage, time, message,
  } = showmessage;
  var str_Name = showmessage?.sender?.firstName ? `${showmessage?.sender?.firstName?.[0]} ${showmessage?.sender?.surName?.[0]}` : ""
  var date = new Date()
  const recieved = userId != 2;

  let seenMembers = chatRoomMembers?.length > 0 ? chatRoomMembers?.filter(o1 => showmessage?.readBy?.find(o2 => o1?.id === o2)) : []

  // console.log("All___Seen Members:::::", seenMembers)
  const mediaList = (item, index) => {
    return (
      <>
        <TouchableOpacity key={index}>
          <Image source={{ uri: item?.url }} style={styles.mediaFiles} />
        </TouchableOpacity>
      </>
    )
  }
  const showSeenMembers = (item, index) => {
    return (
      <>
        {
          item?.profilePic ?
            <TouchableOpacity>
              <Image source={{ uri: item?.profilePic }} style={styles.mediaSeenFiles} />
            </TouchableOpacity> :

            <TouchableOpacity style={styles.mediaSeenFilesName}>
              <Text style={styles.mediaSeenInnerName}>{`${item?.firstName?.[0]} ${item?.surName?.[0]}`}</Text>
            </TouchableOpacity>
        }
      </>
    )
  }

  return <View key={key}
    style={myMessage == false ? styles.receivedWrapper : styles.chatMessageWrapper}>
    <View style={myMessage == false ? styles.receivedInnerWrapper : styles.chatMessageInner}>
      <View style={styles.chatMessageHeader}>
        {myMessage == false ?
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
        myMessage == false ?
          <>
            <Menu>
              <MenuTrigger>
                <View style={styles.chatMessageHeaderText}>
                  <View style={styles.innerView}>
                    <View style={styles.messageHeader}>
                      {
                        showmessage?.sender?.profilePic ?
                          <Image source={{ uri: showmessage?.sender?.profilePic }} style={styles.userPicImage} />
                          :
                          <View style={styles.userProfileWrapper}>
                            <Text style={styles.userProfileText}>{str_Name?.toUpperCase()}</Text>
                          </View>
                      }
                      <View style={{
                        marginLeft: hp(2)
                      }}>
                        <View style={styles.messageHeader}>
                          <Text style={styles.userName}>{`${showmessage?.sender?.firstName} ${showmessage?.sender?.surName}`}</Text>
                          <Text style={styles.DateWrapper1}>{time}</Text>
                        </View>
                        {
                          showmessage?.sender?.companyName ?
                            <Text style={styles.displayMessage}>{`Company . ${showmessage?.sender?.companyName}`}</Text>
                            : null
                        }

                        {
                          showmessage?.questions?.length > 0 ?
                            <TouchableOpacity onPress={questionModelCall}
                              style={styles.questionContainer}>
                              <Text style={styles.questionText}>{"Questionarie name"}</Text>
                              <Image source={Images.document} style={styles.questionDoc} />
                            </TouchableOpacity>
                            :
                            <Text style={styles.messageText}>{message}</Text>
                        }
                        {
                          showmessage?.files?.length > 0 ?
                            <View style={styles.documentWrapper}>
                              <View style={styles.documentInnerWrapper}>
                                <View style={styles.mediaFilesWrapper}>
                                  <FlatList
                                    key={4}
                                    horizontal={false}
                                    scrollEnabled={false}
                                    numColumns={4}
                                    data={showmessage?.files}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item, index }) => mediaList(item, index)}
                                  />
                                  {/* <TouchableOpacity>
                                    <Image source={Images.media1} style={styles.mediaFiles} />
                                  </TouchableOpacity>
                                  <TouchableOpacity>
                                    <Image source={Images.media2} style={styles.mediaFiles} />
                                  </TouchableOpacity>
                                  <TouchableOpacity>
                                    <Image source={Images.media3} style={styles.mediaFiles} />
                                  </TouchableOpacity> */}
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
            {
              seenMembers?.length > 0 ?

                <View style={styles.bottomScene}>
                  <View style={styles.mediaFilesWrapper}>
                    <FlatList
                      key={4}
                      horizontal={false}
                      scrollEnabled={false}
                      numColumns={4}
                      data={seenMembers}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({ item, index }) => showSeenMembers(item, index)}
                    />
                   
                  </View>
                  <Text style={styles.seenMessage}>{"Seen"}</Text>
                </View>
                : null
            }
            {/* <Text style={styles.DateWrapper}>{createdAt}</Text> */}
          </>
          :
          <>
            <View style={styles.chatMessageHeaderText1}>
              <View style={styles.innerView}>
                <View style={styles.messageHeader}>
                  {
                    showmessage?.sender?.profilePic ?
                      <Image source={{ uri: showmessage?.sender?.profilePic }} style={styles.userPicImage} />
                      :
                      <View style={styles.userProfileWrapper}>
                        <Text style={styles.userProfileText}>{str_Name?.toUpperCase()}</Text>
                      </View>
                  }
                  <View style={{
                    marginLeft: hp(2)
                  }}>
                    <View style={styles.messageHeader}>
                      <Text style={styles.userName}>{`${showmessage?.sender?.firstName} ${showmessage?.sender?.surName}`}</Text>
                      <Text style={styles.DateWrapper1}>{time}</Text>
                    </View>
                    {
                      showmessage?.sender?.companyName ?
                        <Text style={styles.displayMessage}>{`Company . ${showmessage?.sender?.companyName}`}</Text>
                        : null
                    }
                    {
                      showmessage?.questions?.length > 0 ?
                        <TouchableOpacity onPress={questionModelCall}
                          style={styles.questionContainer}>
                          <Text style={styles.questionText}>{"Questionarie name"}</Text>
                          <Image source={Images.document} style={styles.questionDoc} />
                        </TouchableOpacity>
                        :
                        <Text style={styles.messageText}>{message}</Text>
                    }

                    {
                      showmessage?.files?.length > 0 ?
                        <View style={styles.documentWrapper}>
                          <View style={styles.documentInnerWrapper}>
                            <View style={styles.mediaFilesWrapper}>
                              <FlatList
                                key={4}
                                horizontal={false}
                                scrollEnabled={false}
                                numColumns={4}
                                data={showmessage?.files}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => mediaList(item, index)}
                              />
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
            {
              seenMembers?.length > 0 ?

                <View style={styles.bottomScene}>
                  <View style={styles.mediaFilesWrapper}>
                    <FlatList
                      key={4}
                      horizontal={false}
                      scrollEnabled={false}
                      numColumns={4}
                      data={seenMembers}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({ item, index }) => showSeenMembers(item, index)}
                    />
                   
                  </View>
                  <Text style={styles.seenMessage}>{"Seen"}</Text>
                </View>
                : null
            }
            {/* <Text style={styles.DateWrapper1}>{createdAt}</Text> */}
          </>
      }
    </View>
  </View>

}