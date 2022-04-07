import React, { Component, createRef } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput
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
      uploadFilesData: []
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
      console.log('USER_CONNECTED', data)
    })
    console.log('connectSocket this.socket', this.socket)
  };
  markUnread = () => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    const roomId = this.props.route?.params?.chatRoomID

    API.markUnreadChatRoomMessage(roomId, token)
      .then((res) => {
        console.log("markUnreadChatRoomMessage Response api====>", res)

      })
      .catch((error) => {
        console.log("markUnreadChatRoomMessage api error====>", error)
      });
  }

  allSingleChatRoomMessage = () => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    const messageID = this.props.route?.params?.chatRoomID
    // console.log("Nafeel__ messageID", messageID)
    API.getChatRoomMessage(messageID, token)
      .then((res) => {
        console.log("Favourite Response api====>", res)
        this.setState({ allChatList: res })
      })
      .catch((error) => {
        console.log("Favourite api error", error)
      });
  }

  getAllPinnedMessages = () => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    const roomID = this.props.route?.params?.chatRoomID

    API.getAllPinnedMessageApi(roomID, token)
      .then((res) => {
        console.log("getAllPinnedMessageApi Response api====>", res)
        this.setState({ allPinnedChatList: res })
      })
      .catch((error) => {
        console.log("getAllPinnedMessageApi api error", error)
      });
  }

  uploadMedia = async () => {
    const { uploadFilesData } = this.state
    let options = {
      selectedAssets: uploadFilesData,
      isExportThumbnail: true,
      maxVideo: 3,
      usedCameraButton: false,
    }
    const response = await MultipleImagePicker.openPicker(options)
    console.log("-------All Media File Response------- = ", response)
  }

  questionModelCall = () => {
    this.setState({ openModel: !this.state.openModel })
  }
  createQuestion = () => {
    this.setState({ createModel: !this.state.createModel })
  }

  getMoreMember = (temporaryCheck) => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token

    const messageID = this.props.route?.params?.chatRoomID


    API.getChatMoreMembers(messageID, token)
      .then((res) => {
        console.log("getChatMoreMembers Response api====>", res)
        this.setState({
          moreMembersList: res,
          openAddMember: !this.state.openAddMember,
          temporaryMember: temporaryCheck
        })
      })
      .catch((error) => {
        console.log("getChatMoreMembers api error", error)
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
      console.log('RECEIVE_MESSAGE Start')
      // const engine = this.socket.io.engine;
      // engine.on("RECEIVE_MESSAGE", ({ type, data }) => {
      //   console.log('RECEIVE_MESSAGE', type, data)
      // });
      // this.socket.on("RECEIVE_MESSAGE", data => {
      //   console.log('RECEIVE_MESSAGE', data)
      // })

      this.socket.on("RECEIVE_MESSAGE", (id) => {
        console.log('RECEIVE_MESSAGE', id, this.socket)
        this.againRelod()
      });
      // this.socket.on('RECEIVE_MESSAGE', { from: user?._id })
    }

  }

  sendTextMessage = () => {
    const { chatMessage, userReplyData } = this.state
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    const roomID = this.props.route?.params?.chatRoomID

    if (chatMessage == '') {

    } else {
      if (userReplyData != null) {
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
            this.setState({ chatMessage: '' })

          })
          .catch((error) => {
            console.log("sendChatMessageApi api error", error)
          });
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

  render() {
    const { chatMessage, allChatList, Opposite, receiverID,
      senderID, openModel, createModel, openAddMember, moreMembersList,
      chatMemberName, memberId, allPinnedChatList, userReplyData,
      forwardOpen, forwardChatID
    } = this.state


    const { allChats } = this.props.chat

    const chatRoomName = this.props.route?.params?.chatRoomName
    const chatRoomProject = this.props.route?.params?.chatRoomProject
    const chatRoomMembers = this.props.route?.params?.chatRoomMembers
    const groupInfo = this.props.route?.params?.groupInfo

    const currentUser = this.props.auth?.userLogin?.user?.id

    return (
      <>
        <MenuProvider>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={Styles.fullContainer}>
            <View style={Styles.MainContainer}>
              {/* Header */}
              <View style={Styles.headerContainer}>
                <View style={Styles.headerWrapper}>
                  <View style={Styles.contain}>
                    <View style={Styles.myconnect}>
                      <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                        <Image source={Images.close} style={Styles.Setimage} />
                      </TouchableOpacity >
                      <View style={Styles.touchviewone}>
                        {
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
                            :
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
                        }
                      </View>
                    </View>
                    <View style={Styles.myconnect}>
                      <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
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
              </View>
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
                    close={this.questionModelCall} />
                  : null
              }
              {
                createModel == true ?
                  <CreateQuestionare
                    open={createModel}
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
    // getAllChats: (user) => dispatch(getAllUserChats(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatView);