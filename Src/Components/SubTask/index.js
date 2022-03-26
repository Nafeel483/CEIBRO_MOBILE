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

const SubTask = (props) => {

  const { item, key, content } = props

  return (
    <>
      <TouchableOpacity style={[content == "Tasks" ? Styles.taskProjectContainer : Styles.taskContainer, {
        borderColor: item.name == 'Draft' ? Colors.darkGrey : item.name == 'Rejected' ? Colors.red :
          item.name == 'Ongoing' ? Colors.golden : item.name == 'Approved' ? Colors.blue :
            item.name == 'Done' ? Colors.lightGrey : Colors.parrotGreen
      }]}>
        <View style={Styles.taskInnerContainer}>
          <View style={Styles.headerOuter}>
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
            <View style={Styles.headerWrapper}>
              <TouchableOpacity>
                <Image source={Images.fileUpload} style={Styles.iconBottom1} />
              </TouchableOpacity>
              <Text style={Styles.dateText}>{"0"}</Text>
              <TouchableOpacity>
                <Image source={Images.message} style={Styles.iconBottom2} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Images.gallery} style={Styles.iconBottom3} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.headerWrapper}>
            <Text style={Styles.taskDate}>{"Assigned to"}</Text>
            <Text style={Styles.taskDateText}>{"Ilja Nikolajev"}</Text>
          </View>

          <Text style={Styles.titleStyle}>{item.title}</Text>
          <Text style={Styles.titleDesStyle}>{"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum."}</Text>

          <View style={Styles.bottomWrapContainer}>

            <TouchableOpacity 
              style={Styles.filterStyle}>
              <Image source={Images.accept} style={Styles.plusIcon} />
              <Text style={Styles.plusIconText}>{"Accept"}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={Styles.filterStyle1}>
              <Image source={Images.reject} style={Styles.plusIcon} />
              <Text style={Styles.plusIconText1}>{"Reject"}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </TouchableOpacity>
    </>
  )
}
export default SubTask;