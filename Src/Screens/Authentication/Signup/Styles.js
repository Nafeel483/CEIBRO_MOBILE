import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
// const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  headingBackground: {
    width: widthScreen,
    height: hp(50)
  },
  logoStyle: {
    width: hp(22),
    height: hp(17),
    marginTop: hp(5.5)
  },
  innerHeader: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    flex: 0.9
  },
  loginText: {
    fontSize: hp(4),
    fontWeight: '700',
    color: Colors.White,
    fontFamily: "Inter",
  },
  headerContent: {
    // flex: 0.5
  },
  bottomContent: {
    // flex: 0.4
  },
  bottomContent1: {
    // flex: 0.1
  },
  bottomContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(3)
  },
  bottomContainer1: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    // marginTop: hp(3),
    marginBottom: hp(1)
  },
  emailWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderColor: Colors.bottomLine,
    backgroundColor: Colors.White,
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.2,
    marginTop: hp(3)
  },
  emailInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: hp(2),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500'
  },
  orderCheckContainer: {
    width: widthScreen / 1.2,
    marginTop: hp(4),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  cartProductName: {
    fontSize: hp(1.8),
    fontWeight: '500',
    color: Colors.Black,
    fontFamily: "Inter",
  },
  loginButtonContainer: {
    width: widthScreen / 1.2,
    marginTop: hp(4),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  checkOutButton: {
    width: hp(17),
    alignSelf: 'center',
    height: hp(6),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue
  },
  checkOutText: {
    fontSize: hp(2.2),
    color: Colors.White,
    fontWeight: '700',
    fontFamily: "Inter",
  },
  forgotText: {
    fontSize: hp(2),
    color: Colors.blue,
    fontWeight: '500',
    fontFamily: "Inter",
    marginTop: hp(1.7)
  },
  noAccountText: {
    fontSize: hp(1.9),
    color: Colors.Black,
    fontWeight: '500',
    fontFamily: "Inter",
  },
  signupText: {
    fontSize: hp(1.9),
    color: Colors.blue,
    fontWeight: '500',
    fontFamily: "Inter",
  },
  inputImage: {
    width: hp(2.7),
    height: hp(2),
    marginRight: hp(1),
    marginTop: -7
  },
  scrollStyle: {
    marginBottom: hp(3)
  }
});
export default styles;