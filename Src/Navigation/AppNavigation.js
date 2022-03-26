import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import BottomTabView from './BottomNavigation';
import Login from '../Screens/Authentication/Login';
import Profile from '../Screens/Profile';
import NewChat from '../Screens/ChatScreens/NewChat';
import ChatView from '../Screens/ChatScreens/ChatView';
import GroupInfo from '../Screens/ChatScreens/GroupInfo';

enableScreens();

const Stack = createStackNavigator();

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,

      }
    };
  },

};

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none"
        screenOptions={{
          transitionConfig: () => ({
            containerStyle: {
              backgroundColor: 'transparent'
            }
          }),
          navigationOptions: { gesturesEnabled: false, }
        }}>
        <Stack.Screen name='AuthStack' component={AuthStack} />
        <Stack.Screen name='BottomTabView' component={BottomTabView} />
        <Stack.Screen name='ProfileStack' component={ProfileStack} />
        <Stack.Screen name='ChatFeature' component={ChatFeature} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'extend',
            }),
          },
        }),
      }}
      mode="modal"
    >
      <Stack.Screen name='Login' component={Login} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'Login', animation: 'fade-in'
          }
        ]} />

    </Stack.Navigator>
  )
}

export const ProfileStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'extend',
            }),
          },
        }),
      }}
      mode="modal"
    >
      <Stack.Screen name='Profile' component={Profile} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'Profile', animation: 'fade-in'
          }
        ]} />

    </Stack.Navigator>
  )
}

export const ChatFeature = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="NewChat"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'extend',
            }),
          },
        }),
      }}
      mode="modal"
    >
      <Stack.Screen name='NewChat' component={NewChat} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'NewChat', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='ChatView' component={ChatView} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'ChatView', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='GroupInfo' component={GroupInfo} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'GroupInfo', animation: 'fade-in'
          }
        ]} />
    </Stack.Navigator>
  )
}