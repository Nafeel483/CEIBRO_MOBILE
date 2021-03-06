import React, { Component, createRef } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
  FlatList,
  Platform
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ShowChatMessages } from '../../../Components/ChatMessages';
import Images from '../../../Styles/Images'
import Styles from './Styles'
import Colors from '../../../Styles/Colors';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { connect } from 'react-redux';
import QuestionareModel from '../../../Components/QuestionareModel';
import CreateQuestionare from '../../../Components/CreateQuestionare';
import Loader from '../../../Components/Loader';
import * as API from '../../../Redux/Selectors/AllApi';
import ChatRoomMembers from '../../../Components/ChatRoomMembers';
import { showMessage, hideMessage } from "react-native-flash-message";
import io from "socket.io-client";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import ForwardMessage from '../../../Components/ForwardMessage';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import { chatMessageSend } from '../../../Redux/Actions/chat';

let SERVER = Platform.OS == 'android' ? 'http://shielded-plateau-81277.herokuapp.com' : 'https://shielded-plateau-81277.herokuapp.com'


class ChatView extends Component {
  constructor(props) {
    super(props);
    this.firstInput = createRef();
    this.state = {
      chatMessage: '',
      allChatList: [],
      receiverID: '2',
      senderID: '3',
      Opposite: [
        {
          id: `1`,
          type: 'text',
          message: 'Hello',
          content: 'hello world',
          targetId: '12345678',
          userAvatar: Images.userIcon,
          fullName: 'Micke',
          nickName: 'Test',
          renderTime: true,
          sendStatus: 0,
          time: '1542006036549'
        }
      ],
      openModel: false,
      createModel: false,
      openAddMember: false,
      moreMembersList: [],
      chatMemberName: '',
      memberId: '',
      temporaryMember: false,
      allPinnedChatList: [],
      userReplyData: null,
      forwardOpen: false,
      forwardMessageData: null,
      forwardChatID: [],
      uploadFilesData: [],
      uploadMediaFiles: [],
      listColumn: 4,
      questionareData: []
    };
  }

  componentDidMount = () => {
    this.focusListener = this.props.navigation.addListener('focus', async () => {
      this.allSingleChatRoomMessage()
      this.getAllPinnedMessages()
      this.connectSocket()
      this.markUnread()
    })

    this.allSingleChatRoomMessage()
    this.getAllPinnedMessages()
    this.connectSocket()
    this.markUnread()
  }
  connectSocket = () => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token

    this.socket = io(SERVER, {
      // secure: true,
      transports: ['websocket'],
      query: {
        token
      }
    })

