import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    // backgroundColor: Colors.White,
    justifyContent: 'flex-end'
  },
  modalWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center'
  },
  filterStyle: {
    width: hp(8),
    height: hp(8),
    // position: 'absolute',
    alignSelf: 'flex-end',
    // bottom: hp(3),
    marginBottom: hp(4)
    // right: hp(3),
  },
  listButtonWrapper: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginBottom: hp(3)
  },
  textTitle: {
    fontSize: hp(2.3),
    fontWeight: "600",
    fontFamily: "Inter",
    color: Colors.Black,
    marginTop: hp(2.5)
  },
  imageStyle: {
    width: hp(8),
    height: hp(8),
    marginLeft: hp(3)
  }
});

export default styles;