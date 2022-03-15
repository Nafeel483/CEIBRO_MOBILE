import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainHeader: {
    backgroundColor: Colors.White
  },
  mainContentHeader: {
    marginTop: hp(2),
    marginBottom: hp(2),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerLogo: {
    width: hp(14),
    height: hp(5)
  },
  rightContent: {
    flexDirection: 'row'
  },
  notificationWrapper: {
    width: hp(2.3),
    height: hp(2.3),
    borderRadius: hp(2.3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationImage: {
    width: hp(2.3),
    height: hp(2.3),
  },
  notifTag: {
    height: hp(2.3),
    width: hp(2.3),
    position: 'absolute',
    right: -13,
    top: -10,
    borderRadius: hp(2.3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.red,
  },
  tagTextStyle: {
    fontSize: hp(1.3),
    color: Colors.White,
    fontWeight: '700',
    fontFamily: "Inter",
  },
  userPicImage: {
    width: hp(5),
    height: hp(5),
    borderRadius: 8,
    marginLeft: hp(4)
  }
});
export default styles;