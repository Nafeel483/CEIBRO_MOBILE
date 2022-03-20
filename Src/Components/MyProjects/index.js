import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';

const MyProjects = (props) => {

  const { item, key, content } = props



  return (
    <>
      <TouchableOpacity style={[content == "Projects" ? Styles.taskProjectContainer : Styles.taskContainer, {
        borderColor: item.name == 'Draft' ? Colors.darkGrey : item.name == 'Rejected' ? Colors.red :
          item.name == 'Ongoing' ? Colors.golden : item.name == 'Approved' ? Colors.blue :
            item.name == 'Done' ? Colors.lightGrey : Colors.parrotGreen
      }]}>
        <View style={Styles.taskInnerContainer}>
          <ImageBackground source={item.image} style={Styles.headerImage}
            imageStyle={{ borderRadius: 6 }}>
            <View style={Styles.headerWrapper}>

              <View style={[Styles.taskContainerName,
              {
                backgroundColor: item.name == 'Draft' ? Colors.darkGrey : item.name == 'Rejected' ? Colors.red :
                  item.name == 'Ongoing' ? Colors.golden : item.name == 'Approved' ? Colors.blue :
                    item.name == 'Done' ? Colors.lightGrey : Colors.parrotGreen
              }]}>
                <Text style={[Styles.taskName, {
                  color: item.name == 'Draft' ? Colors.White : item.name == 'Rejected' ? Colors.White :
                    item.name == 'Ongoing' ? Colors.Black : item.name == 'Approved' ? Colors.White :
                      item.name == 'Done' ? Colors.Black : Colors.White
                }]}>{item.name}</Text>
              </View>
              <View style={Styles.taskContainerName}>
                <Text style={Styles.taskName}>{"27.05.2021"}</Text>
              </View>

            </View>
          </ImageBackground>

          <View style={Styles.mainCenterWrapper}>
            <View>
              <Text style={Styles.taskDate}>{"Due date"}</Text>
              <Text style={Styles.taskDateText}>{"27.05.2021"}</Text>
            </View>
            <View style={{ marginLeft: hp(2) }}>
              <Text style={Styles.taskDate}>{"Owner"}</Text>
              <Text style={Styles.taskDateText}>{"Ilja Nikolajev"}</Text>
            </View>
          </View>

          <Text style={Styles.titleText}>{"New project title"}</Text>
          <Text style={Styles.mapText}>{"View map"}</Text>

          <View style={Styles.seperator} />

          {/* Bottom */}
          <View style={Styles.bottomWrapContainer1}>
            {/* 1 */}
            <View style={{ flexDirection: 'row' }}>
              <Image source={Images.task} style={Styles.messageImage} />
              <Text style={Styles.messageCount}>{"50 task(s)"}</Text>
            </View>
            {/* 2 */}
            <View style={{ flexDirection: 'row' }}>
              <Image source={Images.folder} style={Styles.messageImage} />
              <Text style={Styles.messageCount}>{"250 doc(s)"}</Text>
            </View>
            {/* 3 */}
            <View style={{ flexDirection: 'row' }}>
              <Image source={Images.memberPerson} style={Styles.messageImage} />
              <Text style={Styles.messageCount}>{"47"}</Text>
            </View>
            {/* 4 */}
            <View style={{ flexDirection: 'row' }}>
              <Image source={Images.message} style={Styles.messageImage} />
              <Text style={Styles.messageCount}>{"0"}</Text>
            </View>

          </View>

        </View>
      </TouchableOpacity>

    </>
  )
}
export default MyProjects;