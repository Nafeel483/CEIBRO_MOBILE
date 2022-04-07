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
    height: wp('5%'),
    marginTop: hp(0.4)
  },
  contain: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    justifyContent: 'space-between',
    width: widthScreen / 1.12,
    alignSelf: 'center'
  },
  touchstyles: {
    width: wp('10%')
  },
  touchviewone: {
    width: wp('60%')
  },
  touchViewprofileOne: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.Black,
    fontFamily: "Inter",
  },
  touchwrite: {
    width: wp('18%'),
    height: wp('7%'),
    borderRadius: 6,
    //alignItems: 'flex-end',
    backgroundColor: '#0076CB',
    justifyContent: 'center',
    alignItems: 'center',
  },


  line: {
    borderBottomColor: '#ECF0F1',
    borderBottomWidth: 1.5,
    marginTop: hp('2%')
  },
  btn: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: hp(1.5)
  },
  btnone:
  {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 7,
    fontWeight: 'bold'

  },
  viewAccept: {
    flexDirection: 'row',
    marginHorizontal: hp('2%'),
    marginTop: hp('2%')
  },
  accepttouch: {
    width: wp('50%')
  },
  acceptall: {
    color: '#0076C8',
    fontWeight: 'bold',
    fontSize: 15
  },
  touchdecline: {
    width: wp('40%'),
    alignItems: 'flex-end'
  },
  textDecline: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15
  },
  viewMain: {
    flexDirection: 'row',
    marginTop: hp('3%'),
    marginHorizontal: hp('2%')
  },
  viewMainA: {
    flexDirection: 'row',
    marginHorizontal: hp('2%'),
    marginTop: hp('1%'),
  },
  imgstyle: {
    height: wp('13%'),
    width: wp('13%')
  },
  subView: {
    marginLeft: wp('1.5%'),
    marginTop: wp('0.5%'),
    width: wp('38%')
  },
  textSubView: {
    color: '#0076C8',
    fontWeight: 'bold',
    fontSize: 15
  },
  textSubtView: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.Black,
    fontFamily: "Inter",
  },
  companyName: {
    fontSize: hp(1.4),
    color: Colors.mediumGrey,
    fontFamily: "Inter",
    fontWeight: '500',
    marginTop: hp(0.4)
  },
  viewone: {
    width: wp('50%'),
    flexDirection: 'row',
    marginTop: hp('0.5')
  },
  touchtwo: {
    width: wp('20%'),
    height: wp('8.5%'),
    borderRadius: 6,
    //alignItems: 'flex-end',
    backgroundColor: '#0076CB',
    marginLeft: wp('10%')
  },
  touchdeclinestyle: {
    width: wp('8%'),
    height: wp('8%'),
    marginLeft: hp('1%')
  },
  viewA: {
    marginHorizontal: hp('2%'),
    marginTop: hp('1%')
  },
  textA: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.Black,
    fontFamily: "Inter",
  },
  scrollWrapper: {
    marginBottom: hp(5),
    // width: widthScreen / 1.12,
    // alignSelf: 'center'
  }

});
export default styles;