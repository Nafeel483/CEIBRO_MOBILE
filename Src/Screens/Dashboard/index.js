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
      ]
    };
  }
  categoriesList = (item, index, props) => {
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
        <MyTask item={item} key={index}/>
      </>
    )
  }
  render() {
    const { categoryList, allTaskList } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeHeadContainer} />
          <SafeAreaView style={Styles.safeAreaContainer}>
            <StatusBar barStyle="dark-content" />
            <Header navigation={this.props.navigation} />
            <ScrollView>
              <View style={Styles.scrollContent}>
                {/* My Task */}
                <View style={Styles.mainContent}>
                  <Text style={Styles.taskText}>{"My tasks"}</Text>
                  <TouchableOpacity style={Styles.viewAllButton} onPress={() => { this.props.navigation.navigate("Profile") }}>
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

              </View>
            </ScrollView>
          </SafeAreaView>
        </SafeAreaProvider>

      </>
    );
  }
}
export default Dashboard;