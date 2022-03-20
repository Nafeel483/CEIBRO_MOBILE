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

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeHeadContainer} />
          <SafeAreaView style={Styles.safeAreaContainer} forceInset={{ bottom: 'never' }}>
            <StatusBar barStyle="dark-content" />
          </SafeAreaView>
        </SafeAreaProvider>

      </>
    );
  }
}
export default Works;