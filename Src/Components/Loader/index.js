import React, { Component } from 'react';
import { View, Animated, Easing, Image } from 'react-native';
import styles from './styles';
import Colors from "../../Styles/Colors";
import Images from '../../Styles/Images';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


class Loading extends Component {
  constructor(props) {
    super(props);

    this.RotateValueHolder = new Animated.Value(0);
    this.state = {};
  }
  // componentDidMount() {
  //   this.StartImageRotateFunction();
  // }
  // StartImageRotateFunction() {
  //   this.RotateValueHolder.setValue(0);

  //   Animated.timing(this.RotateValueHolder, {
  //     toValue: 1,
  //     useNativeDriver: true,
  //     duration: 3000,
  //     easing: Easing.linear,
  //   }).start(() => this.StartImageRotateFunction());
  // }

  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={styles.container}>
        {/* <View
          style={{
            // backgroundColor: Colors.White,
            width: 70,
            height: 70,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}> */}
        <Image
          style={{
            width: hp(8),
            height: hp(8)
          }}
          source={Images.loaderLogo}
        />
        {/* </View> */}
      </View>
    )
  }
}

export default Loading; 