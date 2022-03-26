import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  Setimage: {
    width: wp('5%'),
    height: wp('5%')
  },
  contain: {
    flexDirection: 'row',
    marginTop: hp('7%'),
    justifyContent: 'space-between',
    marginHorizontal: hp('2%')
  },
  touchstyles: {
    width: wp('10%')
  },
  touchviewone: {
    width: wp('60%')
  },
  touchViewprofileOne: {
    fontSize: 17,
    fontWeight: '700'
  },
  touchwrite: {
    width: wp('20%'),
    height: wp('7%'),
    borderRadius: 6,
    //alignItems: 'flex-end',
    backgroundColor: '#0076CB'
  },
  mainimgtwo: {
    height: wp('19%'),
    width: wp('19%')
  },
  mainviewtwo: {
    alignItems: 'center',
    marginTop: hp('3%')
  },
  line: {
    borderBottomColor: '#ECF0F1',
    borderBottomWidth: 1.5,
    marginTop: hp('2%')
  },

  verticleLine: {
    height: '110%',
    width: 1.5,
    backgroundColor: '#DBDBE5',
    marginLeft: hp('4.5%')

  },
  textone: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    marginLeft: wp('3%')

  },
  emailWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderColor: Colors.bottomLine,
    backgroundColor: Colors.White,
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    //alignSelf: 'center',
    marginLeft: '3%',
    width: widthScreen / 1.2,
    marginTop: hp(3)
  },
  emailInput: {
    marginLeft: hp('2%'),
    flex: 1,
    fontSize: hp(2),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500'
  },
  inputImage: {
    width: hp(2.7),
    height: hp(2),
    // backgroundColor:'red',
    marginLeft: hp('5%'),
    marginTop: -7,

  },
  touchi: {
    justifyContent: 'flex-end'
  },
  dowimage: {
    height: wp('2%'),
    width: wp('4%'),
    marginTop: hp('0.7%'),
    marginLeft: hp('2%')
  },
  vertiLine: {
    height: '70%',
    width: 1.5,
    backgroundColor: '#DBDBE5',
    marginLeft: wp('5%')
  },
  topone: {
    marginTop: hp('3%')
  },
  checkOutButton: {
    width: hp(10),
    alignSelf: 'center',
    height: hp(4),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue
  },
  checkOutText: {
    fontSize: hp(2),
    color: Colors.White,
    fontWeight: '500',
    fontFamily: "Inter",
  },
  textstyle: {
    marginLeft: wp('3%'),
    fontWeight: '500',
    fontSize: 16
  },
  btn: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 5
  },
  lefttext: {
    color: '#605C5C',
    fontSize: 14
  },
  touchDelete: {
    flexDirection: 'row',
    marginHorizontal: wp('3%'),
    marginTop: wp('12%')
  },
  imageDelete: {
    height: wp('4%'),
    width: wp('4%'),
    marginLeft: wp('2%')
  },
  lastText: {
    marginLeft: wp('3%')
  },
  lastTextone: {
    marginLeft: wp('3%'),
    color: 'red'
  },
  barist: {
    height: '110%',
    width: 1.5,
    backgroundColor: '#DBDBE5',
    marginLeft: hp('2.5%')
  },
  baremail: {
    height: '110%',
    width: 1.5,
    backgroundColor: '#DBDBE5',
    marginLeft: hp('5%')
  },
  barcontact: {
    height: '110%',
    width: 1.5,
    backgroundColor: '#DBDBE5',
    marginLeft: hp('3.25%')
  },
  three: {
    marginLeft: wp('3%'),
    fontSize: 16
  },
  five: {
    marginLeft: hp('5%'),
    fontSize: 16
  },
  vat: {
    height: '110%',
    width: 1.5,
    backgroundColor: '#DBDBE5',
    marginLeft: hp('6.5%')
  },
  locatbar: {
    height: '110%',
    width: 1.5,
    backgroundColor: '#DBDBE5',
    marginLeft: hp('3.3%')
  },
  workbar: {
    height: '110%',
    width: 1.5,
    backgroundColor: '#DBDBE5',
    marginLeft: hp('3.7%')
  },
  workview: {
    flexDirection: 'row',
    marginTop: hp('1%')
  },
  emailview: {
    height: '110%',
    width: 1.5,
    backgroundColor: '#DBDBE5',
    marginLeft: hp('5.5%')
  },
  currenttouch: {
    flexDirection: 'row',
    marginTop: hp('2%')
  },
  scrollStyle: {
    marginTop: hp(3),
    marginBottom: hp(5)
  }
});
export default styles;