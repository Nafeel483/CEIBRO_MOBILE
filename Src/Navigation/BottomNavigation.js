import React from 'react';
import {
  StyleSheet,
  Image,
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
    <DashboardStack.Navigator headerMode="none" initialRouteName="Dashboard">
      <DashboardStack.Screen headerMode="none" name="Dashboard" component={Dashboard} />
    </DashboardStack.Navigator>
  );
}

export const chatStack = () => {
  return (
    <ChatStack.Navigator headerMode="none" initialRouteName="Chat">
      <ChatStack.Screen name="Chat" component={Chat} />
    </ChatStack.Navigator>
  );
}

export const taskStack = () => {
  return (
    <TaskStack.Navigator headerMode="none" initialRouteName="Tasks">
      <TaskStack.Screen name="Tasks" component={Tasks} />
    </TaskStack.Navigator>
  );
}

export const projectStack = () => {
  return (
    <ProjectStack.Navigator headerMode="none" initialRouteName="Projects">
      <ProjectStack.Screen name="Projects" component={Projects} />

    </ProjectStack.Navigator>
  );
}
export const workStack = () => {
  return (
    <WorkStack.Navigator headerMode="none" initialRouteName="Works">
      <WorkStack.Screen name="Works" component={Works} />

    </WorkStack.Navigator>
  );
}
export const BottomTabView = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
            <Image
              source={image}
              style={{
                width: hp(2.5),
                height: hp(2.5), tintColor: focused ? Colors.Black : Colors.blue,
                marginTop: hp(0.5)
              }}
            />
          );
        },
        tabBarStyle: { height: hp(10), },
        headerShown: false
      })}
      tabBarOptions={{
        activeTintColor: Colors.Black,
        inactiveTintColor: Colors.blue,
      }}
    >
      <Tab.Screen headerMode="none" name="Dashboard" component={dashboardStack} />
      <Tab.Screen name="Chat" component={chatStack} />
      <Tab.Screen name="Tasks" component={taskStack} />
      <Tab.Screen name="Projects" component={projectStack} />
      <Tab.Screen name="Works" component={workStack} />
    </Tab.Navigator>
  );
}


export default BottomTabView;