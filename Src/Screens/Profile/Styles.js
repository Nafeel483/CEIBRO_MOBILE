import { StyleSheet, Dimensions, Platform } from 'react-native';
// import Colors from '../../../Styles/Colors';
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
        height: wp('5%')
    },
    contain: {
        flexDirection: 'row',
        marginTop: hp('7%'),
        justifyContent: 'space-between',
        marginHorizontal: hp('2%')
    },
    touchstyles: {
        width: wp('10%')
    },
    touchviewone: {
        width: wp('50%')
    },
    touchViewprofileOne: {
        fontSize: 17,
        fontWeight: '700'
    },
    touchwrite: {
        width: wp('30%'),
        alignItems: 'flex-end'
    },
    //img
    mainviewtwo: {
        alignItems: 'center',
        marginTop: hp('3%')
    },
    mainimgtwo: {
        height: wp('19%'),
        width: wp('19%')
    },
    textiija: {

        marginTop: hp('2%'),
        fontWeight: '700',
        fontSize: 25
    },
    textno: {
        fontWeight: '500',
        marginTop: hp('3%')
    },
    company: {
        marginTop: hp('1.5%'),
        fontWeight: '600'
    },
    connect: {
        marginHorizontal: wp('5%'),
        flexDirection: 'row',
        marginTop: hp('4%'),
        justifyContent: 'space-between'
    },
    imgtouch: {
        height: wp('6%'),
        width: wp('6%')
    },
    myconnect: {
        flexDirection: 'row',
        width: wp('53%')
    },
    myconnectionmain: {
        alignSelf: 'center',
        marginLeft: wp('3%')
    },
    myconnectionnumber: {
        marginLeft: hp('1%'),
        backgroundColor: Colors.golden
    },
    mycon: {
        marginLeft: hp('1%'),
        backgroundColor: Colors.red
    },
    touchrightarrow: {
        width: wp('30%'),
        marginTop: hp(0.5)
    },
    imgrightarrow: {
        height: wp('4%'),
        width: wp('2%'),
        alignSelf: 'flex-end'
    },
    newpro: {
        marginTop: hp('2%'),
        width: wp('8%'),
        height: wp('8%')
    },
    mainlog: {
        marginTop: hp('27%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: hp('3%')
    },
    touchimglogout: {
        flexDirection: 'row'
    },
    imglogout: {
        height: wp('5%'),
        width: wp('5%')
    },
    touchtextlogout: {
        marginLeft: hp('2%'),
        alignSelf: 'center',
        color: '#0076CB',
        fontSize: 16
    },
    touchableimgarrow: {
        width: wp('10%'),
        marginTop: hp(1.25)
    },
    imgarrow: {
        height: wp('4%'),
        alignSelf: 'flex-end',
        width: wp('2%')
    },
    line: {
        borderBottomColor: '#ECF0F1',
        borderBottomWidth: 1.5,
        marginTop: hp('2%')
    }




});
export default styles;