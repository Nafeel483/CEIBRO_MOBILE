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
import MyTask from '../../Components/MyTask';
import SubTask from '../../Components/SubTask';
import ButtonModel from '../../Components/ButtonModel';
import { connect } from 'react-redux';
import {
  getMyAllInvites, getMyAllConnections,
  getMyInviteCount, getMyConnectionsCount
} from '../../Redux/Actions/users';

class Tasks extends Component {
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
      allTaskList: [
        {
          name: 'Draft'
        },
        {
          name: 'Submitted'
        },
        {
          name: 'Rejected'
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
      tabClick: 1,
      allSubTaskList: [
        {
          name: 'Ongoing',
          title: "Magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          name: 'Submitted',
          title: "Parturient montes, nascetur culus mus."
        },
        {
          name: 'Ongoing',
          title: "Magnis dis parturient montes, nascetur ridiculus mus."
        },
      ],
    };
  }

  componentDidMount = () => {
    this.focusListener = this.props.navigation.addListener('focus', async () => {
      let accessToken = this.props.auth?.userLogin?.tokens?.access?.token

      this.props.getMyInviteCount(accessToken)
      this.props.getMyConnectionsCount(accessToken)
      this.props.getMyAllInvites(accessToken)
      this.props.getMyAllConnections(accessToken)
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
  mytaskList = (item, index) => {
    return (
      <>
        <View style={Styles.myListProject}>
          <MyTask item={item} key={index} content={"Tasks"} />
        </View>
      </>
    )
  }
  mySubtaskList = (item, index) => {
    return (
      <>
        <View style={Styles.myListProject}>
          <SubTask item={item} key={index} content={"Tasks"} />
        </View>
      </>
    )
  }

  tabSelect = (num) => {
    this.setState({ tabClick: num })
  }

  render() {
    const { categoryList, allTaskList, listColumn,
      actions, isMenuOpen, tabClick, allSubTaskList } = this.state

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
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => { this.tabSelect(1) }}>
                    <Text style={[Styles.taskText, { color: tabClick == 1 ? Colors.Black : Colors.blue }]}>{"Tasks"}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.tabSelect(2) }}>
                    <Text style={[Styles.taskText, { marginLeft: hp(2), color: tabClick == 2 ? Colors.Black : Colors.blue }]}>{"Subtasks"}</Text>
                  </TouchableOpacity>
                </View>
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
                  {
                    tabClick == 1 ?
                      <FlatList
                        key={listColumn}
                        horizontal={false}
                        scrollEnabled={false}
                        numColumns={listColumn}
                        data={allTaskList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => this.mytaskList(item, index)}
                      />
                      :
                      <FlatList
                        key={listColumn}
                        horizontal={false}
                        scrollEnabled={false}
                        numColumns={listColumn}
                        data={allSubTaskList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => this.mySubtaskList(item, index)}
                      />
                  }
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
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);