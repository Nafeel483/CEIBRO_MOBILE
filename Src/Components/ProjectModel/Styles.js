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
  seperator: {
    backgroundColor: Colors.bottomLine,
    height: hp(0.2),
    width: widthScreen,
    alignSelf: 'center',
    marginTop: hp(1.5)
  },
  scrollContent: {
    marginBottom: hp(3)
  },
  userName: {
    fontSize: hp(2),
    fontWeight: '700',
    fontFamily: "Inter",
    color: Colors.Black,
  },
  checkStyle:{
    width: hp(2),
    height: hp(2),
    // marginTop: hp(0.5),
  }
});

export default styles;