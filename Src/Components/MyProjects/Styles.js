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
  taskProjectContainer:{
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
    marginBottom: hp(1.5)
  },
  headerImage: {
    width: '100%',
    alignSelf: 'center',
    height: hp(14)
  },
  headerWrapper: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(1.5),
  },
  mainCenterWrapper: {
    flexDirection: 'row',
    marginTop: hp(1)
  },
  taskContainerName: {
    borderRadius: 6,
    backgroundColor: Colors.White
  },
  taskName1: {
    margin: hp(1),
    fontSize: hp(1.5),
    fontFamily: "Inter",
    fontWeight: '500',
    color: Colors.Black,
  },
  dateText: {
    fontWeight: '500',
    fontFamily: "Inter",
    fontSize: hp(1.5),
    color: Colors.Black,
    marginTop: hp(1),
    marginLeft: hp(2)
  },
  mainCenterWrapper: {
    flexDirection: 'row',
    marginTop: hp(1)
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
    fontWeight: '700',
    color: Colors.Black,
    fontFamily: "Inter",
  },
  mapText: {
    marginTop: hp(1),
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
  },
  bottomWrapContainer1: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    marginTop: hp(1.5),
    marginBottom: hp(0.5),
    justifyContent: 'space-between'
  },
  messageImage: {
    width: hp(1.6),
    height: hp(1.6)
  },
  messageCount: {
    fontSize: hp(1.3),
    fontWeight: "500",
    color: Colors.Black,
    fontFamily: "Inter",
    marginLeft: hp(0.5)
  },
});
export default styles;