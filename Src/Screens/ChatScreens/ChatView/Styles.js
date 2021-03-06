import { StyleSheet, Dimensions, Platform } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../../../Styles/Colors';
import Metrics from '../../../Styles/Metrices';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  },
  fullContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  Setimage: {
    width: hp(2.5),
    height: hp(2.5),
    marginTop: hp(1)
  },
  menuimage: {
    width: hp(0.8),
    height: hp(2.5),
    marginTop: hp(1),
    marginLeft: hp(5)
  },
  headerContainer: {
    overflow: 'hidden',
    paddingBottom: 5
  },
  headerWrapper: {
    backgroundColor: Colors.White,

    shadowColor: "#000",
    shadowOffset: {
      width: 1, height: 1
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  contain: {
    flexDirection: 'row',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(1.5),
    marginBottom: hp(1.8),
    justifyContent: 'space-between'
  },
  myconnect: {
    flexDirection: 'row',
    // width: wp('53%')
  },
  touchviewone: {
    marginLeft: hp(3)
  },
  touchViewprofileOne: {
    fontSize: hp(2),
    fontWeight: '700',
    fontFamily: "Inter",
    color: Colors.Black
  },
  touchViewprofileOne1: {
    fontSize: hp(2),
    fontWeight: '700',
    fontFamily: "Inter",
    color: Colors.Black,
    marginTop: hp(1)
  },
  mergeMessage: {
    marginTop: hp(0.5),
    fontSize: hp(1.5),
    fontFamily: "Inter",
  },
  displayProject: {
    fontWeight: '500',
    color: Colors.Black,
  },
  nameProject: {
    fontWeight: '600',
    color: Colors.blue,
  },
  seperator: {
    backgroundColor: Colors.bottomLine,
    height: hp(0.2),
    width: widthScreen,
    alignSelf: 'center'
  },
  replyToContainer: {
    alignSelf: 'center',
    width: widthScreen,
    backgroundColor: Colors.lightGrey,
  },
  mediaToContainer: {
    alignSelf: 'center',
    width: widthScreen / 1.12,
    marginBottom: hp(1.5),
  },
  replyInnerContainer: {
    alignSelf: 'center',
    width: widthScreen / 1.23,
    marginBottom: hp(1.5),
    marginTop: hp(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  replyUserHeader: {
    fontSize: hp(2),
    fontWeight: '600',
    color: Colors.blue,
    fontFamily: "Inter",
  },
  replyTextMessage: {
    fontSize: hp(1.7),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500',
    marginTop: hp(1)
  },
  replyClose: {
    width: hp(2),
    height: hp(2),
    marginTop: hp(1)
  },
  emailWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderColor: Colors.White,
    backgroundColor: Colors.White,
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.12,
    marginTop: hp(0.5),
    marginBottom: hp(0.5)
  },
  emailInput: {
    marginLeft: hp(2),
    flex: 1,
    fontSize: hp(1.7),
    color: Colors.Black,
    fontFamily: "Inter",
    fontWeight: '500'
  },
  micStyle: {
    width: hp(1.7),
    height: hp(2.4),
  },
  bottomWrapper: {
    marginBottom: Platform.OS == 'android' ? hp(0.2) : hp(0.2)
  },
  bottomIconsWrapper: {
    marginTop: hp(1.5),
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  iconBottom: {
    width: hp(2.4),
    height: hp(2.4)
  },
  iconBottom1: {
    width: hp(2.4),
    height: hp(2.4),
    marginLeft: hp(3)
  },
  iconBottom2: {
    width: hp(2.2),
    height: hp(2.5),
    marginLeft: hp(3)
  },
  inboxLine: {
    height: hp(3),
    width: hp(0.2),
    backgroundColor: "#ECF0F1",
    marginLeft: hp(3)
  },
  menuOptionStyle: {
    flexDirection: 'row',
    marginTop: hp(1),
    marginBottom: hp(1),
    width: '90%',
    alignSelf: 'center'
  },
  menuOptionImage: {
    width: hp(2),
    height: hp(2)
  },
  menuOptionText: {
    fontSize: hp(1.7),
    fontWeight: '500',
    fontFamily: "Inter",
    marginLeft: hp(1.5)
  },
  menuDivider: {
    width: '90%',
    alignSelf: 'center',
    height: hp(0.2),
    backgroundColor: Colors.bottomLine
  },
  mediaMainWrapper: {
    marginRight: hp(1.5),
    // marginLeft: hp(1.5),
    marginTop: hp(1),
  },
  mediaFiles: {
    width: hp(5),
    height: hp(5),
    borderRadius: 6,

  },
  styleClose: {
    width: hp(3),
    height: hp(3),
    alignSelf: 'flex-end',
    tintColor: Colors.golden,
    position: 'absolute',
    top: -8,
    right: -8
  }
});
export default styles;