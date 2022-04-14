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
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Header from '../../Components/Header';
import MyProjects from '../../Components/MyProjects';
import ButtonModel from '../../Components/ButtonModel';
import {
  getMyAllInvites, getMyAllConnections,
  getMyInviteCount, getMyConnectionsCount
} from '../../Redux/Actions/users';
import { unreadMessageCount } from '../../Redux/Actions/chat';
import { connect } from 'react-redux';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [
        {
          name: 'Ongoing',
          count: '8',
          fill: Colors.golden,
          textFill: Colors.Black,
        },
        {
          name: 'Approved',
          count: '1',
          fill: Colors.blue,
          textFill: Colors.White,
        },
        {
          name: 'Done',
          count: '4',
          fill: Colors.lightGrey,
          textFill: Colors.Black,
        },
        {
          name: 'Draft',
          count: '13',
          fill: Colors.darkGrey,
          textFill: Colors.White,
        },
        {
          name: 'Submitted',
          count: '3',
          fill: Colors.parrotGreen,
          textFill: Colors.White,
        },
        {
          name: 'Rejected',
          count: '3',
          fill: Colors.red,
          textFill: Colors.White,
        },
      ],
      allProjectList: [
        {
          name: 'Draft',
          image: Images.project
        },
        {
          name: 'Ongoing',
          image: Images.project2
        },
        {
          name: 'Submitted',
          image: Images.project1
        },
      ],
      listColumn: 1,
      actions: [
        {
          label: "New chat",
          image: Images.popChat,
        },
        {
          label: "New task",
          image: Images.popTask,

        },
        {
          label: "New project",
          image: Images.popProject,

        },
      ],
      isMenuOpen: false,
    };
  }

  componentDidMount = () => {
    this.focusListener = this.props.navigation.addListener('focus', async () => {
      let accessToken = this.props.auth?.userLogin?.tokens?.access?.token

      this.props.getMyInviteCount(accessToken)
      this.props.getMyConnectionsCount(accessToken)
      this.props.getMyAllInvites(accessToken)
      this.props.getMyAllConnections(accessToken)
      this.props.unreadMessageCount(accessToken)
    })

  }

  handleMenuToggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  handleItemPress = (item, index) => {
    console.log("_____Nafeel:::::", item, index)
  }

  categoriesList = (item, index) => {
    return (
      <>
        <TouchableOpacity style={Styles.categoryContent}>
          <Text style={Styles.categoryListName}>{item.name}</Text>
          <View style={[Styles.categoryCircle, { backgroundColor: item.fill }]}>
            <Text style={[Styles.counterText, { color: item.textFill }]}>{item.count}</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }


  myProjectList = (item, index) => {
    return (
      <>
        <View style={Styles.myListProject}>
          <MyProjects item={item} key={index} content={"Projects"} />
        </View>
      </>
    )
  }
  render() {
    const { categoryList, allProjectList, listColumn, actions, isMenuOpen } = this.state

    let profileUser = this.props.user?.myProfile ? this.props.user?.myProfile : this.props.auth?.userLogin?.user

    let inviteCount = this.props.user?.inviteCount ? this.props.user?.inviteCount : null

    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeHeadContainer} />
          <SafeAreaView style={Styles.safeAreaContainer} forceInset={{ bottom: 'never' }}>
            <StatusBar barStyle="dark-content" />
            <Header userData={profileUser}
              inviteCount={inviteCount}
              navigation={this.props.navigation} />
            <View style={Styles.headerContainer}>
              <View style={Styles.seperator} />
              <View style={Styles.mainContent}>
                <Text style={Styles.taskText}>{"Projects"}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity>
                    <Image source={Images.search} style={Styles.searchStyle} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={Images.filter} style={Styles.filterImage} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.scrollContent}>
                <View style={Styles.allProductList}>
                  <FlatList
                    horizontal={true}
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    data={categoryList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => this.categoriesList(item, index)}
                  />
                </View>
                <View style={Styles.allProductList1}>
                  <FlatList
                    key={listColumn}
                    horizontal={false}
                    scrollEnabled={false}
                    numColumns={listColumn}
                    data={allProjectList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => this.myProjectList(item, index)}
                  />
                </View>
              </View>
            </ScrollView>
            {
              isMenuOpen == true ?
                <ButtonModel
                  open={isMenuOpen}
                  actions={actions}
                  handleItemPress={this.handleItemPress}
                  close={this.handleMenuToggle} />
                : <TouchableOpacity onPress={this.handleMenuToggle}>
                  <Image source={Images.plus} style={Styles.filterStyle} />
                </TouchableOpacity>
            }
          </SafeAreaView>
        </SafeAreaProvider>

      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMyConnectionsCount: (user) => dispatch(getMyConnectionsCount(user)),
    getMyInviteCount: (user) => dispatch(getMyInviteCount(user)),
    getMyAllInvites: (user) => dispatch(getMyAllInvites(user)),
    getMyAllConnections: (user) => dispatch(getMyAllConnections(user)),
    unreadMessageCount: (user) => dispatch(unreadMessageCount(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);