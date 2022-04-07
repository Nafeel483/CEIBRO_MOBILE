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
    width: hp(4.5),
    height: hp(4.5),
    marginTop: hp(0.6)
  },
  contain: {
    flexDirection: 'row',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(1),
    marginBottom: hp(1)
  },
  touchviewone: {
    marginLeft: hp(3),
    marginTop: hp(0.7)
  },
  touchViewprofileOne: {
    fontSize: hp(2.5),
    fontWeight: '700',
    fontFamily: "Inter",
    color: Colors.Black
  },
  line: {
    marginTop: hp(0.5),
    backgroundColor: Colors.bottomLine,
    height: hp(0.2),
    width: widthScreen,
    alignSelf: 'center'
  },
  profleWrapper: {
    marginTop: hp(2),
    alignSelf: 'center',
    width: hp(13),
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: Colors.lightPurple,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  personStyle: {
    width: hp(5),
    height: hp(5),
    alignSelf: 'center',
    marginTop: hp(3),
    tintColor: Colors.mediumGrey
  },
  cameraStyle: {
    width: hp(2),
    height: hp(2),
    alignSelf: 'flex-end',
    marginTop: hp(0.8),
    marginRight: hp(1.5),
    marginBottom: hp(2)
  },
  searchWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderColor: Colors.bottomLine,
    backgroundColor: Colors.White,
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.15,
    marginTop: hp(3)
  },
  emailWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderColor: Colors.White,
    backgroundColor: Colors.White,
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.15,
    marginTop: hp(3)
  },
  emailWrapper1: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderColor: Colors.White,
    backgroundColor: Colors.White,
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.15,
    marginTop: hp(1)
  },
  emailInput: {
    marginLeft: hp(2),
    flex: 1,
    fontSize: hp(1.7),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500'
  },
  tabText: {
    fontSize: hp(1.3),
    color: Colors.mediumGrey,
    fontFamily: "Inter",
    fontWeight: '500'
  },
  inboxLine: {
    height: hp(3),
    width: hp(0.2),
    backgroundColor: "#DBDBE5",
    marginLeft: hp(2)
  },
  editStyle: {
    width: hp(2),
    height: hp(2),
  },
  searchStyle: {
    width: hp(1.7),
    height: hp(1.7),
    marginRight: hp(0.5)
  },
  searchImage: {
    width: hp(1.7),
    height: hp(1.7),
    tintColor: Colors.Black
  },

  mediaContainer: {
    marginTop: hp(3)
  },
  mediaWrapperContainer: {
    marginTop: hp(2),
    marginBottom: hp(2),
    width: widthScreen / 1.15,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  galleryImage: {
    width: hp(2.5),
    height: hp(2.5)
  },
  galleryImage1: {
    width: hp(2.3),
    height: hp(2.5),
    tintColor: Colors.Black
  },
  mediaText: {
    fontSize: hp(2),
    fontWeight: '500',
    color: Colors.blue,
    marginLeft: hp(1.5)
  },
  imgrightarrow: {
    height: hp(3),
    width: hp(3),
  },
  memberDropContainer: {
    width: widthScreen / 1.15,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2)
  },
  tabDropText: {
    fontSize: hp(1.7),
    fontWeight: '700',
    color: Colors.blue,
    marginTop: hp(0.5)
  },
  tabButtonWrapper: {
    borderWidth: 1.5,
    borderRadius: 4,
    borderColor: Colors.lightGrey
  },
  tabDropText1: {
    fontSize: hp(1.6),
    fontWeight: '700',
    color: Colors.Black,
    margin: hp(0.5)
  },
  listChatContainer: {
    marginTop: hp(2.5),
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
    fontSize: hp(1.6),
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
    marginTop: hp(1)
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
  menuimage: {
    width: hp(0.4),
    height: hp(2),
    marginTop: hp(1),
    // marginLeft: hp(5)
  },
  menuOptionStyle: {
    flexDirection: 'row',
    marginTop: hp(1),
    marginBottom: hp(1),
    width: '90%',
    alignSelf: 'center'
  },
  menuOptionImage: {
    width: hp(2),
    height: hp(2)
  },
  menuOptionText: {
    fontSize: hp(1.7),
    fontWeight: '500',
    fontFamily: "Inter",
    marginLeft: hp(1.5)
  },
  menuDivider: {
    width: '90%',
    alignSelf: 'center',
    height: hp(0.2),
    backgroundColor: Colors.bottomLine
  },
  notifTag: {
    height: hp(2.3),
    width: hp(2.3),
    position: 'absolute',
    right: -8,
    top: -10,
    borderRadius: hp(2.3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
  },
  tagTextStyle: {
    fontSize: hp(1.1),
    color: Colors.White,
    fontWeight: '700',
    fontFamily: "Inter",
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
  mediaShowContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(2),
    marginBottom: hp(2)
  },
  mediaMainWrapper: {
    marginRight: hp(1.5),
    // marginLeft: hp(1.5),
    marginTop: hp(1),
  },
  mediaFiles: {
    width: hp(4),
    height: hp(4),
    borderRadius: 6,

    alignSelf: 'center'
  },
  mediaFileText: {
    marginTop: hp(1),
    fontSize: hp(1.2),
    color: Colors.blue,
    fontWeight: '500',
    fontFamily: "Inter",
    textAlign: 'center',
    width: hp(12)
  },
  showPinnedMessage: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    backgroundColor: "rgba(0,118,200,0.20)",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginTop: hp(0.5),
    marginBottom: hp(0.5)
  },
  innerPinnedMessage: {
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
    width: '90%',
    alignSelf: 'center'
  },
  pinnedText: {
    fontSize: hp(1.8),
    fontWeight: '500',
    color: "#0077C8",
    fontFamily: "Inter",
  }
});
export default styles;