    this.socket.emit('USER_CONNECTED', data => {
      // console.log('USER_CONNECTED', data)
    })
    // console.log('connectSocket this.socket', this.socket)
  };
  markUnread = () => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    const roomId = this.props.route?.params?.chatRoomID

    API.markUnreadChatRoomMessage(roomId, token)
      .then((res) => {
        // console.log("markUnreadChatRoomMessage Response api====>", res)

      })
      .catch((error) => {
        // console.log("markUnreadChatRoomMessage api error====>", error)
      });
  }

  allSingleChatRoomMessage = () => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    const messageID = this.props.route?.params?.chatRoomID
    // console.log("Nafeel__ messageID", messageID)
    API.getChatRoomMessage(messageID, token)
      .then((res) => {
        console.log("allSingleChatRoomMessage Response api====>", res)
        this.setState({ allChatList: res })
      })
      .catch((error) => {
        console.log("allSingleChatRoomMessage api error", error)
      });
  }

  getAllPinnedMessages = () => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    const roomID = this.props.route?.params?.chatRoomID

    API.getAllPinnedMessageApi(roomID, token)
      .then((res) => {
        // console.log("getAllPinnedMessageApi Response api====>", res)
        this.setState({ allPinnedChatList: res })
      })
      .catch((error) => {
        // console.log("getAllPinnedMessageApi api error", error)
      });
  }

  uploadMedia = async () => {
    const { uploadFilesData, uploadMediaFiles } = this.state
    let options = {
      selectedAssets: uploadFilesData,
      isExportThumbnail: true,
      maxVideo: 3,
      usedCameraButton: false,
    }
    const response = await MultipleImagePicker.openPicker(options)
    let upload = []
    if (response.length > 0) {

      response.forEach((val) => {
        let data = {
          name: val.fileName, type: val.type,
          uri:
            Platform.OS === 'android'
              ? val?.path
              : val?.path.replace('file://', ''),

        }
        // originalName: item.fileName, uri: item.uri, type: item.uri 
        upload.push(data)
      })

    }
    console.log("-------All Media File Response------- = ", response, upload)
    this.setState({ uploadMediaFiles: uploadMediaFiles.concat(upload) })

  }

  questionModelCall = (message) => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    if (message?.questions.length > 0) {
      API.getQuestionareById(message?._id, token)
        .then((res) => {
          console.log("getQuestionareById Response api====>", res)
          this.setState({
            questionareData: res,
            openModel: true
          })
        })
        .catch((error) => {
          console.log("getQuestionareById api error", error)
        });
    }
  }
  closeQuestionModelCall = () => {
    this.setState({ openModel: false })
  }

  sendSubmit = (questions, id) => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    let data = {
      questions: questions
    }
    if (questions?.length > 0) {
      API.answerQuestionareById(data, id, token)
        .then((res) => {
          // console.log("answerQuestionareById Response api====>", res)
          this.setState({
            openModel: false
          })
          showMessage({
            message: "Answer Saved",
            description: "Answer Saved",
            type: "default",
            backgroundColor: "#009900", // background color
            color: "white" // text color
          })
        })
        .catch((error) => {
          // console.log("answerQuestionareById api error", error)
        });
    }

  }

  createQuestion = () => {
    this.setState({ createModel: !this.state.createModel })
  }

  getMoreMember = (temporaryCheck) => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token

    const messageID = this.props.route?.params?.chatRoomID


    API.getChatMoreMembers(messageID, token)
      .then((res) => {
        // console.log("getChatMoreMembers Response api====>", res)
        this.setState({
          moreMembersList: res,
          openAddMember: !this.state.openAddMember,
          temporaryMember: temporaryCheck
        })
      })
      .catch((error) => {
        // console.log("getChatMoreMembers api error", error)
      });
  }
  closeAddMembers = () => {
    this.setState({ openAddMember: false })
  }

  selectCheckedMembers = (item) => {
    const { memberId } = this.state
    if (memberId == item?.id) {
      this.setState({
        chatMemberName: '',
        memberId: '',
        // openAddMember: !this.state.openAddMember
      })
    }
    else {
      this.setState({
        chatMemberName: item?.title,
        memberId: item?.id,
        // openAddMember: !this.state.openAddMember
      })
    }
  }
  addSubmitMember = () => {
    const { memberId, temporaryMember } = this.state
    let token = this.props.auth?.userLogin?.tokens?.access?.token

    const messageID = this.props.route?.params?.chatRoomID
    const temporary = temporaryMember

    if (memberId == '') {
      showMessage({
        message: "Member Not Selected",
        description: "At-least one Member Should be Selected",
        type: "default",
        backgroundColor: "#9c1730", // background color
        color: "white", // text color
      });

    } else {

      API.addMemberInChat(messageID, memberId, temporary, token)
        .then((res) => {
          console.log("addMemberInChat Response api====>", res)
          showMessage({
            message: "Member Successfully Added",
            description: "Member Successfully Added to In Chat",
            type: "default",
            backgroundColor: "#009900", // background color
            color: "white" // text color
          })
          this.setState({
            openAddMember: !this.state.openAddMember
          })
        })
        .catch((error) => {
          console.log("addMemberInChat api error", error)
        });
    }
  }
  pinnedToFavourite = (messageId) => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token

    API.pinnedMessageApi(messageId, token)
      .then((res) => {
        console.log("pinnedMessageApi Response api====>", res)
        this.allSingleChatRoomMessage()
        this.getAllPinnedMessages()
        showMessage({
          message: "Favourited Update",
          description: `${res}`,
          type: "default",
          backgroundColor: "#009900", // background color
          color: "white" // text color
        })

      })
      .catch((error) => {
        console.log("pinnedMessageApi api error", error)
      });
  }
  againRelod = () => {

    setTimeout(() => {
      if (!this.moved) {
        this.allSingleChatRoomMessage()
      }
    }, 500);
  }
  componentDidUpdate(prevProps) {

    const token = this.props.auth?.userLogin?.tokens?.access?.token
    const PreviousToken = prevProps.auth?.userLogin?.tokens?.access?.token
    if (token == PreviousToken) {
      // console.log('RECEIVE_MESSAGE Start')
      // const engine = this.socket.io.engine;
      // engine.on("RECEIVE_MESSAGE", ({ type, data }) => {
      //   console.log('RECEIVE_MESSAGE', type, data)
      // });
      // this.socket.on("RECEIVE_MESSAGE", data => {
      //   console.log('RECEIVE_MESSAGE', data)
      // })

      this.socket.on("RECEIVE_MESSAGE", (id) => {
        // console.log('RECEIVE_MESSAGE', id, this.socket)
        this.againRelod()
      });
      // this.socket.on('RECEIVE_MESSAGE', { from: user?._id })
    }

  }

  sendTextMessage = () => {
    const { chatMessage, userReplyData, uploadMediaFiles } = this.state
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    const roomID = this.props.route?.params?.chatRoomID

    if (chatMessage == '') {

    } else {
      if (userReplyData != null) {
        if (uploadMediaFiles.length > 0) {
          const data = {
            message: chatMessage,
            chat: roomID,
            messageId: userReplyData?._id,
            products: uploadMediaFiles,
            type: "message",
            token: token
          }
          this.props.chatMessageSend(data)
          setTimeout(() => {
            if (!this.moved) {
              this.setState({ chatMessage: '', userReplyData: null, uploadMediaFiles: [] })
            }
          }, 700);
        } else {
          const data = {
            message: chatMessage,
            chat: roomID,
            messageId: userReplyData?._id,
            type: "message"
          }

          API.sendMessageReplyApi(data, token)
            .then((res) => {
              console.log("sendMessageReplyApi Response api====>", res)
              this.allSingleChatRoomMessage()
              this.setState({ chatMessage: '', userReplyData: null })

            })
            .catch((error) => {
              console.log("sendMessageReplyApi api error", error)
            });
        }
      } else {
        if (uploadMediaFiles.length > 0) {
          const data = {
            message: chatMessage,
            chat: roomID,
            products: uploadMediaFiles,
            messageId: null,
            type: "message",
            token: token
          }
          this.props.chatMessageSend(data)
          setTimeout(() => {
            if (!this.moved) {
              this.setState({ chatMessage: '', uploadMediaFiles: [] })
            }
          }, 700);
        } else {
          const data = {
            message: chatMessage,
            chat: roomID,
            // messageId: "",
            type: "message"
          }

          API.sendChatMessageApi(data, token)
            .then((res) => {
              console.log("sendChatMessageApi Response api====>", res)
              this.allSingleChatRoomMessage()
              this.setState({ chatMessage: '', uploadMediaFiles: [] })

            })
            .catch((error) => {
              console.log("sendChatMessageApi api error", error)
            });
        }
      }
    }
  }

  onEndEditing = () => {
    const { chatMessage } = this.state
    if (chatMessage != '') {
      this.firstInput.current?.focus();
      this.sendTextMessage()
    } else {
      this.firstInput.current?.focus();
    }
  }
  typeMessage = (value) => {
    this.setState({ chatMessage: value })
    // this.socket.on('TYPING_START', data => {
    //   console.log('TYPING_START', data)
    // })
  }
  forwarToChat = (data) => {
    this.setState({ forwardMessageData: data, forwardOpen: true })
  }
  closeForwarChat = () => {
    this.setState({ forwardMessageData: null, forwardOpen: false })
  }
  selectSendChat = (item) => {
    const { forwardChatID } = this.state
    const matched = forwardChatID?.some(o1 => o1 == item?._id)
    if (matched == true) {
      const filter = forwardChatID?.filter(o1 => o1 != item?._id)
      console.log("filter Forward Chat = ", filter)
      this.setState({ forwardChatID: filter })
    } else {
      this.setState({ forwardChatID: forwardChatID.concat(item?._id) })
    }
  }

  submitForward = () => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    const { forwardChatID, forwardMessageData } = this.state
    const data = {
      messageId: forwardMessageData?._id,
      chatIds: forwardChatID
    }
    API.sendForwardMessageApi(data, token)
      .then((res) => {
        console.log("sendForwardMessageApi Response api====>", res)
        this.setState({
          forwardChatID: [],
          forwardMessageData: null,
          forwardOpen: false
        })
        showMessage({
          message: "Forward Successfully",
          description: "Message Forward Successfully",
          type: "default",
          backgroundColor: "#009900", // background color
          color: "white" // text color
        })

      })
      .catch((error) => {
        console.log("sendForwardMessageApi api error", error)
      });
  }

  replyToUser = (data) => {
    this.setState({ userReplyData: data })
  }
  closeReply = () => {
    this.setState({ userReplyData: null })
  }

  removeMedia = (key) => {
    const { uploadMediaFiles } = this.state
    let data = uploadMediaFiles.filter((o1, index) => index != key)
    // console.log("Filter------", data)
    this.setState({ uploadMediaFiles: data })
  }
  chatMediaList = (item, index) => {
    return (
      <>
        <View key={index} style={Styles.mediaMainWrapper}>
          <ImageBackground source={{ uri: item?.uri }} style={Styles.mediaFiles} imageStyle={{ borderRadius: 6 }}>
            <TouchableOpacity onPress={() => { this.removeMedia(index) }}>
              <Image source={Images.closeMedia} style={Styles.styleClose} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </>
    )
  }

  render() {
    const { chatMessage, allChatList, Opposite, receiverID,
      senderID, openModel, createModel, openAddMember, moreMembersList,
      chatMemberName, memberId, allPinnedChatList, userReplyData,
      forwardOpen, forwardChatID, uploadMediaFiles,
      listColumn, questionareData
    } = this.state


    const { allChats } = this.props.chat

    const chatRoomName = this.props.route?.params?.chatRoomName
    const chatRoomProject = this.props.route?.params?.chatRoomProject
    const chatRoomMembers = this.props.route?.params?.chatRoomMembers
    const groupInfo = this.props.route?.params?.groupInfo

    const currentUser = this.props.auth?.userLogin?.user?.id
    // console.log("uploadMediaFiles===== ", uploadMediaFiles)

    let assignedMember = []
    if (groupInfo?.members?.length > 0) {
      for (let i = 0; i < groupInfo?.members?.length; i++) {
        let data = {
          label: `${groupInfo?.members?.[i]?.firstName} ${groupInfo?.members?.[i]?.surName}`,
          value: `${groupInfo?.members?.[i]?.id}`
        }
        assignedMember.push(data)
      }
    }

    return (
      <>
        <MenuProvider>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={Styles.fullContainer}>
            <SafeAreaView style={Styles.MainContainer}>
              <View style={Styles.MainContainer}>
                {/* Header */}
                {/* <View style={Styles.headerContainer}> */}
                <View style={Styles.headerWrapper}>
                  <View style={Styles.contain}>
                    <View style={Styles.myconnect}>
                      <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                        <Image source={Images.close} style={Styles.Setimage} />
                      </TouchableOpacity >
                      <View style={Styles.touchviewone}>
                        {/* {
                          chatRoomProject != null ?
                            <>
                              <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('ChatFeature', {
                                  screen: 'GroupInfo',
                                  params: {
                                    groupInfo: groupInfo,
                                    allPinnedChatList: allPinnedChatList
                                  }
                                })
                              }}>
                                <Text style={Styles.touchViewprofileOne}>{chatRoomName}</Text>
                              </TouchableOpacity>

                              <Text style={Styles.mergeMessage}>
                                <Text style={Styles.displayProject}>{"Project:  "}</Text>
                                <Text style={Styles.nameProject}>{"Vesse-12"}</Text>
                              </Text>
                            </>
                            : */}
                        <TouchableOpacity onPress={() => {
                          this.props.navigation.navigate('ChatFeature', {
                            screen: 'GroupInfo',
                            params: {
                              groupInfo: groupInfo,
                              allPinnedChatList: allPinnedChatList
                            }
                          })
                        }}>
                          <Text style={Styles.touchViewprofileOne1}>{chatRoomName}</Text>
                        </TouchableOpacity>
                        {/* } */}
                      </View>
                    </View>
                    <View style={Styles.myconnect}>
                      <TouchableOpacity>
                        <Image source={Images.search} style={Styles.Setimage} />
                      </TouchableOpacity >
                      {/* <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                        <Image source={Images.menu} style={Styles.menuimage} />
                      </TouchableOpacity > */}
                      <Menu >
                        <MenuTrigger
                          customStyles={{
                            triggerTouchable: { underlayColor: Colors.White }
                          }}
                        >
                          <Image source={Images.menu} style={Styles.menuimage} />
                        </MenuTrigger>
                        <MenuOptions
                          customStyles={{
                            optionsContainer: {
                              marginTop: hp(6.2), borderRadius: 6
                            },
                            optionWrapper: {
                            },
                          }}>
                          <MenuOption onSelect={() => this.getMoreMember(false)}>
                            <View
                              style={Styles.menuOptionStyle}>
                              <Image source={Images.invite} style={Styles.menuOptionImage} />
                              <Text style={[Styles.menuOptionText, { color: Colors.blue }]}>{"Add People"}</Text>
                            </View>
                          </MenuOption>
                          <View style={Styles.menuDivider} />
                          <MenuOption>
                            <View style={Styles.menuOptionStyle}>
                              <Image source={Images.Delete} style={Styles.menuOptionImage} />
                              <Text style={[Styles.menuOptionText, { color: Colors.red }]}>{"Delete Conversation"}</Text>
                            </View>
                          </MenuOption>
                        </MenuOptions>
                      </Menu>
                    </View>
                  </View>
                </View>
                {/* </View> */}
                {/* Header Ends */}
                <ScrollView
                  ref={ref => { this.scrollView = ref }}
                  onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}
                // keyboardShouldPersistTaps='always'
                >
                  <View style={{
                    marginTop: 20, marginBottom: 20, width: '95%', alignSelf: 'center'
                  }}>
                    {allChatList?.length > 0 && allChatList?.map((showmessage) => (
                      <ShowChatMessages
                        showmessage={showmessage} key={showmessage._id} userId={showmessage._id} oppositeUser={Opposite}
                        receiverID={receiverID} senderID={senderID} questionModelCall={this.questionModelCall}
                        chatRoomMembers={chatRoomMembers} addTemporary={this.getMoreMember}
                        pinnedToFavourite={this.pinnedToFavourite} currentUser={currentUser}
                        replyToUser={this.replyToUser} forwarToChat={this.forwarToChat}
                      />
                    ))}
                  </View>
                </ScrollView>
                <View style={Styles.bottomWrapper}>
                  <View style={Styles.seperator} />
                  {
                    userReplyData != null ?
                      <>
                        <View style={Styles.replyToContainer}>
                          <View style={Styles.replyInnerContainer}>
                            <View>
                              <Text style={Styles.replyUserHeader}>{userReplyData?.sender?.firstName}</Text>
                              <Text style={Styles.replyTextMessage}>{userReplyData?.message}</Text>
                            </View>
                            <TouchableOpacity onPress={this.closeReply}>
                              <Image source={Images.close} style={Styles.replyClose} />
                            </TouchableOpacity >
                          </View>
                        </View>
                      </>
                      : null
                  }
                  {
                    uploadMediaFiles?.length > 0 ?
                      <View style={Styles.mediaToContainer}>
                        <FlatList
                          key={listColumn}
                          horizontal={false}
                          scrollEnabled={false}
                          numColumns={listColumn}
                          data={uploadMediaFiles}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={({ item, index }) => this.chatMediaList(item, index)}
                        />
                      </View>
                      : null
                  }
                  <View style={Styles.emailWrapper}>

                    <TextInput
                      ref={this.firstInput}
                      style={Styles.emailInput}
                      value={chatMessage}
                      placeholder={"Type a message"}
                      placeholderTextColor={Colors.textColor}
                      autoCapitalize='none'
                      onSubmitEditing={this.onEndEditing}
                      blurOnSubmit={false}
                      onChangeText={(value) =>
                        this.typeMessage(value)
                      }
                    />
                    <Image source={Images.mic} style={Styles.micStyle} />
                  </View>
                  <View style={Styles.seperator} />
                  <View style={Styles.bottomIconsWrapper}>
                    <TouchableOpacity>
                      <Image source={Images.emoji} style={Styles.iconBottom} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.uploadMedia}>
                      <Image source={Images.fileUpload} style={Styles.iconBottom1} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.uploadMedia}>
                      <Image source={Images.camera} style={Styles.iconBottom1} />
                    </TouchableOpacity>
                    <View style={Styles.inboxLine} />
                    <TouchableOpacity>
                      <Image source={Images.Nudge} style={Styles.iconBottom1} />
                    </TouchableOpacity>
                    <View style={Styles.inboxLine} />
                    <TouchableOpacity onPress={this.createQuestion}>
                      <Image source={Images.document} style={Styles.iconBottom2} />
                    </TouchableOpacity>

                  </View>
                </View>

                {
                  openModel == true ?
                    <QuestionareModel
                      open={openModel}
                      data={questionareData}
                      currentUser={currentUser}
                      sendSubmit={this.sendSubmit}
                      close={this.closeQuestionModelCall} />
                    : null
                }
                {
                  createModel == true ?
                    <CreateQuestionare
                      open={createModel}
                      groupInfo={groupInfo}
                      assignedMember={assignedMember}
                      close={this.createQuestion} />
                    : null
                }
                {
                  openAddMember == true ?
                    <ChatRoomMembers
                      open={openAddMember}
                      close={this.closeAddMembers}
                      moreMembersList={moreMembersList}
                      chatMemberName={chatMemberName}
                      memberId={memberId}
                      selectCheckedMembers={this.selectCheckedMembers}
                      submit={this.addSubmitMember}
                    />
                    : null
                }
                {
                  forwardOpen == true ?
                    <ForwardMessage
                      open={forwardOpen}
                      allChats={allChats}
                      forwardChatID={forwardChatID}
                      selectSendChat={this.selectSendChat}
                      close={this.closeForwarChat}
                      submit={this.submitForward}
                    />
                    : null
                }
              </View>
            </SafeAreaView>
          </KeyboardAwareScrollView>
        </MenuProvider>
      </>

    )

  }

}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    chat: state.chat
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    chatMessageSend: (user) => dispatch(chatMessageSend(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatView);