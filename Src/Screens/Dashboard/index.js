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
  FlatList,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Header from '../../Components/Header';
import MyTask from '../../Components/MyTask';
import MyProjects from '../../Components/MyProjects';
import ButtonModel from '../../Components/ButtonModel';
import { connect } from 'react-redux';
// import { logoutUser } from '../../Redux/Actions/auth';
// import { getMyProfile } from '../../Redux/Actions/users';
import Loader from '../../Components/Loader';

class Dashboard extends Component {
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
        <MyTask item={item} key={index} content={"Dashboard"} />
      </>
    )
  }
  myProjectList = (item, index) => {
    return (
      <>
        <MyProjects item={item} key={index} content={"Dashboard"} />
      </>
    )
  }


  render() {
    const { categoryList, allTaskList, allProjectList, actions, isMenuOpen } = this.state

    let profileUser = this.props.user?.myProfile ? this.props.user?.myProfile : this.props.auth?.userLogin?.user
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeHeadContainer} />
          <SafeAreaView style={Styles.safeAreaContainer} >
            <StatusBar barStyle="dark-content" />
            <Header userData={profileUser}
              navigation={this.props.navigation} />

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.scrollContent}>
                {/* My Task */}
                <View style={Styles.mainContent}>
                  <Text style={Styles.taskText}>{"My tasks"}</Text>
                  <TouchableOpacity style={Styles.viewAllButton}>
                    <Text style={Styles.viewAllText}>{"View all"}</Text>
                  </TouchableOpacity>
                </View>
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

                <View style={Styles.allProductList}>
                  <FlatList
                    horizontal={true}
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    data={allTaskList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => this.mytaskList(item, index)}
                  />
                </View>
                {/* My Task End*/}
                {/* My Projects */}
                <View style={Styles.mainContent1}>
                  <Text style={Styles.taskText}>{"My projects"}</Text>
                  <TouchableOpacity style={Styles.viewAllButton}>
                    <Text style={Styles.viewAllText}>{"View all"}</Text>
                  </TouchableOpacity>
                </View>
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
                <View style={Styles.allProductList}>
                  <FlatList
                    horizontal={true}
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
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
    // logoutUser: (user) => dispatch(logoutUser(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);