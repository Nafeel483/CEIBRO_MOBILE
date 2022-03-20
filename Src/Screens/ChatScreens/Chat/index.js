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

class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      tabClick: 1,
      listColumn: 1,
      allChatList: [
        {
          name: "Kristo Vunukainen",
          message: "Duis mollis, est non  onec ulla",
          group: true,
          project: "Vesse-12",
          date: "10:25",
          newMessage: false,
          messageCount: "0"
        },
        {
          name: "Paul Mets",
          message: "Cursus Condimentum tempus",
          group: false,
          project: "Vesse-12",
          date: "Sun",
          newMessage: true,
          messageCount: "1"
        },
        {
          name: "Indrek Ilumäe",
          message: "Quam Fusce Risus Dolor",
          group: false,
          project: "Vesse-12",
          date: "Sun",
          newMessage: true,
          messageCount: "4"
        },
        {
          name: "Mart Pärtel",
          message: "Quam Fusce Risus Dolor",
          group: false,
          project: "Vesse-12",
          date: "Sat",
          newMessage: false,
          messageCount: "0"
        },
        {
          name: "Margus Pirkmets",
          message: "Porta Ipsum Bibendum ",
          group: true,
          project: "Paevälja",
          date: "Sat",
          newMessage: false,
          messageCount: "0"
        },
      ],
      unreadChatList: [
        {
          name: "Paul Mets",
          message: "Cursus Condimentum tempus",
          group: false,
          project: "Vesse-12",
          date: "Sun",
          newMessage: true,
          messageCount: "1"
        },
        {
          name: "Indrek Ilumäe",
          message: "Quam Fusce Risus Dolor",
          group: false,
          project: "Vesse-12",
          date: "Sun",
          newMessage: true,
          messageCount: "4"
        },
      ],
      favouriteList: []
    };
  }

  onClickTab = (num) => {
    this.setState({ tabClick: num })
  }

  addToFavourite = (item, index) => {
    const { favouriteList } = this.state
    let data = {
      key: index,
      data: item
    }
    this.setState({ favouriteList: favouriteList.concat(data) })
  }
  removeToFavourite = (item, index) => {
    const { favouriteList } = this.state
    let filter = favouriteList?.filter(o1 => o1.key != index)
    console.log("_____Nafeel--", filter, index)
    this.setState({ favouriteList: filter })
  }

  chatFavouriteList = (favItem, index) => {
    let item = favItem?.data
    var str_Name = item?.name.slice(0, 2)
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ChatFeature', {
              screen: 'ChatView',
            })
          }}
          onLongPress={() => { alert("onLongPress") }}
          style={Styles.listChatContainer}>
          <View style={Styles.chatFirstWrapper}>
            {
              item?.image ?
                <Image source={Images.userPic} style={Styles.userPicImage} />
                :
                <View style={Styles.userProfileWrapper}>
                  <Text style={Styles.userProfileText}>{str_Name?.toUpperCase()}</Text>
                </View>
            }
            <View style={{
              marginLeft: hp(1)
            }}>
              <Text style={Styles.userName}>{item.name}</Text>
              <Text style={Styles.displayMessage}>{item.message}</Text>

              {
                item.group == true ?
                  <Text style={Styles.mergeMessage}>
                    <Text style={Styles.displayProject}>{"Project:  "}</Text>
                    <Text style={Styles.nameProject}>{item.project}</Text>
                  </Text>
                  : null
              }
            </View>
          </View>
          <View style={Styles.chatSecondWrapper}>

            <TouchableOpacity onPress={() => this.removeToFavourite(item, favItem?.key)}>
              <Image source={Images.favourite} style={Styles.favoEmptyIcon} />
            </TouchableOpacity>

            <View style={{
              marginLeft: hp(2)
            }}>
              {
                item.newMessage == true ?
                  <View style={Styles.notifTag}>
                    <Text style={Styles.tagTextStyle}>
                      {item.messageCount}
                    </Text>
                  </View>
                  : null
              }
              <Text style={Styles.displayTime}>{item.date}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={Styles.seperator} />
      </>
    )
  }

  popOverMenu = (item, index) => {
    return (
      <>

      </>
    )
  }

  chatList = (item, index) => {
    const { favouriteList } = this.state
    var str_Name = item.name.slice(0, 2)
    let favouriteItem = favouriteList?.length > 0 ? favouriteList?.some(o1 => o1.key == index) : null
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ChatFeature', {
              screen: 'ChatView',
            })
          }}
          onLongPress={() => { this.popOverMenu(item, index) }}
          style={Styles.listChatContainer}>
          <View style={Styles.chatFirstWrapper}>
            {
              item?.image ?
                <Image source={Images.userPic} style={Styles.userPicImage} />
                :
                <View style={Styles.userProfileWrapper}>
                  <Text style={Styles.userProfileText}>{str_Name?.toUpperCase()}</Text>
                </View>
            }
            <View style={{
              marginLeft: hp(1)
            }}>
              <Text style={Styles.userName}>{item.name}</Text>
              <Text style={Styles.displayMessage}>{item.message}</Text>

              {
                item.group == true ?
                  <Text style={Styles.mergeMessage}>
                    <Text style={Styles.displayProject}>{"Project:  "}</Text>
                    <Text style={Styles.nameProject}>{item.project}</Text>
                  </Text>
                  : null
              }
            </View>
          </View>
          <View style={Styles.chatSecondWrapper}>
            {
              favouriteItem == true ?
                <TouchableOpacity onPress={() => this.removeToFavourite(item, index)}>
                  <Image source={Images.favourite} style={Styles.favoEmptyIcon} />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => this.addToFavourite(item, index)}>
                  <Image source={Images.emptyFavourite} style={Styles.favoEmptyIcon} />
                </TouchableOpacity>
            }
            <View style={{
              marginLeft: hp(2)
            }}>
              {
                item.newMessage == true ?
                  <>
                    <Menu>
                      <MenuTrigger>
                        <View style={Styles.notifTag}>
                          <Text style={Styles.tagTextStyle}>
                            {item.messageCount}
                          </Text>
                        </View>
                      </MenuTrigger>
                      <MenuOptions
                        customStyles={{
                          optionsContainer: {
                            marginTop: hp(6.2), borderRadius: 6
                          },
                          optionWrapper: {
                          },
                        }}>
                        <MenuOption>
                          <TouchableOpacity style={Styles.menuOptionStyle}>
                            <Image source={Images.unreadMessage} style={Styles.menuOptionImage} />
                            <Text style={[Styles.menuOptionText, { color: Colors.blue }]}>{"Mark unread"}</Text>
                          </TouchableOpacity>
                        </MenuOption>

                        <View style={Styles.menuDivider} />
                        <MenuOption>
                          <TouchableOpacity style={Styles.menuOptionStyle}>
                            <Image source={Images.volume} style={Styles.menuOptionImage} />
                            <Text style={[Styles.menuOptionText, { color: Colors.blue }]}>{"Mute chat"}</Text>
                          </TouchableOpacity>
                        </MenuOption>
                        
                        <View style={Styles.menuDivider} />
                        <MenuOption>
                          <TouchableOpacity style={Styles.menuOptionStyle}>
                            <Image source={Images.fillFavourite} style={Styles.menuOptionImage} />
                            <Text style={[Styles.menuOptionText, { color: Colors.blue }]}>{"Add to favorites"}</Text>
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
                  </>
                  : null
              }
              <Text style={Styles.displayTime}>{item.date}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={Styles.seperator} />
      </>
    )
  }

  render() {
    const { search, tabClick, listColumn, allChatList, favouriteList, unreadChatList } = this.state

    return (
      <>
        <MenuProvider>
          <SafeAreaProvider>
            <SafeAreaView style={Styles.safeHeadContainer} />
            <SafeAreaView style={Styles.safeAreaContainer}>
              <StatusBar barStyle="dark-content" />
              <Header navigation={this.props.navigation} />
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

                        <FlatList
                          key={listColumn}
                          horizontal={false}
                          scrollEnabled={false}
                          numColumns={listColumn}
                          data={allChatList}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={({ item, index }) => this.chatList(item, index)}
                        />
                        :
                        tabClick == 2 ?
                          <FlatList
                            key={listColumn}
                            horizontal={false}
                            scrollEnabled={false}
                            numColumns={listColumn}
                            data={unreadChatList}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => this.chatList(item, index)}
                          />
                          :
                          favouriteList?.length > 0 ?
                            <FlatList
                              key={listColumn}
                              horizontal={false}
                              scrollEnabled={false}
                              numColumns={listColumn}
                              data={favouriteList}
                              keyExtractor={(item, index) => index.toString()}
                              renderItem={({ item, index }) => this.chatFavouriteList(item, index)}
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
        </MenuProvider>
      </>
    );
  }
}
export default Chats;