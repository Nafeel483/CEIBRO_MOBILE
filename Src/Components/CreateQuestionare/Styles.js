import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  modalCont: {
    height: hp('95%'),
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: 15,
    alignSelf: 'center'
  },
  headerWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: hp(2.5),
    justifyContent: 'space-between'
  },
  Setimage: {
    width: hp(2.5),
    height: hp(2.5),
    marginTop: hp(0.4)
  },
  touchViewprofileOne: {
    fontSize: hp(2.5),
    fontWeight: '700',
    fontFamily: "Inter",
    marginLeft: hp(2)
  },
  filterStyle: {
    width: hp(8),
    height: hp(4),
    backgroundColor: Colors.blue,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(-0.1)
  },
  plusIconText: {
    fontSize: hp(1.6),
    color: Colors.White,
    fontWeight: '600',
    fontFamily: "Inter",
  },
  seperator: {
    backgroundColor: Colors.bottomLine,
    height: hp(0.2),
    width: widthScreen,
    alignSelf: 'center',
    marginTop: hp(1.5)
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
    marginLeft: hp(1.5),
    flex: 1,
    fontSize: hp(1.7),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500'
  },
  searchStyle: {
    width: hp(1.5),
    height: hp(1.5),
  },
  tabText: {
    fontSize: hp(1.3),
    color: Colors.mediumGrey,
    fontFamily: "Inter",
    fontWeight: '500',
    width: hp(8)
  },
  inboxLine: {
    height: hp(3),
    width: hp(0.2),
    backgroundColor: "#DBDBE5",
    marginLeft: hp(1.5),
  },
  templeteText: {
    fontSize: hp(1.3),
    color: Colors.blue,
    fontFamily: "Inter",
    fontWeight: '500'
  },
  scrollWrapper: {
    marginBottom: hp(3),
    width: widthScreen / 1.12,
    alignSelf: "center"
  },
  questionText: {
    fontSize: hp(2),
    fontWeight: '700',
    fontFamily: "Inter",
    marginTop: hp(4)
  },
  filterStyle1: {
    width: hp(16),
    height: hp(6),
    backgroundColor: Colors.White,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: hp(4)
  },
  plusIcon: {
    width: hp(1.7),
    height: hp(1.7),
    tintColor: Colors.Black
  },
  plusIconText1: {
    fontSize: hp(1.5),
    color: Colors.blue,
    fontWeight: '700',
    fontFamily: "Inter",
    marginLeft: hp(1)
  },
});

export default styles;