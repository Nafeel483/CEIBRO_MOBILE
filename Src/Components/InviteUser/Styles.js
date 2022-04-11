import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  modalCont: {
    height: hp('35%'),
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
    marginTop: hp(5)
  },
  emailInput: {
    marginLeft: hp(1.5),
    flex: 1,
    fontSize: hp(2),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500'
  },
  menuOptionImage: {
    width: hp(2.5),
    height: hp(2.5),
    marginLeft: hp(1.5),
    tintColor: Colors.blue
  },
  inboxLine: {
    height: hp(3),
    width: hp(0.2),
    backgroundColor: "#DBDBE5",
    marginLeft: hp(1.5)
  },
  filterStyle: {
    width: hp(14),
    height: hp(5.5),
    backgroundColor: Colors.blue,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(4)
  },
  plusIconText: {
    fontSize: hp(2),
    color: Colors.White,
    fontWeight: '600',
    fontFamily: "Inter",
  },
});

export default styles;