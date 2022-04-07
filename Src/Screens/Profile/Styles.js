import { StyleSheet, Dimensions, Platform } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  firstPortion: {
    flex: 0.9
  },
  Setimage: {
    width: hp(4.5),
    height: hp(4.5)
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(1.5)
  },
  touchstyles: {
    width: wp('10%')
  },
  touchviewone: {
    marginLeft: hp(3)
  },
  touchViewprofileOne: {
    fontSize: hp(2.5),
    fontWeight: '700',
    fontFamily: "Inter",
    marginTop: hp(0.65)
  },
  touchwrite: {
    width: wp('30%'),
    alignItems: 'flex-end'
  },
  //img
  mainviewtwo: {
    alignItems: 'center',
    marginTop: hp('3%')
  },
  mainimgtwo: {
    height: wp('19%'),
    width: wp('19%'),
    borderRadius: 8,
  },
  userProfileWrapper: {
    height: wp('19%'),
    width: wp('19%'),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderColor,
    // marginLeft: hp(4)
  },
  userProfileText: {
    fontSize: hp(2),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.Black
  },
  textiija: {
    marginTop: hp('2%'),
    fontWeight: '700',
    fontSize: hp(2)
  },
  textno: {
    fontWeight: '500',
    marginTop: hp('3%')
  },
  company: {
    marginTop: hp('1.5%'),
    fontWeight: '600'
  },
  connect: {
    flexDirection: 'row',
    marginTop: hp('4%'),
    justifyContent: 'space-between',
    width: widthScreen / 1.12,
    alignSelf: 'center'
  },
  imgtouch: {
    height: wp('6%'),
    width: wp('6%'),
    marginTop: hp(0.3)
  },
  myconnect: {
    flexDirection: 'row',
    // width: wp('53%')
  },
  myconnectionmain: {
    alignSelf: 'center',
    marginLeft: hp('2%'),
    color: Colors.blue,
    fontSize: hp(1.8),
    fontFamily: "Inter",
  },
  myconnectionContainer: {
    marginLeft: hp('1%'),
    backgroundColor: Colors.golden,
    borderRadius: 25
  },
  myconnectionnumber: {
    fontSize: hp(1.4),
    fontFamily: "Inter",
    margin: hp(1),
    fontWeight: '700',
    color: Colors.White
  },
  myConWrapper: {
    marginLeft: hp('1%'),
    backgroundColor: Colors.red,
    width: hp(3),
    height: hp(3),
    borderRadius: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(0.4)
  },
  mycon: {
    fontSize: hp(1.4),
    fontFamily: "Inter",
    fontWeight: '700',
    color: Colors.White
  },
  touchrightarrow: {
    // width: wp('30%'),
    marginTop: hp(0.3)
  },
  imgrightarrow: {
    height: hp(3),
    width: hp(3),
  },
  searchStyle: {
    width: hp(2.5),
    height: hp(2.5),
    marginRight: hp(1.4),
    marginTop: hp(1)
  },
  newpro: {
    marginTop: hp('2%'),
    width: wp('8%'),
    height: wp('8%')
  },
  mainlog: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(3),
    width: widthScreen / 1.12,
    alignSelf: 'center'
  },
  touchimglogout: {
    flexDirection: 'row'
  },
  imglogout: {
    height: wp('6%'),
    width: wp('6%'),
    marginTop: hp(0.3)
  },
  touchtextlogout: {
    marginLeft: hp('2%'),
    alignSelf: 'center',
    color: '#0076CB',
    fontSize: hp(1.8),
    fontFamily: "Inter",
  },
  touchableimgarrow: {
    marginTop: hp(0.3)
  },
  imgarrow: {
    height: hp(3),
    width: hp(3),
  },
  line: {
    backgroundColor: Colors.bottomLine,
    width: widthScreen,
    height: hp(0.1),
    marginTop: hp('2%')
  },
  secondPortion: {
    flex: 0.1
  }

});
export default styles;