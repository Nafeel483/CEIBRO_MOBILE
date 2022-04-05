import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },

  Setimage: {
    width: hp(2.5),
    height: hp(2.5),
    marginTop: hp(0.4)
  },
  contain: {
    flexDirection: 'row',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(2),
    marginBottom: hp(1.5)
  },
  touchviewone: {
    marginLeft: hp(3)
  },
  touchViewprofileOne: {
    fontSize: hp(2.5),
    fontWeight: '700',
    fontFamily: "Inter",
  },
  line: {
    marginTop: hp(0.5),
    backgroundColor: Colors.bottomLine,
    height: hp(0.2),
    width: widthScreen,
    alignSelf: 'center'
  },
  seperator: {
    marginTop: hp(2),
    backgroundColor: Colors.bottomLine,
    height: hp(0.2),
    width: widthScreen / 1.12,
    alignSelf: 'center'
  },
  filterStyle: {
    width: hp(20),
    height: hp(6),
    position: 'absolute',
    alignSelf: 'center',
    bottom: hp(3),
    backgroundColor: Colors.blue,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIconText: {
    fontSize: hp(1.8),
    color: Colors.White,
    fontWeight: '600',
    fontFamily: "Inter",
  },
  tabText: {
    fontSize: hp(1.3),
    color: Colors.mediumGrey,
    fontFamily: "Inter",
    fontWeight: '500'
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
    width: widthScreen / 1.12,
    marginTop: hp(1)
  },
  emailInput: {
    marginLeft: hp(1.5),
    flex: 1,
    fontSize: hp(1.7),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500'
  },
  emailInput1: {
    marginLeft: hp(1.5),
    flex: 1,
  },
  emailInput1Text: {
    fontSize: hp(1.7),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500'
  },
  searchStyle: {
    width: hp(1.5),
    height: hp(1.5),
  },
  filterImage: {
    width: hp(1.8),
    height: hp(1.8),
  },
  inboxLine: {
    height: hp(3),
    width: hp(0.2),
    backgroundColor: "#DBDBE5",
    marginLeft: hp(1.5)
  },
  listTextHeading: {
    marginTop: hp(2),
    alignSelf: 'center',
    width: widthScreen / 1.12,
  },
  textHeading: {
    fontSize: hp(2),
    color: Colors.mediumGrey,
    fontFamily: "Inter",
    fontWeight: '500'
  },
  textFilterHeading: {
    fontSize: hp(2),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '600'
  },
  listChatContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userPicImage: {
    width: hp(4),
    height: hp(4),
    borderRadius: 8,
  },
  userProfileWrapper: {
    width: hp(4),
    height: hp(4),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderColor
  },
  userProfileText: {
    fontSize: hp(1.5),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.Black
  },
  chatFirstWrapper: {
    flexDirection: 'row',
  },
  userName: {
    fontSize: hp(1.6),
    fontWeight: '600',
    fontFamily: "Inter",
    color: Colors.Black,
  },
  displayMessage: {
    fontSize: hp(1.3),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.mediumGrey,
    marginTop: hp(0.5)
  },
  scrollContent: {
    marginBottom: hp(10),
  },
});
export default styles;