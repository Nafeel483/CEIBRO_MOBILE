import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.screenBackground
  },
  safeHeadContainer: {
    backgroundColor: Colors.White
  },
  mainContent: {
    backgroundColor: Colors.White
  },
  seperator: {
    marginTop: hp(0.5),
    backgroundColor: Colors.bottomLine,
    height: hp(0.1),
    width: '100%',
    alignSelf: 'center'
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
    width: widthScreen / 1.12,
    marginTop: hp(1)
  },
  emailInput: {
    marginLeft: hp(2),
    flex: 1,
    fontSize: hp(2),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500'
  },
  searchStyle: {
    width: hp(2.5),
    height: hp(2.5),
    tintColor: Colors.Black
  },
  inboxLine: {
    height: hp(3),
    width: hp(0.2),
    backgroundColor: "#DBDBE5",
    marginLeft: hp(2)
  },
  tabsContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(2),
    flexDirection: 'row',
    marginBottom: hp(1.5),
    justifyContent: 'space-evenly'
  },
  tabText: {
    fontSize: hp(2),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500'
  },
  tabLine: {
    height: hp(3),
    width: hp(0.2),
    backgroundColor: "#DBDBE5",
  },
  favoIcon: {
    width: hp(2),
    height: hp(2),
    marginTop: hp(0.2),
    marginRight: hp(0.5)
  },
  favoEmptyIcon: {
    width: hp(2.2),
    height: hp(2.2),
  },
  scrollContent: {
    marginBottom: hp(3),
    backgroundColor: Colors.White
  },
  listChatContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: hp(1.5),
    justifyContent: 'space-between'
  },
  userPicImage: {
    width: hp(6),
    height: hp(6),
    borderRadius: 8,
  },
  userProfileWrapper: {
    width: hp(6),
    height: hp(6),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderColor
  },
  userProfileText: {
    fontSize: hp(2.2),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.Black
  },
  chatFirstWrapper: {
    flexDirection: 'row',
  },
  chatSecondWrapper: {
    marginTop: hp(1.2),
    flexDirection: 'row',
  },
  userName: {
    fontSize: hp(1.8),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.Black,
    marginTop: hp(0.5)
  },
  displayMessage: {
    fontSize: hp(1.5),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.mediumGrey,
    marginTop: hp(0.8)
  },
  mergeMessage: {
    marginTop: hp(0.8),
    fontSize: hp(1.5),
    fontFamily: "Inter",
  },
  displayProject: {
    fontWeight: '500',
    color: Colors.Black,
  },
  nameProject: {
    fontWeight: '600',
    color: Colors.blue,
  },
  displayTime: {
    fontSize: hp(1.7),
    fontFamily: "Inter",
    fontWeight: '500',
    color: Colors.Black,
  },
  notifTag: {
    height: hp(2.3),
    width: hp(2.3),
    borderRadius: hp(2.3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.red,
    marginBottom: hp(0.5)
  },
  tagTextStyle: {
    fontSize: hp(1.3),
    color: Colors.White,
    fontWeight: '700',
    fontFamily: "Inter",
  },
  emptyText: {
    textAlign: 'center',
    fontSize: hp(3),
    marginTop: hp(20),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.red
  },
  filterStyle: {
    width: hp(14),
    height: hp(6),
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: hp(3),
    right: hp(3),
    backgroundColor: Colors.blue,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  plusIcon: {
    width: hp(1.7),
    height: hp(1.7)
  },
  plusIconText: {
    fontSize: hp(1.5),
    color: Colors.White,
    fontWeight: '600',
    fontFamily: "Inter",
    marginLeft: hp(1)
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
  }
});
export default styles;