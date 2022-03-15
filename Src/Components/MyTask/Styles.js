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
  taskInnerContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(1.5),
    marginBottom: hp(1.5)
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
    marginLeft: hp(2)
  },
  taskDateText: {
    fontWeight: '500',
    fontFamily: "Inter",
    fontSize: hp(1.7),
    color: Colors.Black,
    marginTop: hp(0.5),
  },
  taskDate: {
    fontWeight: '500',
    fontFamily: "Inter",
    fontSize: hp(1.7),
    color: Colors.mediumGrey,
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
  messageCount: {
    fontSize: hp(1.3),
    fontWeight: "500",
    color: Colors.Black,
    fontFamily: "Inter",
    marginLeft: hp(0.5)
  },
  categoryCircle: {
    width: hp(1.7),
    height: hp(1.7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(1.7),
    marginLeft: hp(0.5)
  },
  counterText: {
    fontSize: hp(1),
    fontWeight: '500',
    fontFamily: "Inter",
  },
  messageImage: {
    width: hp(1.6),
    height: hp(1.6)
  },
  bottomWrapContainer1: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    marginTop: hp(1.5),
    justifyContent: 'space-between'
  },
  lastTitleText: {
    fontSize: hp(1.7),
    fontWeight: '700',
    color: Colors.Black,
    fontFamily: "Inter",
  },
  mapText: {
    fontSize: hp(1.7),
    fontWeight: '500',
    color: Colors.blue,
    fontFamily: "Inter",
  },
  seperator: {
    marginTop: hp(1.5),
    backgroundColor: "#ECF0F1",
    height: hp(0.1),
    width: '100%',
    alignSelf: 'center'
  }
});
export default styles;