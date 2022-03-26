import React, { useState } from 'react';
import {
  Image,
  View,
  ImageBackground,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import CheckBox from '@react-native-community/checkbox';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


const QuestionareModel = (props) => {
  const { open, close } = props
  const [optionSelect, setOptionSelect] = useState(false)
  const [indexValue, setIndexValue] = useState(false)
  const [questionData, setQuestionData] = useState([
    {
      message: "Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      member: [
        {
          pic: Images.charUserpic1
        },
        {
          pic: Images.charUserpic2
        },
        {
          pic: Images.charUserpic3
        },
        {
          pic: Images.charUserpic4
        },
      ],
      percentage: "36%",
    },
    {
      message: "Vestibulum id ligula porta felis euismod semper. Fusce  dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
      member: [
        {
          pic: Images.charUserpic1
        },
        {
          pic: Images.charUserpic2
        },
        {
          pic: Images.charUserpic3
        },
        {
          pic: Images.charUserpic4
        },
      ],
      percentage: "50%",
    },
    {
      message: "Donec sed odio dui. Maecenas faucibus mollis interdum.",
      member: [
        {
          pic: Images.charUserpic1
        },
        {
          pic: Images.charUserpic2
        },
        {
          pic: Images.charUserpic3
        },
        {
          pic: Images.charUserpic4
        },
      ],
      percentage: "14%",
    },
  ])
  const onAddChatPerson = (key) => {
    if (key == indexValue) {
      setOptionSelect(!optionSelect)
      setIndexValue(null)
    } else {
      setOptionSelect(!optionSelect)
      setIndexValue(key)
    }
  }


  const addSuggestListList = (item, index) => {
    const limitMember = item?.member?.length > 3 ? item?.member.slice(0, 3) : item?.member
    console.log("_____Nafeel____", limitMember)
    return (
      <>
        <View style={Styles.itemQuestionWrapper}>
          <View style={{ flexDirection: 'row' }}>
            <CheckBox
              disabled={false}
              value={indexValue == index ? optionSelect : false}
              onValueChange={() => { onAddChatPerson(index) }}
              boxType="circle"
              tintColors={optionSelect == true ? Colors.golden : "#DADFE6"}
              onCheckColor={Colors.golden}
              onTintColor={Colors.golden}
              tintColor={'#DADFE6'}
              style={{
                width: hp(3),
                height: hp(2.5),
                borderRadius: 50,
                marginTop: hp(0.5),
                marginLeft: hp(0.2)
              }}
              onAnimationType={'stroke'}
              offAnimationType={'one-stroke'}
            />
            <View style={{ marginLeft: hp(1) }}>
              <Text style={Styles.itemQuestionText}>{item.message}</Text>
              <View style={{ flexDirection: 'row', marginTop: hp(1) }}>
                {
                  limitMember?.length > 0 && limitMember?.map((val) => {
                    return (
                      <>
                        <TouchableOpacity>
                          <Image source={val?.pic} style={Styles.answerUser} />
                        </TouchableOpacity>
                      </>
                    )
                  })

                }
                <TouchableOpacity>
                  <Text style={Styles.moreText}>{"+4 more"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={Styles.itemPercentageText}>{item.percentage}</Text>
        </View>
      </>
    )
  }


  return (
    <>
      <Modal animationInTiming={300}
        animationOutTiming={300}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.9}
        avoidKeyboard={true}
        backdropColor={"rgba(0,0,0,0.7)"}
        transparent={true}
        isVisible={open}
        onBackdropPress={close}
        style={{ flex: 1, justifyContent: 'flex-start', marginTop: hp(6) }}>
        <View style={Styles.modalCont}>

          <View style={Styles.headerWrapper}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={close}>
                <Image source={Images.close} style={Styles.Setimage} />
              </TouchableOpacity>

              <Text style={Styles.touchViewprofileOne}>{"Questionarie title"}</Text>
            </View>
            <TouchableOpacity style={Styles.filterStyle}>
              <Text style={Styles.plusIconText}>{"Save"}</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.seperator} />
          <View style={Styles.headerWrapper}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={Styles.tabText}>{"Due date"}</Text>
              <View style={Styles.inboxLine} />
              <Text style={Styles.tabDateText}>{"06/06/21"}</Text>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Image source={Images.Nudge} style={Styles.iconBottom1} />
              <Text style={Styles.dateBeforeText}>{"1 day before"}</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.seperator} />
          <View style={Styles.mainContent}>
            <Text style={Styles.participateText}>{"Participants list"}</Text>
            <View style={Styles.headerWrapper}>
              <Text style={Styles.questionHeading}>{"Question for questionary with single choice?"}</Text>
              <TouchableOpacity>
                <Image source={Images.Download} style={Styles.downloadIcon} />
              </TouchableOpacity>
            </View>
            <FlatList
              key={1}
              horizontal={false}
              scrollEnabled={false}
              numColumns={1}
              data={questionData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => addSuggestListList(item, index)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
export default QuestionareModel;