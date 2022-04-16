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
  tabText: {
    fontSize: hp(1.3),
    color: Colors.mediumGrey,
    fontFamily: "Inter",
    fontWeight: '500',
    marginTop: hp(0.2)
  },
  inboxLine: {
    height: hp(2.5),
    width: hp(0.2),
    backgroundColor: "#DBDBE5",
    marginLeft: hp(1.5)
  },
  tabDateText: {
    marginLeft: hp(1.5),
    fontSize: hp(1.7),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500'
  },
  iconBottom1: {
    width: hp(2.4),
    height: hp(2.4),
    tintColor: Colors.mediumGrey
  },
  dateBeforeText: {
    fontSize: hp(1.7),
    color: Colors.mediumGrey,
    fontFamily: "Inter",
    fontWeight: '500',
    marginLeft: hp(1.5),
  },
  mainContent: {
    width: widthScreen / 1.12,
    alignSelf: 'center'
  },
  participateText: {
    fontSize: hp(1.7),
    color: Colors.blue,
    fontFamily: "Inter",
    fontWeight: '500',
    marginTop: hp(2)
  },
  questionHeading: {
    fontSize: hp(2.4),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500',
    width: wp('80%'),
    marginTop: hp(1.5),
    marginBottom: hp(1.5)
  },
  downloadIcon: {
    width: hp(5),
    height: hp(5)
  },
  itemQuestionWrapper: {
    marginTop: hp(1.5),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  itemQuestionText: {
    fontSize: hp(2),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500',
    width: wp('60%'),
    marginTop: hp(0.5)
  },
  itemPercentageText: {
    fontSize: hp(1.75),
    color: Colors.green,
    fontFamily: "Inter",
    fontWeight: '700',
    marginTop: hp(1),
  },
  moreText: {
    fontSize: hp(1.75),
    color: Colors.blue,
    fontFamily: "Inter",
    fontWeight: '500',
    marginTop: hp(0.4)
  },
  answerUser: {
    width: hp(3.5),
    height: hp(3.5),
    borderRadius: 6,
    marginRight: hp(1)
  },
  iconCircle: {
    width: hp(2.5),
    height: hp(2.5),
    borderRadius: 50,
    marginTop: hp(0.5),
    marginLeft: hp(0.2),
    tintColor: "#DADFE6"
  },
  iconCircle1: {
    width: hp(2.5),
    height: hp(2.5),
    borderRadius: 50,
    marginTop: hp(0.5),
    marginLeft: hp(0.2),
    tintColor: Colors.golden
  },
  emailWrapper: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: Colors.lightGrey,
    backgroundColor: Colors.White,
    borderRadius: 10,
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.2,
    marginTop: hp(1.5),
    marginBottom: hp(1)
  },
  emailInput: {
    marginLeft: hp(1.5),
    flex: 1,
    fontSize: hp(1.8),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500'
  },
});

export default styles;