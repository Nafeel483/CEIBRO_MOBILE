import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.screenBackground
  },
  safeHeadContainer: {
    backgroundColor: Colors.White
  },
  mainContent: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(2),
    marginBottom: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mainContent1: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  scrollContent: {
    marginBottom: hp(3)
  },
  taskText: {
    fontSize: hp(2.6),
    fontWeight: '500',
    color: Colors.Black,
    fontFamily: "Inter",
  },
  viewAllButton: {
    width: hp(10),
    alignSelf: 'center',
    height: hp(4),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.blue,
    borderWidth: 1.5
  },
  viewAllText: {
    fontSize: hp(1.9),
    fontWeight: '700',
    fontFamily: "Inter",
    color: Colors.blue
  },
  allProductList: {
    marginTop: hp(3),
    marginLeft: hp(2.6)
  },
  allProductList1: {
    marginTop: hp(3),
  },
  categoryContent: {
    flexDirection: 'row',
    marginRight: hp(2.5)
  },
  categoryListName: {
    fontSize: hp(1.9),
    fontWeight: '500',
    fontFamily: "Inter",
    color: Colors.blue
  },
  categoryCircle: {
    width: hp(2.6),
    height: hp(2.6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(2.6),
    marginLeft: hp(1)
  },
  counterText: {
    fontSize: hp(1.3),
    fontWeight: '500',
    fontFamily: "Inter",
  },
  filterStyle: {
    width: hp(8),
    height: hp(8),
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: hp(3),
    right: hp(3),
  },
  headerContainer: {
    backgroundColor: Colors.White
  },
  seperator: {
    marginTop: hp(0.5),
    backgroundColor: "#ECF0F1",
    height: hp(0.1),
    width: '100%',
    alignSelf: 'center'
  },
  searchStyle: {
    width: hp(2.5),
    height: hp(2.5),
    marginTop: hp(0.6)
  },
  filterImage: {
    width: hp(2.5),
    height: hp(2.5),
    marginTop: hp(0.6),
    marginLeft: hp(4)
  },
  myListProject: {
    marginTop: hp(2)
  }
});
export default styles;