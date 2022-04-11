import React, { Component } from 'react';
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
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Header from '../../../Components/Header';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { connect } from 'react-redux';
import { showMessage, hideMessage } from "react-native-flash-message";
import Loader from '../../../Components/Loader';
import { getAllUserChats } from '../../../Redux/Actions/chat';
import {
  getMyAllInvites, getMyAllConnections,
  getMyInviteCount, getMyConnectionsCount
} from '../../../Redux/Actions/users';
import moment from 'moment';
import * as API from '../../../Redux/Selectors/AllApi';



class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      tabClick: 1,
      listColumn: 1,
      favouriteList: []
    };
  }

  componentDidMount = () => {
    this.focusListener = this.props.navigation.addListener('focus', async () => {
      let accessToken = this.props.auth?.userLogin?.tokens?.access?.token
      let chatData = {
        name: "",
        type: "all",
        favourite: false,
        token: accessToken
      }
      this.props.getAllChats(chatData)
      this.props.getMyInviteCount(accessToken)
      this.props.getMyConnectionsCount(accessToken)
      this.props.getMyAllInvites(accessToken)
      this.props.getMyAllConnections(accessToken)
    })

  }

  onClickTab = (num) => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token

    if (num == 1) {
      let chatData = {
        name: "",
        type: "all",
        favourite: false,
        token: token
      }
      this.props.getAllChats(chatData)
      this.setState({ tabClick: num })
    }
    else if (num == 2) {
      let chatData = {
        name: "",
        type: "unread",
        favourite: false,
        token: token
      }
      this.props.getAllChats(chatData)
      this.setState({ tabClick: num })
    }
    else {
      let chatData = {
        name: "",
        type: "all",
        favourite: true,
        token: token
      }
      this.props.getAllChats(chatData)
      this.setState({ tabClick: num })
    }
  }

  muteChat = (id) => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    API.muteChatApi(id, token)
      .then((res) => {
        console.log("muteChatApi Response api====>", res)
        let chatData = {
          name: "",
          type: "all",
          favourite: false,
          token: token
        }
        this.props.getAllChats(chatData)
        showMessage({
          message: "Chat Muted Successfully",
          description: "Chat Muted Successfully",
          type: "default",
          backgroundColor: "#009900", // background color
          color: "white" // text color
        })
      })
      .catch((error) => {
        console.log("muteChatApi api error====>", error)
      });
  }

  markUnread = (id) => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    const { tabClick } = this.state
    API.markUnreadChatRoomMessage(id, token)
      .then((res) => {
        console.log("markUnreadChatRoomMessage Response api====>", res)
        let chatData = {
          name: "",
          type: tabClick == 2 ? "unread" : "all",
          favourite: false,
          token: token
        }
        this.props.getAllChats(chatData)
      })
      .catch((error) => {
        console.log("markUnreadChatRoomMessage api error====>", error)
      });
  }

  addToFavourite = (id) => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    API.addRoomChatToFavourite(id, token)
      .then((res) => {
        console.log("Favourite Response api====>", res)
        let chatData = {
          name: "",
          type: "all",
          favourite: false,
          token: token
        }
        this.props.getAllChats(chatData)
        showMessage({
          message: "Successfully Added to Favourites",
          description: "Successfully Added to Favourites",
          type: "default",
          backgroundColor: "#009900", // background color
          color: "white" // text color
        })
      })
      .catch((error) => {
        console.log("Favourite api error", error)
      });
  }



  chatList = (item, index) => {
    const currentUser = this.props.auth?.userLogin?.user?.id
    var str_Name = item?.name.slice(0, 2)
    let favouriteItem = item?.pinnedBy?.length > 0 ? item?.pinnedBy?.some(o1 => o1 == currentUser) : null
    let mutedChatStatus = item?.mutedBy?.length > 0 ? item?.mutedBy?.some(o1 => o1 == currentUser) : null
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ChatFeature', {
              screen: 'ChatView',
              params: {
                chatRoomID: item?._id,
                chatRoomName: item?.name,
                chatRoomProject: item?.project,
                chatRoomMembers: item?.members,
                groupInfo: item
              }
            })
          }}
          style={Styles.listChatContainer}>
          <View style={Styles.chatFirstWrapper}>
            {/* {
              item?.image ?
                <Image source={Images.userPic} style={Styles.userPicImage} />
                : */}
            <View style={Styles.userProfileWrapper}>
              <Text style={Styles.userProfileText}>{str_Name?.toUpperCase()}</Text>
            </View>
            {/* } */}
            <View style={{
              marginLeft: hp(2.5)
            }}>
              <Text style={Styles.userName}>{item?.name}</Text>
              <Text style={Styles.displayMessage}>{item?.lastMessage?.message}</Text>

              {
                item?.project != null ?
                  <Text style={Styles.mergeMessage}>
                    <Text style={Styles.displayProject}>{"Project:  "}</Text>
                    <Text style={Styles.nameProject}>{item?.project?.title}</Text>
                  </Text>
                  : null
              }
            </View>
          </View>
          <View style={Styles.chatSecondWrapper}>
            {
              favouriteItem == true ?
                <TouchableOpacity onPress={() => this.addToFavourite(item?._id)}>
                  <Image source={Images.favourite} style={Styles.favoEmptyIcon} />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => this.addToFavourite(item?._id)}>
                  <Image source={Images.emptyFavourite} style={Styles.favoEmptyIcon} />
                </TouchableOpacity>
            }
            <View style={{
              marginLeft: hp(1)
            }}>
              {
                item?.unreadCount ?
                  <>
                    <TouchableOpacity onPress={() => this.markUnread(item?._id)}
                      style={Styles.notifTag}>
                      <Text style={Styles.tagTextStyle}>
                        {item?.unreadCount}
                      </Text>
                    </TouchableOpacity>

                  </>
                  : null
              }
              <Text style={Styles.displayTime}>{moment(item?.updatedAt).format('ddd')}</Text>
            </View>
            <Menu>
              <MenuTrigger
                customStyles={{ triggerTouchable: { underlayColor: Colors.White } }}
              >
                <Image source={Images.menu} style={Styles.menuimage} />
              </MenuTrigger>
              <MenuOptions
                customStyles={{
                  optionsContainer: {
                    marginTop: hp(6.2), borderRadius: 6,
                    width: hp(28)
                  },
                  optionWrapper: {
                  },
                }}>
                <MenuOption>
                  <TouchableOpacity onPress={() => this.markUnread(item?._id)}
                    style={Styles.menuOptionStyle}>
                    <Image source={Images.unreadMessage} style={Styles.menuOptionImage} />
                    <Text style={[Styles.menuOptionText, { color: Colors.blue }]}>{"Mark unread"}</Text>
                  </TouchableOpacity>
                </MenuOption>

                <View style={Styles.menuDivider} />
                <MenuOption>
                  <TouchableOpacity onPress={() => this.muteChat(item?._id)}
                    style={Styles.menuOptionStyle}>
                    <Image source={Images.volume} style={Styles.menuOptionImage} />
                    <Text style={[Styles.menuOptionText, { color: Colors.blue }]}>{mutedChatStatus == true ? "Unmute chat" : "Mute chat"}</Text>
                  </TouchableOpacity>
                </MenuOption>

                <View style={Styles.menuDivider} />
                <MenuOption>
                  <TouchableOpacity onPress={() => this.addToFavourite(item?._id)}
                    style={Styles.menuOptionStyle}>
                    <Image source={favouriteItem == true ? Images.favourite : Images.fillFavourite} style={Styles.menuOptionImage} />
                    <Text style={[Styles.menuOptionText, { color: Colors.blue }]}>{favouriteItem == true ? "Remove from Favorites" : "Add to Favorites"}</Text>
                  </TouchableOpacity>
                </MenuOption>

                <View style={Styles.menuDivider} />
                <MenuOption>
                  <TouchableOpacity style={Styles.menuOptionStyle}>
                    <Image source={Images.Delete} style={Styles.menuOptionImage} />
                    <Text style={[Styles.menuOptionText, { color: Colors.red }]}>{"Delete Conversation"}</Text>
                  </TouchableOpacity>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </TouchableOpacity>
        <View style={Styles.seperator} />
      </>
    )
  }

  render() {
    const { search, tabClick, listColumn, favouriteList } = this.state
    const { loadingAllChats } = this.props.chat
    const allChats = this.props.chat?.allChats?.length > 0 ? this.props.chat?.allChats : []
    let profileUser = this.props.user?.myProfile ? this.props.user?.myProfile : this.props.auth?.userLogin?.user
    let inviteCount = this.props.user?.inviteCount ? this.props.user?.inviteCount : null

    return (
      <>
        <MenuProvider>
          <SafeAreaProvider>
            <SafeAreaView style={Styles.safeHeadContainer} />
            <SafeAreaView style={Styles.safeAreaContainer}>
              <StatusBar barStyle="dark-content" />
              <Header userData={profileUser} 
              inviteCount={inviteCount}
              navigation={this.props.navigation} />
              <View style={Styles.mainContent}>
                <View style={Styles.seperator} />
                <View style={Styles.emailWrapper}>
                  <Image source={Images.search} style={Styles.searchStyle} />
                  <View style={Styles.inboxLine} />
                  <TextInput
                    style={Styles.emailInput}
                    value={search}
                    placeholder={"Search"}
                    placeholderTextColor={Colors.textColor}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({
                        search: value,
                      })
                    }}
                  />
                </View>
                <View style={Styles.seperator} />
                {/* Chat Tabs */}
                <View style={Styles.tabsContainer}>
                  <TouchableOpacity onPress={() => { this.onClickTab(1) }}>
                    <Text style={[Styles.tabText,
                    { color: tabClick == 1 ? Colors.Black : Colors.blue }]}>{"View all"}</Text>
                  </TouchableOpacity>
                  <View style={Styles.inboxLine} />
                  <TouchableOpacity onPress={() => { this.onClickTab(2) }}>
                    <Text style={[Styles.tabText,
                    { color: tabClick == 2 ? Colors.Black : Colors.blue }]}>{"Unread"}</Text>
                  </TouchableOpacity>
                  <View style={Styles.inboxLine} />
                  <TouchableOpacity onPress={() => { this.onClickTab(3) }}
                    style={{ flexDirection: 'row' }}>
                    <Image source={Images.favourite} style={Styles.favoIcon} />
                    <Text style={[Styles.tabText,
                    { color: tabClick == 3 ? Colors.Black : Colors.blue }]}>{"Favorites"}</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.seperator} />
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.scrollContent}>
                  <View>
                    {
                      tabClick == 1 ?
                        allChats.length > 0 ?
                          <FlatList
                            key={listColumn}
                            horizontal={false}
                            scrollEnabled={false}
                            numColumns={listColumn}
                            data={allChats}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => this.chatList(item, index)}
                          /> : null
                        :
                        tabClick == 2 ?
                          allChats.length > 0 ?
                            <FlatList
                              key={listColumn}
                              horizontal={false}
                              scrollEnabled={false}
                              numColumns={listColumn}
                              data={allChats}
                              keyExtractor={(item, index) => index.toString()}
                              renderItem={({ item, index }) => this.chatList(item, index)}
                            /> :
                            null
                          :
                          allChats.length > 0 ?
                            <FlatList
                              key={listColumn}
                              horizontal={false}
                              scrollEnabled={false}
                              numColumns={listColumn}
                              data={allChats}
                              keyExtractor={(item, index) => index.toString()}
                              renderItem={({ item, index }) => this.chatList(item, index)}
                            /> : null

                    }
                  </View>
                </View>
              </ScrollView>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('ChatFeature', {
                  screen: 'NewChat',
                })
              }}
                style={Styles.filterStyle}>
                <Image source={Images.iconPlus} style={Styles.plusIcon} />
                <Text style={Styles.plusIconText}>{"Create new"}</Text>
              </TouchableOpacity>

            </SafeAreaView>
          </SafeAreaProvider>
          {loadingAllChats ? <Loader /> : null}
        </MenuProvider>
      </>
    );
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
    getAllChats: (user) => dispatch(getAllUserChats(user)),
    getMyConnectionsCount: (user) => dispatch(getMyConnectionsCount(user)),
    getMyInviteCount: (user) => dispatch(getMyInviteCount(user)),
    getMyAllInvites: (user) => dispatch(getMyAllInvites(user)),
    getMyAllConnections: (user) => dispatch(getMyAllConnections(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats);