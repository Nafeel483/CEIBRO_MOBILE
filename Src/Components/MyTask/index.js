import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';

const MyTask = (props) => {

  const { item, key, content } = props

  const [counterList, setCounterList] = useState([
    {
      num: '8',
      fill: Colors.golden,
      textFill: Colors.Black
    },
    {
      num: '3',
      fill: Colors.parrotGreen,
      textFill: Colors.White
    },
    {
      num: '5',
      fill: Colors.red,
      textFill: Colors.White
    },
    {
      num: '1',
      fill: Colors.blue,
      textFill: Colors.White
    },
    {
      num: '4',
      fill: Colors.lightGrey,
      textFill: Colors.Black
    },
    {
      num: '12',
      fill: Colors.darkGrey,
      textFill: Colors.White
    },
  ])

  return (
    <>
      <TouchableOpacity style={[content == "Tasks" ? Styles.taskProjectContainer :Styles.taskContainer, {
        borderColor: item.name == 'Draft' ? Colors.darkGrey : item.name == 'Rejected' ? Colors.red :
          item.name == 'Ongoing' ? Colors.golden : item.name == 'Approved' ? Colors.blue :
            item.name == 'Done' ? Colors.lightGrey : Colors.parrotGreen
      }]}>
        <View style={Styles.taskInnerContainer}>
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
            <Text style={Styles.dateText}>{"27.05.2021"}</Text>

          </View>

          <View style={Styles.mainCenterWrapper}>
            <View>
              <Text style={Styles.taskDate}>{"Task due date"}</Text>
              <Text style={Styles.taskDateText}>{"27.05.2021"}</Text>
            </View>
            <View style={{ marginLeft: hp(2) }}>
              <Text style={Styles.taskDate}>{"Assigned to"}</Text>
              <Text style={Styles.taskDateText}>{"Ilja Nikolajev"}</Text>
            </View>
          </View>

          <Text style={Styles.titleText}>{"Valgustite paigaldus"}</Text>

          {/* Bottom Wrapper */}
          <View style={Styles.bottomWrapContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={Images.task} style={Styles.taskImage} />
              <Text style={Styles.subtastText}>{"6 subtask(s)"}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              {
                counterList?.map((val, index) => {
                  return (
                    <View style={[Styles.categoryCircle, { backgroundColor: val.fill }]}>
                      <Text style={[Styles.counterText, { color: val.textFill }]}>{val.num}</Text>
                    </View>
                  )
                })

              }

              <View style={{ flexDirection: 'row', marginLeft: hp(1.5) }}>
                <Image source={Images.message} style={Styles.messageImage} />
                <Text style={Styles.messageCount}>{"0"}</Text>
              </View>

            </View>
          </View>

          <View style={Styles.seperator} />

          <View style={Styles.bottomWrapContainer1}>
            <Text style={Styles.lastTitleText}>{"Vesse-12"}</Text>
            <Text style={Styles.mapText}>{"View map"}</Text>
          </View>

        </View>
      </TouchableOpacity>

    </>
  )
}
export default MyTask;