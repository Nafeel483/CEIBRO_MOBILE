import React from 'react';
import {
  StyleSheet,
  Image,
  Platform,
  Text,
  View
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Images from '../Styles/Images';
import Colors from '../Styles/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../Screens/Dashboard';
import Projects from '../Screens/Projects';
import Tasks from '../Screens/Tasks';
import Chat from '../Screens/ChatScreens/Chat';
import Works from '../Screens/Works';
import { connect } from 'react-redux';


const navigationRef = React.createRef();



export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

const Tab = createBottomTabNavigator();
const DashboardStack = createStackNavigator();
const ChatStack = createStackNavigator();
const TaskStack = createStackNavigator();
const ProjectStack = createStackNavigator();
const WorkStack = createStackNavigator();

export const dashboardStack = () => {
  return (
    <DashboardStack.Navigator initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}>
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
    </DashboardStack.Navigator>
  );
}

export const chatStack = () => {
  return (
    <ChatStack.Navigator initialRouteName="Chat"
      screenOptions={{
        headerShown: false,
      }}>
      <ChatStack.Screen name="Chat" component={Chat} />
    </ChatStack.Navigator>
  );
}

export const taskStack = () => {
  return (
    <TaskStack.Navigator initialRouteName="Tasks"
      screenOptions={{
        headerShown: false,
      }}>
      <TaskStack.Screen name="Tasks" component={Tasks} />
    </TaskStack.Navigator>
  );
}

export const projectStack = () => {
  return (
    <ProjectStack.Navigator initialRouteName="Projects"
      screenOptions={{
        headerShown: false,
      }}>
      <ProjectStack.Screen name="Projects" component={Projects} />

    </ProjectStack.Navigator>
  );
}
export const workStack = () => {
  return (
    <WorkStack.Navigator initialRouteName="Works"
      screenOptions={{
        headerShown: false,
      }}>
      <WorkStack.Screen name="Works" component={Works} />

    </WorkStack.Navigator>
  );
}
export const BottomTabView = (props) => {
  console.log("Bottom Tabs", props, props?.chat)
  let unreadChatCount = props?.chat?.unreadChatCount?.count ? props?.chat?.unreadChatCount?.count : 0
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let image
          if (route.name === 'Dashboard') {
            image = focused ? Images.dashboadIcon : Images.dashboadIcon;
          }
          else if (route.name === 'Chat') {
            image = focused
              ? Images.message
              : Images.message;
          }
          else if (route.name === 'Tasks') {
            image = focused
              ? Images.task
              : Images.task;
          }
          else if (route.name === 'Projects') {
            image = focused ? Images.folder : Images.folder;
          }
          else if (route.name === 'Works') {
            image = focused ? Images.workIcon : Images.workIcon;
          }
          return (
            <>
              <Image
                source={image}
                style={{
                  width: route.name === 'Tasks' ? hp(2.6) : route.name === 'Projects' ? hp(2.8) : hp(2.8),
                  height: route.name === 'Tasks' ? hp(2.8) : route.name === 'Projects' ? hp(2.9) : hp(2.8),
                  tintColor: focused ? Colors.Black : Colors.blue,
                  marginTop: Platform.OS == 'ios' ? hp(1) : 0
                }}
              />
              {
                route.name === 'Chat' && unreadChatCount != 0 ?
                  <View style={{
                    height: hp(2.3),
                    width: hp(2.3),
                    position: 'absolute',
                    right: 15,
                    top: 2,
                    borderRadius: hp(2.3),
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Colors.red,
                  }}>
                    <Text style={{
                       fontSize: hp(1.3),
                       color: Colors.White,
                       fontWeight: '700',
                       fontFamily: "Inter",
                    }}>
                      {`${unreadChatCount?.toString()}`}
                    </Text>
                  </View>
                  : null
              }
            </>
          );
        },
        tabBarStyle: { height: hp(10), },
        headerShown: false,
        tabBarLabelStyle: {
          marginBottom: Platform.OS == 'android' ? hp(1.5) : hp(0.3),
          marginTop: Platform.OS == 'android' ? hp(-1.5) : hp(1)
        }
      })}
      tabBarOptions={{
        activeTintColor: Colors.Black,
        inactiveTintColor: Colors.blue,
      }}
    >
      <Tab.Screen name="Dashboard" component={dashboardStack} />
      <Tab.Screen name="Chat" component={chatStack} />
      <Tab.Screen name="Tasks" component={taskStack} />
      <Tab.Screen name="Projects" component={projectStack} />
      <Tab.Screen name="Works" component={workStack} />
    </Tab.Navigator>
  );
}

const mapStateToProps = state => {
  return {
    chat: state.chat
  }
}

export default connect(mapStateToProps, null)(BottomTabView)