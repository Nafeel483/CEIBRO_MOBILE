import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
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
import { showMessage, hideMessage } from "react-native-flash-message";
import Loader from '../../../Components/Loader';
import { getAllUserChats } from '../../../Redux/Actions/chat';
import moment from 'moment';
import * as API from '../../../Redux/Selectors/AllApi';


class GroupInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatTitle: '',
      chatProject: null,
      listColumn: 1,
      listMediaColumn: 3,
      memberDropDown: false,
      memberTab: [
        "All members",
        "Groups",
        "Companies",
        "Admins"
      ],
      clickTab: 0,
      search: '',
      loadingMedia: false,
      allMediaData: [],
      mediaDropDown: false,
      pinDropDown: false
    };
  }

  componentDidMount = () => {
    const groupInfo = this.props.route?.params?.groupInfo
    if (groupInfo) {
      let token = this.props.auth?.userLogin?.tokens?.access?.token
      this.setState({ loadingMedia: true })
      API.getChatRoomAllMedia(groupInfo?._id, token)
        .then((res) => {
          this.setState({
            allMediaData: res,
            loadingMedia: false,
          })
          console.log("getChatRoomAllMedia Response api====>", res)
        })
        .catch((error) => {
          this.setState({ loadingMedia: false })
          console.log("getChatRoomAllMedia api error", error)
        });

      this.setState({
        chatTitle: groupInfo?.name,
        chatProject: groupInfo?.project == null ? "No Project" : groupInfo?.project
      })
    }
  }

  openMemberDrop = () => {
    this.setState({ memberDropDown: !this.state.memberDropDown })
  }

  checkAllMedia = () => {
    this.setState({ mediaDropDown: !this.state.mediaDropDown })
  }
  checkAllPinned = () => {
    this.setState({ pinDropDown: !this.state.pinDropDown })

  }

  seeAllMediaList = (item, index) => {
    return (
      <>
        <TouchableOpacity key={index} style={Styles.mediaMainWrapper}>
          <Image source={{ uri: item?.url }} style={Styles.mediaFiles} />
          <Text style={Styles.mediaFileText}>{item?.fileName}</Text>
        </TouchableOpacity>
      </>
    )
  }

  seeAllPinnedList = (item, index) => {
    return (
      <>
        <View style={Styles.showPinnedMessage}>
          <View style={Styles.innerPinnedMessage}>
            <Text style={Styles.pinnedText}>{item?.message}</Text>
          </View>

        </View>
      </>
    )
  }

  addSuggestListList = (item, index) => {
    var str_Name = `${item?.firstName?.[0]}${item?.surName?.[0]}`
    return (
      <>
        <TouchableOpacity style={Styles.listChatContainer}>
          <View style={Styles.chatFirstWrapper}>
            {
              item?.profilePic ?
                < Image source={{ uri: item?.profilePic }} style={Styles.userPicImage} />
                :
                <View style={Styles.userProfileWrapper}>
                  <Text style={Styles.userProfileText}>{str_Name?.toUpperCase()}</Text>
                </View>
            }

            <View style={{
              marginLeft: hp(1)
            }}>
              <Text style={Styles.userName}>{`${item?.firstName} ${item?.surName}`}</Text>
              {/* <Text style={Styles.displayMessage}>{`Company . ${item.profession}`}</Text> */}
            </View>
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
                  marginTop: hp(4), borderRadius: 6
                },

              }}>
              <MenuOption>
                <TouchableOpacity style={Styles.menuOptionStyle}>
                  <Image source={Images.contacts} style={Styles.menuOptionImage} />
                  <Text style={[Styles.menuOptionText, { color: Colors.blue }]}>{"View profile"}</Text>
                </TouchableOpacity>
              </MenuOption>
              <View style={Styles.menuDivider} />
              <MenuOption>
                <TouchableOpacity style={Styles.menuOptionStyle}>
                  <Image source={Images.message} style={Styles.menuOptionImage} />
                  <Text style={[Styles.menuOptionText, { color: Colors.blue }]}>{"Go to chat"}</Text>
                </TouchableOpacity>
              </MenuOption>
              <View style={Styles.menuDivider} />
              <MenuOption>
                <TouchableOpacity style={Styles.menuOptionStyle}>
                  <Image source={Images.setAdmin} style={Styles.menuOptionImage} />
                  <Text style={[Styles.menuOptionText, { color: Colors.blue }]}>{"Set as admin"}</Text>
                </TouchableOpacity>
              </MenuOption>
              <View style={Styles.menuDivider} />
              <MenuOption>
                <TouchableOpacity style={Styles.menuOptionStyle}>
                  <Image source={Images.Delete} style={Styles.menuOptionImage} />
                  <Text style={[Styles.menuOptionText, { color: Colors.red }]}>{"Delete from chat"}</Text>
                </TouchableOpacity>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </TouchableOpacity>
      </>
    )
  }

  render() {
    const { listColumn, chatTitle, chatProject, memberDropDown,
      memberTab, clickTab, search, loadingMedia,
      allMediaData, mediaDropDown, listMediaColumn,
      pinDropDown
    } = this.state

    const groupInfo = this.props.route?.params?.groupInfo
    const allPinnedChatList = this.props.route?.params?.allPinnedChatList

    console.log("All groupInfo = ", groupInfo, allPinnedChatList)
    return (
      <>
        <MenuProvider>
          <SafeAreaProvider>
            <SafeAreaView style={Styles.MainContainer}>
              {/* Header */}
              <View style={Styles.contain}>
                <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                  <Image source={Images.leftArrow} style={Styles.Setimage} />
                </TouchableOpacity >
                <View style={Styles.touchviewone}>
                  <Text style={Styles.touchViewprofileOne}>{groupInfo?.name}</Text>
                </View>
              </View>
              <View
                style={Styles.line}
              />
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.scrollContent}>

                  <TouchableOpacity style={Styles.profleWrapper}>
                    <Image source={Images.memberPerson} style={Styles.personStyle} />
                    <Image source={Images.camera} style={Styles.cameraStyle} />
                  </TouchableOpacity>

                  {/* Title */}
                  <View style={Styles.emailWrapper}>
                    <Text style={Styles.tabText}>{"Title"}</Text>
                    <View style={Styles.inboxLine} />
                    <TextInput
                      style={Styles.emailInput}
                      value={chatTitle}
                      placeholder={"Enter chat title"}
                      placeholderTextColor={Colors.textColor}
                      autoCapitalize='none'
                      onChangeText={(value) => {
                        this.setState({
                          chatTitle: value,
                        })
                      }}
                    />
                    <TouchableOpacity>
                      <Image source={Images.write} style={Styles.editStyle} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={Styles.line}
                  />

                  {/* Project */}

                  <TouchableOpacity onPress={this.openProjectList}
                    style={Styles.emailWrapper1}>
                    <Text style={Styles.tabText}>{"Project"}</Text>
                    <View style={Styles.inboxLine} />
                    <View style={Styles.emailInput1}>
                      <Text style={[Styles.emailInput1Text, {
                        color: chatProject != null ? Colors.Black : Colors.textColor
                      }]}>{chatProject != null ? "In Future" : "Please select a project"}</Text>
                    </View>
                    <TouchableOpacity>
                      <Image source={Images.dropDown} style={Styles.searchStyle} />
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <View
                    style={Styles.line}
                  />


                  <View style={Styles.mediaContainer}>

                    <TouchableOpacity onPress={this.checkAllMedia}
                      style={Styles.mediaWrapperContainer}>
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <Image source={Images.gallery} style={Styles.galleryImage} />
                          {
                            allMediaData?.length > 0 ?
                              <View style={Styles.notifTag}>
                                <Text style={Styles.tagTextStyle}>
                                  {`${allMediaData?.length}`}
                                </Text>
                              </View>
                              : null
                          }
                        </View>
                        <Text style={Styles.mediaText}>{"Media & Files"}</Text>
                      </View>
                      {
                        mediaDropDown == true ?
                          <Image source={Images.dropDown} style={Styles.searchStyle} />
                          :
                          <Image source={Images.rightArrow} style={Styles.imgrightarrow} />
                      }
                    </TouchableOpacity>
                    {
                      mediaDropDown == true ?
                        <>
                          {
                            allMediaData?.length > 0 ?
                              <View style={Styles.mediaShowContainer}>
                                {/* <FlatList
                                  key={listMediaColumn}
                                  horizontal={false}
                                  scrollEnabled={false}
                                  numColumns={listMediaColumn}
                                  data={allMediaData}
                                  keyExtractor={(item, index) => index.toString()}
                                  renderItem={({ item, index }) => this.seeAllMediaList(item, index)}
                                /> */}
                              </View>
                              : null
                          }
                        </>
                        :

                        <View
                          style={Styles.line}
                        />
                    }
                    <TouchableOpacity onPress={this.checkAllPinned}
                      style={Styles.mediaWrapperContainer}>
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <Image source={Images.pin} style={Styles.galleryImage} />
                          {
                            allPinnedChatList?.length > 0 ?
                              <View style={Styles.notifTag}>
                                <Text style={Styles.tagTextStyle}>
                                  {`${allPinnedChatList?.length}`}
                                </Text>
                              </View>
                              : null
                          }
                        </View>
                        <Text style={Styles.mediaText}>{"Pinned messages"}</Text>
                      </View>
                      {
                        pinDropDown == true ?
                          <Image source={Images.dropDown} style={Styles.searchStyle} />
                          :
                          <Image source={Images.rightArrow} style={Styles.imgrightarrow} />
                      }
                    </TouchableOpacity>
                    {
                      pinDropDown == true ?
                        <>
                          {
                            allPinnedChatList?.length > 0 ?
                              <View style={Styles.mediaShowContainer}>
                                {/* <FlatList
                                  key={listColumn}
                                  horizontal={false}
                                  scrollEnabled={false}
                                  numColumns={listColumn}
                                  data={allPinnedChatList}
                                  keyExtractor={(item, index) => index.toString()}
                                  renderItem={({ item, index }) => this.seeAllPinnedList(item, index)}
                                /> */}
                              </View>
                              : null
                          }
                        </>
                        :

                        <View
                          style={Styles.line}
                        />
                    }
                    <TouchableOpacity style={Styles.mediaWrapperContainer}>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={Images.document} style={Styles.galleryImage1} />
                        <Text style={Styles.mediaText}>{"Questionarie"}</Text>
                      </View>
                      <Image source={Images.rightArrow} style={Styles.imgrightarrow} />
                    </TouchableOpacity>
                    <View
                      style={Styles.line}
                    />


                    <TouchableOpacity onPress={this.openMemberDrop}
                      style={Styles.mediaWrapperContainer}>
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <Image source={Images.members} style={Styles.galleryImage} />
                          {/* Notify Tag */}
                          {
                            groupInfo?.members?.length > 0 ?
                              <View style={Styles.notifTag}>
                                <Text style={Styles.tagTextStyle}>
                                  {`${groupInfo?.members?.length}`}
                                </Text>
                              </View>
                              : null
                          }
                        </View>
                        <Text style={Styles.mediaText}>{"Chat members"}</Text>
                      </View>
                      {
                        memberDropDown == true ?
                          <Image source={Images.dropDown} style={Styles.searchStyle} />
                          :
                          <Image source={Images.rightArrow} style={Styles.imgrightarrow} />
                      }
                    </TouchableOpacity>
                    {
                      memberDropDown == true ?
                        <>
                          {/* <View style={Styles.memberDropContainer}>
                            {
                              memberTab.map((val, index) => {
                                return (
                                  <>
                                    {
                                      clickTab == index ?
                                        <TouchableOpacity style={Styles.tabButtonWrapper}>
                                          <Text style={Styles.tabDropText1}>{val}</Text>
                                        </TouchableOpacity> :
                                        <TouchableOpacity>
                                          <Text style={Styles.tabDropText}>{val}</Text>
                                        </TouchableOpacity>
                                    }
                                  </>
                                )
                              })
                            }

                          </View> */}
                          {
                            groupInfo?.members?.length > 0 ?
                              <>
                                <View style={Styles.searchWrapper}>
                                  <Image source={Images.search} style={Styles.searchImage} />
                                  <View style={Styles.inboxLine} />
                                  <TextInput
                                    style={Styles.emailInput}
                                    value={search}
                                    placeholder={"Enter @username"}
                                    placeholderTextColor={Colors.textColor}
                                    autoCapitalize='none'
                                    onChangeText={(value) => {
                                      this.setState({
                                        search: value,
                                      })
                                    }}
                                  />
                                </View>
                                {/* <FlatList
                                  key={listColumn}
                                  horizontal={false}
                                  scrollEnabled={false}
                                  numColumns={listColumn}
                                  data={groupInfo?.members}
                                  keyExtractor={(item, index) => index.toString()}
                                  renderItem={({ item, index }) => this.addSuggestListList(item, index)}
                                /> */}
                              </> : null
                          }
                        </>
                        :
                        <View
                          style={Styles.line}
                        />
                    }


                  </View>
                </View>
              </ScrollView>
              {loadingMedia ? <Loader /> : null}
            </SafeAreaView>
          </SafeAreaProvider>
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
    getAllChats: (user) => dispatch(getAllUserChats(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupInfo);