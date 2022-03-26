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

class GroupInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatTitle: 'Group name',
      chatProject: 'Vesse-12',
      listColumn: 1,
      memberDropDown: false,
      memberTab: [
        "All members",
        "Groups",
        "Companies",
        "Admins"
      ],
      clickTab: 0,
      search: '',
      suggestList: [
        {
          name: "Ilja Nikolajev",
          pic: Images.charUserpic1,
          profession: "Electrician",
          add: false
        },
        {
          name: "Kristo Reinsalu",
          pic: Images.charUserpic2,
          profession: "Electrician",
          add: false
        },
        {
          name: "Jaanus Kütson",
          pic: Images.charUserpic3,
          profession: "Electrician",
          add: false
        },
        {
          name: "Martin Tamm",
          pic: Images.charUserpic4,
          profession: "Electrician",
          add: false
        },
        {
          name: "Indrek Lustik",
          pic: Images.charUserpic5,
          profession: "Project manager",
          add: false
        },
      ],
    };
  }
  openMemberDrop = () => {
    this.setState({ memberDropDown: !this.state.memberDropDown })
  }
  addSuggestListList = (item, index) => {
    return (
      <>
        <TouchableOpacity style={Styles.listChatContainer}>
          <View style={Styles.chatFirstWrapper}>
            <Image source={item.pic} style={Styles.userPicImage} />
            <View style={{
              marginLeft: hp(1)
            }}>
              <Text style={Styles.userName}>{item.name}</Text>
              <Text style={Styles.displayMessage}>{`Company . ${item.profession}`}</Text>
            </View>
          </View>
          <Menu>
            <MenuTrigger>
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
      suggestList,
      memberTab, clickTab, search } = this.state
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
                  <Text style={Styles.touchViewprofileOne}>{"Group info"}</Text>
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
                  <View style={Styles.emailWrapper1}>
                    <Text style={Styles.tabText}>{"Project"}</Text>
                    <View style={Styles.inboxLine} />
                    <TextInput
                      style={Styles.emailInput}
                      value={chatProject}
                      placeholder={"Please select a project"}
                      placeholderTextColor={Colors.textColor}
                      autoCapitalize='none'
                      onChangeText={(value) => {
                        this.setState({
                          chatProject: value,
                        })
                      }}
                    />
                    <TouchableOpacity>
                      <Image source={Images.dropDown} style={Styles.searchStyle} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={Styles.line}
                  />


                  <View style={Styles.mediaContainer}>

                    <TouchableOpacity style={Styles.mediaWrapperContainer}>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={Images.gallery} style={Styles.galleryImage} />
                        <Text style={Styles.mediaText}>{"Media & Files"}</Text>
                      </View>
                      <Image source={Images.rightArrow} style={Styles.imgrightarrow} />
                    </TouchableOpacity>
                    <View
                      style={Styles.line}
                    />

                    <TouchableOpacity style={Styles.mediaWrapperContainer}>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={Images.pin} style={Styles.galleryImage} />
                        <Text style={Styles.mediaText}>{"Pinned messages"}</Text>
                      </View>
                      <Image source={Images.rightArrow} style={Styles.imgrightarrow} />
                    </TouchableOpacity>
                    <View
                      style={Styles.line}
                    />

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
                        <Image source={Images.members} style={Styles.galleryImage} />
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
                          <View style={Styles.memberDropContainer}>
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

                          </View>
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
                          <FlatList
                            key={listColumn}
                            horizontal={false}
                            scrollEnabled={false}
                            numColumns={listColumn}
                            data={suggestList}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => this.addSuggestListList(item, index)}
                          />
                        </>
                        :
                        <View
                          style={Styles.line}
                        />
                    }


                  </View>
                </View>
              </ScrollView>
            </SafeAreaView>
          </SafeAreaProvider>
        </MenuProvider>
      </>

    )

  }

}

export default GroupInfo;