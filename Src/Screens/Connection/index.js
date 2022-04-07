import React, { Component } from 'react'
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground,SafeAreaView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Images from '../../Styles/Images'
import Colors from '../../Styles/Colors';
import Styles from './Styles'


class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <>
        <SafeAreaView style={Styles.MainContainer}>
          <View style={Styles.contain} >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={Images.close} style={Styles.Setimage} />
            </TouchableOpacity >
              <Text style={Styles.touchViewprofileOne}>{"Connection"}</Text>
            <TouchableOpacity style={Styles.touchwrite}>
              <Text style={Styles.btn}>{"Invite"}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={Styles.line}
          />

          <View style={Styles.viewAccept}>
            <TouchableOpacity style={Styles.accepttouch}>
              <Text style={Styles.acceptall}>Accept all</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.touchdecline}>
              <Text style={Styles.textDecline} >Decline all</Text>
            </TouchableOpacity>
          </View>
          <View
            style={Styles.line}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollWrapper}>
            <View>
              <View style={Styles.viewMain}>
                <View>
                  <Image source={Images.charUserpic2} style={Styles.imgstyle} />
                </View>
                <View style={Styles.subView}>
                  <Text style={Styles.textSubView}>Kristo Vunukainen</Text>
                  <Text style={Styles.companyName}>{"Company"}</Text>
                </View>
                <View style={Styles.viewone}>

                  <TouchableOpacity style={Styles.touchtwo}>

                    <Text style={Styles.btnone}>{"Accept"}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={Images.Decline} style={Styles.touchdeclinestyle} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={Styles.line}
            />
            <View>
              <View style={Styles.viewMain}>
                <View>
                  <Image source={Images.charUserpic1} style={Styles.imgstyle} />
                </View>
                <View style={Styles.subView}>
                  <Text style={Styles.textSubView}>Indrek Ilum</Text>
                  <Text style={Styles.companyName}>{"Company"}</Text>
                </View>
                <View style={Styles.viewone}>

                  <TouchableOpacity style={Styles.touchtwo}>

                    <Text style={Styles.btnone}>{"Accept"}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={Images.Decline} style={Styles.touchdeclinestyle} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={Styles.line}
            />
            <View>
              <View style={Styles.viewMain}>
                <View>
                  <Image source={Images.charUserpic3} style={Styles.imgstyle} />
                </View>
                <View style={Styles.subView}>
                  <Text style={Styles.textSubView}>Mart Kivikas</Text>
                  <Text style={Styles.companyName}>{"Company"}</Text>
                </View>
                <View style={Styles.viewone}>

                  <TouchableOpacity style={Styles.touchtwo}>

                    <Text style={Styles.btnone}>{"Accept"}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={Images.Decline} style={Styles.touchdeclinestyle} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={Styles.line}
            />
            <View>
              <View style={Styles.viewMain}>
                <View>
                  <Image source={Images.charUserpic4} style={Styles.imgstyle} />
                </View>
                <View style={Styles.subView}>
                  <Text style={Styles.textSubView}>Rene Oruman-Kivist</Text>
                  <Text style={Styles.companyName}>{"Company"}</Text>
                </View>
                <View style={Styles.viewone}>

                  <TouchableOpacity style={Styles.touchtwo}>

                    <Text style={Styles.btnone}>{"Accept"}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={Images.Decline} style={Styles.touchdeclinestyle} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={Styles.line}
            />

            <View>
              <View style={Styles.viewA}>
                <Text style={Styles.textA}>A</Text>
              </View>
              <View style={Styles.viewMain}>
                <View>
                  <Image source={Images.charUserpic3} style={Styles.imgstyle} />
                </View>
                <View style={Styles.subView}>
                  <Text style={Styles.textSubtView}>Andres Kütt</Text>
                    <Text style={Styles.companyName}>{"Company . Electrician"}</Text>
                </View>
              </View>
            </View>
            <View>
              <View style={Styles.viewMainA}>
                <View>
                  <Image source={Images.charUserpic3} style={Styles.imgstyle} />
                </View>
                <View style={Styles.subView}>
                  <Text style={Styles.textSubtView}>Andreas Lustik</Text>
                  <Text style={Styles.companyName}>{"Company . Electrician"}</Text>
                </View>
              </View>
            </View>

            <View
              style={Styles.line}
            />

            <View>
              <View style={Styles.viewA}>
                <Text style={Styles.textA}>B</Text>
              </View>
              <View style={Styles.viewMain}>
                <View>
                  <Image source={Images.charUserpic3} style={Styles.imgstyle} />
                </View>
                <View style={Styles.subView}>
                  <Text style={Styles.textSubtView}>Boris Antseferov</Text>
                  <Text style={Styles.companyName}>{"Company . Electrician"}</Text>
                </View>
              </View>
            </View>
            <View>
              <View style={Styles.viewMainA}>
                <View>
                  <Image source={Images.charUserpic3} style={Styles.imgstyle} />
                </View>
                <View style={Styles.subView}>
                  <Text style={Styles.textSubtView}>Andreas Lustik</Text>
                  <Text style={Styles.companyName}>{"Company . Electrician"}</Text>
                </View>
              </View>
            </View>
            </View>
          </ScrollView>
        </SafeAreaView>

      </>

    );
  }
}


export default Connection