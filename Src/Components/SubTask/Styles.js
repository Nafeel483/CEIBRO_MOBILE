import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  taskContainer: {
    width: widthScreen / 1.35,
    backgroundColor: Colors.White,
    borderWidth: 0.6,
    borderRadius: 5,
    marginRight: hp(2)
  },
  taskProjectContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderWidth: 0.6,
    borderRadius: 5,
  },
  taskInnerContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(1.5),
    marginBottom: hp(1.8)
  },
  headerOuter: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerWrapper: {
    flexDirection: 'row'
  },
  mainCenterWrapper: {
    flexDirection: 'row',
    marginTop: hp(1)
  },
  taskContainerName: {
    borderRadius: 6
  },
  taskName: {
    margin: hp(1),
    fontSize: hp(1.5),
    fontFamily: "Inter",
    fontWeight: '500'
  },
  dateText: {
    fontWeight: '500',
    fontFamily: "Inter",
    fontSize: hp(1.5),
    color: Colors.Black,
    marginTop: hp(1),
    marginLeft: hp(1.5)
  },
  taskDateText: {
    fontWeight: '500',
    fontFamily: "Inter",
    fontSize: hp(1.5),
    color: Colors.Black,
    marginTop: hp(1),
    marginLeft: hp(1)
  },
  taskDate: {
    fontWeight: '500',
    fontFamily: "Inter",
    fontSize: hp(1.5),
    color: Colors.mediumGrey,
    marginTop: hp(1),
  },
  titleText: {
    marginTop: hp(1.3),
    fontSize: hp(2),
    fontWeight: '500',
    color: Colors.blue,
    fontFamily: "Inter",
  },
  bottomWrapContainer: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    marginTop: hp(3),
    justifyContent: 'space-between'
  },

  taskImage: {
    width: hp(1.5),
    height: hp(1.5)
  },
  subtastText: {
    fontSize: hp(1.3),
    fontWeight: "500",
    color: Colors.Black,
    fontFamily: "Inter",
    marginLeft: hp(1)
  },


  bottomWrapContainer1: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    marginTop: hp(1.5),
    justifyContent: 'space-between'
  },


  iconBottom1: {
    width: hp(2),
    height: hp(2),
    marginTop: hp(1)
  },
  iconBottom2: {
    width: hp(2),
    height: hp(2),
    marginLeft: hp(1.5),
    marginTop: hp(1)
  },
  iconBottom3: {
    width: hp(1.8),
    height: hp(1.8),
    marginLeft: hp(1.5),
    marginTop: hp(1),
    tintColor: Colors.blue
  },
  titleStyle: {
    marginTop: hp(2),
    fontSize: hp(2),
    fontWeight: '700',
    fontFamily: "Inter",
    color: Colors.Black
  },
  titleDesStyle: {
    fontWeight: '500',
    fontFamily: "Inter",
    fontSize: hp(1.6),
    color: Colors.mediumGrey,
    marginTop: hp(1),
  },
  filterStyle: {
    width: hp(17),
    height: hp(5),
    borderColor: Colors.parrotGreen,
    borderRadius: 6,
    borderWidth: 1.5,
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
    color: Colors.parrotGreen,
    fontWeight: '600',
    fontFamily: "Inter",
    marginLeft: hp(1)
  },
  filterStyle1: {
    width: hp(17),
    height: hp(5),
    borderColor: Colors.red,
    borderRadius: 6,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  plusIconText1: {
    fontSize: hp(1.5),
    color: Colors.red,
    fontWeight: '600',
    fontFamily: "Inter",
    marginLeft: hp(1)
  },
});
export default styles;