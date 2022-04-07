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

export const ShowChatMessages = ({ key, showmessage, userId, chatRoomMembers,
  questionModelCall, addTemporary, pinnedToFavourite, currentUser, replyToUser,
  forwarToChat
}) => {
  const { sender, createdAt, receiverName, receiverProfession, receiverPic,
    myMessage, time, message
  } = showmessage;
  var str_Name = showmessage?.sender?.firstName ? `${showmessage?.sender?.firstName?.[0]}${showmessage?.sender?.surName?.[0]}` : ""
  var date = new Date()
  const recieved = userId != 2;

  let seenMembers = chatRoomMembers?.length > 0 ? chatRoomMembers?.filter(o1 => showmessage?.readBy?.find(o2 => o1?.id === o2)) : []

  let checkPin = showmessage?.pinnedBy?.length > 0 ? showmessage?.pinnedBy?.some(o1 => o1 == currentUser) : null

  // console.log("All___Seen Members:::::", checkPin)
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
            <TouchableOpacity key={index}>
              <Image source={{ uri: item?.profilePic }} style={styles.mediaSeenFiles} />
            </TouchableOpacity> :

            <TouchableOpacity key={index} style={styles.mediaSeenFilesName}>
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
              <MenuTrigger
                customStyles={{
                  triggerTouchable: { underlayColor: Colors.White }
                }}>
                {
                  showmessage?.replyOf ?
                    <>
                      <View style={styles.chatMessageHeaderText}>
                        <View style={styles.innerView}>
                          {/* Reply */}
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.lineReply} />
                            <TouchableOpacity style={styles.replyContainer}>
                              <View style={styles.replyContainerInner}>
                                {/* <Text style={styles.userNameReply}>{`${showmessage?.replyOf?.sender?.firstName} ${showmessage?.replyOf?.sender?.surName}`}</Text> */}
                                <Text style={styles.replyMessageText}>{showmessage?.replyOf?.message}</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
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
                                <TouchableOpacity onPress={() => { pinnedToFavourite(showmessage?._id) }}>
                                  {
                                    checkPin == true ?
                                      <Image source={Images.filledPin} style={styles.galleryImage} />
                                      :
                                      <Image source={Images.pin} style={styles.galleryImage} />
                                  }
                                </TouchableOpacity>
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
                                    <Text style={styles.questionText}>{"Questionarie"}</Text>
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
                    </>
                    :

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
                              <TouchableOpacity onPress={() => { pinnedToFavourite(showmessage?._id) }}>
                                {
                                  checkPin == true ?
                                    <Image source={Images.filledPin} style={styles.galleryImage} />
                                    :
                                    <Image source={Images.pin} style={styles.galleryImage} />
                                }
                              </TouchableOpacity>
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

                }
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
                <MenuOption onSelect={() => replyToUser(showmessage)}>
                  <View
                    style={styles.menuOptionStyle}>
                    <Image source={Images.replyMessage} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Reply to message"}</Text>
                  </View>
                </MenuOption>
                <View style={styles.menuDivider} />
                <MenuOption onSelect={() => forwarToChat(showmessage)}>
                  <View style={styles.menuOptionStyle}>
                    <Image source={Images.forwardMessage} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Forward message"}</Text>
                  </View>
                </MenuOption>
                <View style={styles.menuDivider} />
                <MenuOption>
                  <TouchableOpacity style={styles.menuOptionStyle}>
                    <Image source={Images.addTask} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Make as task"}</Text>
                  </TouchableOpacity>
                </MenuOption>
                <View style={styles.menuDivider} />
                {/* <MenuOption>
                  <TouchableOpacity style={styles.menuOptionStyle}>
                    <Image source={Images.addTask} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Add subtask to existing task"}</Text>
                  </TouchableOpacity>
                </MenuOption>
                <View style={styles.menuDivider} /> */}
                <MenuOption onSelect={() => addTemporary(true)}>
                  <View
                    style={styles.menuOptionStyle}>
                    <Image source={Images.invite} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Add temporary member"}</Text>
                  </View>
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
            {/* MY All Messeges Portion */}
            <Menu>
              <MenuTrigger
                customStyles={{
                  triggerTouchable: { underlayColor: Colors.White }
                }}>
                {
                  showmessage?.replyOf ?
                    <>
                      <View style={styles.chatMessageHeaderText1}>
                        <View style={styles.innerView}>
                          {/* Reply */}
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.lineReply} />
                            <TouchableOpacity style={styles.replyContainer}>
                              <View style={styles.replyContainerInner}>
                                {/* <Text style={styles.userNameReply}>{`${showmessage?.replyOf?.sender?.firstName} ${showmessage?.replyOf?.sender?.surName}`}</Text> */}
                                <Text style={styles.replyMessageText}>{showmessage?.replyOf?.message}</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
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
                                <TouchableOpacity onPress={() => { pinnedToFavourite(showmessage?._id) }}>
                                  {
                                    checkPin == true ?
                                      <Image source={Images.filledPin} style={styles.galleryImage} />
                                      :
                                      <Image source={Images.pin} style={styles.galleryImage} />
                                  }
                                </TouchableOpacity>
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
                    </>
                    :

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
                              <TouchableOpacity onPress={() => { pinnedToFavourite(showmessage?._id) }}>
                                {
                                  checkPin == true ?
                                    <Image source={Images.filledPin} style={styles.galleryImage} />
                                    :
                                    <Image source={Images.pin} style={styles.galleryImage} />
                                }
                              </TouchableOpacity>
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
                                  <Text style={styles.questionText}>{"Questionarie"}</Text>
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
                }
              </MenuTrigger>
              <MenuOptions
                customStyles={{
                  optionsContainer: {
                    borderRadius: 6, marginLeft: hp(4),
                    width: hp(35),
                  },
                  optionWrapper: {
                  },
                }}>
                <MenuOption onSelect={() => replyToUser(showmessage)}>
                  <View
                    style={styles.menuOptionStyle}>
                    <Image source={Images.replyMessage} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Reply to message"}</Text>
                  </View>
                </MenuOption>
                <View style={styles.menuDivider} />
                <MenuOption onSelect={() => forwarToChat(showmessage)}>
                  <View style={styles.menuOptionStyle}>
                    <Image source={Images.forwardMessage} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Forward message"}</Text>
                  </View>
                </MenuOption>
                <View style={styles.menuDivider} />
                <MenuOption>
                  <TouchableOpacity style={styles.menuOptionStyle}>
                    <Image source={Images.addTask} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Make as task"}</Text>
                  </TouchableOpacity>
                </MenuOption>
                <View style={styles.menuDivider} />
                {/* <MenuOption>
                  <TouchableOpacity style={styles.menuOptionStyle}>
                    <Image source={Images.addTask} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Add subtask to existing task"}</Text>
                  </TouchableOpacity>
                </MenuOption> 
                <View style={styles.menuDivider} /> */}
                <MenuOption onSelect={() => addTemporary(true)}>
                  <View
                    style={styles.menuOptionStyle}>
                    <Image source={Images.invite} style={styles.menuOptionImage} />
                    <Text style={[styles.menuOptionText, { color: Colors.blue }]}>{"Add temporary member"}</Text>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
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