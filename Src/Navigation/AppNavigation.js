import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import Login from '../Screens/Authentication/Login';
import Dashboard from '../Screens/Dashboard';


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
      <Stack.Navigator headerMode='none' initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={() => options}
          sharedElementsConfig={(props) => [
            {
              id: 'Login', animation: 'fade-in'
            }
          ]} />
        <Stack.Screen name='Dashboard' component={Dashboard} options={() => options}
          sharedElementsConfig={(props) => [
            {
              id: 'Dashboard', animation: 'fade-in'
            }
          ]}
        />
        {/*   <Stack.Screen name='Reserve' component={Reserve} options={() => options}
          sharedElementsConfig={(props) => [
            {
              id: 'Reserve', animation: 'fade-in'
            }
          ]}
        />
        <Stack.Screen name='Payment' component={Payment} options={() => options}
          sharedElementsConfig={(props) => [
            {
              id: 'Payment', animation: 'fade-in'
            }
          ]}
        />
        <Stack.Screen name='AddNewCard' component={AddNewCard} options={() => options}
          sharedElementsConfig={(props) => [
            {
              id: 'AddNewCard', animation: 'fade-in'
            }
          ]}
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}