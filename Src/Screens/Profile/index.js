import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import { Profiler } from 'react/cjs/react.production.min';
import Images from '../../Styles/Images'
import Styles from './Styles'
import Colors from '../../Styles/Colors';

const Profile = (props) => {
   

    return (
        <>
            <View style={Styles.MainContainer}>
                <View style={Styles.contain} >
                    <TouchableOpacity style={Styles.touchstyles}>
                        <Image source={Images.leftArrow} style={Styles.Setimage}/>
                    </TouchableOpacity >
                    <View style={Styles.touchviewone}>
                    <Text style={Styles.touchViewprofileOne}>Profile</Text>
                    </View>
                    <TouchableOpacity style={Styles.touchwrite}>
                       
                        <Image source={Images.write} style={Styles.Setimage}/>
                    </TouchableOpacity>
                </View>
                 <View style={Styles.mainviewtwo}>
                    <Image source={Images.User} style={Styles.mainimgtwo} />
                    <Text style={Styles.textiija}>Ilja Nikolajev</Text>
                    <Text>@name.surname</Text>
                    <Text style={Styles.textno}>{'+ 372 5512 3456'}</Text>
                    <Text style={{color:'#0076CB'}}>{'name.surname@ceibro.com'}</Text>
                    <Text style={Styles.company}>{'Company Ltd'}</Text>
                </View>
                
                <View
  style={Styles.line}
/>
               <View style={Styles.connect}>
                    <TouchableOpacity style={{ width:wp('7%')}}>
                    <Image source={Images.contacts} style={Styles.imgtouch}/>
                    </TouchableOpacity>
                    <View style={Styles.myconnect}>
                    <Text style={Styles.myconnectionmain}>My connections</Text>
                    <Text style={Styles.myconnectionnumber}>123</Text>
                    <Text style={Styles.mycon}>4</Text>
                    </View>
                    <TouchableOpacity style={Styles.touchrightarrow}>
                    <Image source={Images.rightArrow} style={Styles.imgrightarrow}/>
                    </TouchableOpacity>

                </View>
                <View
  style={Styles.line}
/>
                <View style={Styles.connect}>
                    <TouchableOpacity>
                    <Image source={Images.Setting} style={Styles.imgtouch}/>
                    </TouchableOpacity>
                    <View style={Styles.myconnect}>
                    <Text style={Styles.myconnectionmain}>Admin</Text>
                    </View>
                    <TouchableOpacity style={Styles.touchrightarrow}>
                    <Image source={Images.rightArrow} style={Styles.imgrightarrow} />
                    </TouchableOpacity>
                </View>
                <View
  style={Styles.line}
/>
                <View style={Styles.mainlog}>
                    <TouchableOpacity style={Styles.touchimglogout}>
                    <Image source={Images.logOut} style={Styles.imglogout}/>
                    <Text style={Styles.touchtextlogout}>Logout</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={Styles.touchableimgarrow}>
                    <Image source={Images.rightArrow} style={Styles.imgarrow} />
                    </TouchableOpacity>
                </View>
            </View> 
        </>

    )


}

export default Profile;