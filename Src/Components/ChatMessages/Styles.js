import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  chatMessageWrapper: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    // paddingBottom: 5,
  },
  receivedWrapper: {
    justifyContent: "flex-start",
  },
  chatMessageInner: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    // padding: 0 10,

  },
  receivedInnerWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
  avatarName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ImageChecing: {
    height: 20,
    width: 20,
  },
  textName: {
    margin: 0,
    // marginLeft: 10,
    fontSize: 13,
    color: Colors.textColor,
    fontWeight: "500"
  },
  textName1: {
    // margin: 0,
    marginLeft: 10,
    fontSize: 13,
    color: Colors.textColor,
    fontWeight: "500"
  },
  chatMessageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 5,

  },
  DateWrapper: {
    // marginLeft: 'auto',
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textInputColor,
    marginTop: 10,
    marginLeft: 10,
  },

  chatMessageHeaderText: {
    borderWidth: 1,
    borderColor: Colors.bottomLine,
    backgroundColor: Colors.White,
    borderRadius: 6,
  },
  chatMessageHeaderText1: {
    borderRadius: 6,
    backgroundColor: 'rgba(0,118,200,0.20)',

  },

  innerView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(1.5),
    marginBottom: hp(1.5)
  },
  messageHeader: {
    flexDirection: 'row'
  },
  userPicImage: {
    width: hp(5),
    height: hp(5),
    borderRadius: 8,
  },
  userName: {
    fontSize: hp(1.7),
    fontWeight: '600',
    fontFamily: "Inter",
    color: Colors.Black,
    width: hp(18)
  },
  displayMessage: {
    fontSize: hp(1.3),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.mediumGrey,
    marginTop: hp(0.5)
  },
  DateWrapper1: {
    fontSize: hp(1.2),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.mediumGrey,
    marginLeft: hp(0.6),
    marginTop: hp(0.3),
    width: hp(9)
  },
  questionContainer: {
    marginTop: hp(2),
    flexDirection: 'row'
  },
  questionText: {
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.blue,
  },
  questionDoc: {
    width: hp(2),
    height: hp(2.4),
    marginLeft: hp(1.5)
  },
  messageText: {
    fontSize: hp(1.65),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.Black,
    marginTop: hp(1),
    width: wp('70%')
  },
  userProfileWrapper: {
    width: hp(5),
    height: hp(5),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.borderColor
  },
  userProfileText: {
    fontSize: hp(1.8),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.Black
  },
  documentWrapper: {
    marginTop: hp(1),
    width: wp('65%'),
    borderRadius: 6,
    borderColor: Colors.bottomLine,
    borderWidth: 1
  },
  documentInnerWrapper: {
    width: "90%",
    alignSelf: 'center',
    marginTop: hp(1),
    marginBottom: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mediaFilesWrapper: {
    flexDirection: 'row'
  },
  mediaFiles: {
    width: hp(3),
    height: hp(3),
    borderRadius: 5,
    marginRight: hp(1)
  },
  menuContainer: {
    width: hp(3),
    height: hp(3),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuimage: {
    width: hp(0.3),
    height: hp(1.5),
  },
  bottomScene: {
    marginTop: hp(1),
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  mediaSeenFiles: {
    width: hp(1.65),
    height: hp(1.65),
    borderRadius: 5,
    marginRight: hp(0.5)
  },
  mediaSeenFilesName: {
    width: hp(1.65),
    height: hp(1.65),
    borderRadius: 5,
    marginRight: hp(0.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.borderColor
  },
  mediaSeenInnerName: {
    fontSize: hp(0.5),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.Black
  },
  seenMessage: {
    fontSize: hp(1.3),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.mediumGrey,
    marginLeft: hp(1.5),
    marginRight: hp(0.5)
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
  galleryImage: {
    width: hp(2),
    height: hp(2),
    marginLeft: hp(1.3),
    tintColor: Colors.blue
  },
  replyContainer: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    marginBottom: hp(1.5),
    // borderRadius: 8
  },
  replyContainerInner: {
    width: '85%',
    alignSelf: 'center',
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
  },
  lineReply: {
    height: hp(5),
    width: hp(0.6),
    backgroundColor: Colors.blue
  },
  replyMessageText: {
    fontSize: hp(1.65),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.Black,
    // marginTop: hp(1.5),
  },
  userNameReply:{
    fontSize: hp(1.7),
    fontWeight: '600',
    fontFamily: "Inter",
    color: Colors.Black,
  }
});
export default styles;