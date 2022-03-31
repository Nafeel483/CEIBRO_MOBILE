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
import CheckBox from '@react-native-community/checkbox';
import Images from '../../../Styles/Images'
import Styles from './Styles'
import Colors from '../../../Styles/Colors';
import ProjectModel from '../../../Components/ProjectModel';
import { connect } from 'react-redux';
import { showMessage, hideMessage } from "react-native-flash-message";
import Loader from '../../../Components/Loader';
import { getAllProjects } from '../../../Redux/Actions/project';
import { getAllUsers } from '../../../Redux/Actions/users';
import * as API from '../../../Redux/Selectors/AllApi';
import moment from 'moment';

class NewChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatTitle: '',
      chatWith: '',
      chatProject: '',
      listColumn: 1,
      openProject: false,
      projectId: '',
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
      nameBList: [
        {
          name: "Ben Tamm",
          pic: Images.charUserpic4,
          profession: "Electrician",
          add: false
        },
        {
          name: "Ben Stokes",
          pic: Images.charUserpic5,
          profession: "Project manager",
          add: false
        },
      ],
      nameAList: [
        {
          name: "Aaron Finch",
          pic: Images.charUserpic2,
          profession: "Electrician",
          add: false
        },
        {
          name: "Alaster Cock",
          pic: Images.charUserpic3,
          profession: "Project Manager",
          add: false
        },
      ]
    };
  }


  componentDidMount = () => {
    let accessToken = this.props.auth?.userLogin?.tokens?.access?.token
    this.props.getAllProjects(accessToken)
  }
  openProjectList = () => {
    this.setState({ openProject: !this.state.openProject })
  }
  selectCheckedProject = (item) => {
    const { chatProject, projectId } = this.state
    if (projectId == item?.id) {
      this.setState({
        chatProject: '',
        projectId: '',
        openProject: !this.state.openProject
      })
    }
    else {
      this.setState({
        chatProject: item?.title,
        projectId: item?.id,
        openProject: !this.state.openProject
      })
      this.getProjectMember(item?.id)
    }
  }
  getProjectMember = (projectId) => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token

    API.getProjectMembers(projectId, token)
      .then((res) => {
        console.log("getProjectMember Response api====>", res)
        this.setState({ allChatList: res })
      })
      .catch((error) => {
        console.log("getProjectMember api error", error)
      });
  }

  onAddChatPerson = (key) => {
    const { suggestList } = this.state
    let data = this.state.suggestList
    data[key].add = !data[key].add
    console.log("Nafjsjd____", data)
    this.setState({ suggestList: data })
  }

  addSuggestListList = (item, index) => {
    return (
      <>
        <View key={index}
          style={Styles.listChatContainer}>
          <TouchableOpacity style={Styles.chatFirstWrapper}>
            <Image source={item.pic} style={Styles.userPicImage} />
            <View style={{
              marginLeft: hp(1)
            }}>
              <Text style={Styles.userName}>{item.name}</Text>
              <Text style={Styles.displayMessage}>{`Company . ${item.profession}`}</Text>
            </View>
          </TouchableOpacity>
          <CheckBox
            disabled={false}
            value={item.add}
            onValueChange={() => this.onAddChatPerson(index)}
            onChange={() => { this.onAddChatPerson(index) }}
            boxType='square'
            onCheckColor={Colors.golden}
            onTintColor={Colors.golden}
            tintColors={item.add == true ? Colors.golden : "#DADFE6"}
            tintColor={'#DADFE6'}
            style={{
              marginTop: hp(0.5),
              width: hp(1.7),
              height: hp(1.7),
              borderRadius: 15,
              marginRight: hp(0.5)
            }}
            onAnimationType={'stroke'}
            offAnimationType={'one-stroke'}
          />
        </View>
      </>
    )
  }

  render() {
    const { chatTitle, chatWith, chatProject, listColumn,
      suggestList, nameBList, nameAList,
      openProject
    } = this.state

    let allProjects = this.props.project?.allProjects
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.MainContainer}>
            {/* Header */}
            <View style={Styles.contain}>
              <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                <Image source={Images.close} style={Styles.Setimage} />
              </TouchableOpacity >
              <View style={Styles.touchviewone}>
                <Text style={Styles.touchViewprofileOne}>{"Chat"}</Text>
              </View>
            </View>
            <View
              style={Styles.line}
            />
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
            </View>
            {/* Project */}
            <TouchableOpacity onPress={this.openProjectList}
              style={Styles.emailWrapper}>
              <Text style={Styles.tabText}>{"Project"}</Text>
              <View style={Styles.inboxLine} />
              <View style={Styles.emailInput1}>
                <Text style={[Styles.emailInput1Text, {
                  color: chatProject != "" ? Colors.Black : Colors.textColor
                }]}>{chatProject != "" ? chatProject : "Please select a project"}</Text>
              </View>
              <TouchableOpacity>
                <Image source={Images.dropDown} style={Styles.searchStyle} />
              </TouchableOpacity>
            </TouchableOpacity>
            {/*  */}
            <View style={Styles.emailWrapper}>
              <Text style={Styles.tabText}>{"Chat with"}</Text>
              <View style={Styles.inboxLine} />
              <TextInput
                style={Styles.emailInput}
                value={chatWith}
                placeholder={"Type name, company or group"}
                placeholderTextColor={Colors.textColor}
                autoCapitalize='none'
                onChangeText={(value) => {
                  this.setState({
                    chatWith: value,
                  })
                }}
              />
              <TouchableOpacity>
                <Image source={Images.filter} style={Styles.filterImage} />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.scrollContent}>
                <View style={Styles.listTextHeading}>
                  <Text style={Styles.textHeading}>{"Suggested users/groups/companies"}</Text>
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
                <View
                  style={Styles.seperator}
                />
                <View style={Styles.listTextHeading}>
                  <Text style={Styles.textFilterHeading}>{"A"}</Text>
                </View>
                <FlatList
                  key={listColumn}
                  horizontal={false}
                  scrollEnabled={false}
                  numColumns={listColumn}
                  data={nameAList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => this.addSuggestListList(item, index)}
                />
                <View
                  style={Styles.seperator}
                />
                <View style={Styles.listTextHeading}>
                  <Text style={Styles.textFilterHeading}>{"B"}</Text>
                </View>
                <FlatList
                  key={listColumn}
                  horizontal={false}
                  scrollEnabled={false}
                  numColumns={listColumn}
                  data={nameBList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => this.addSuggestListList(item, index)}
                />
                <View
                  style={Styles.seperator}
                />
              </View>
            </ScrollView>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ChatFeature', {
                  screen: 'ChatView',
                })
              }}
              style={Styles.filterStyle}>
              <Text style={Styles.plusIconText}>{"Start Conversation"}</Text>
            </TouchableOpacity>


            {
              openProject == true ?
                <ProjectModel
                  open={openProject}
                  project={allProjects}
                  chatProject={chatProject}
                  selectCheckedProject={this.selectCheckedProject}
                  close={this.openProjectList}
                />
                : null
            }
          </SafeAreaView>
        </SafeAreaProvider>
      </>

    )

  }

}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    chat: state.chat,
    user: state.user,
    project: state.project,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllProjects: (user) => dispatch(getAllProjects(user)),
    getAllUsers: (user) => dispatch(getAllUsers(user)),

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewChat);