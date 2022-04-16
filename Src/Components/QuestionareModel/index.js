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
import moment from 'moment';


const QuestionareModel = (props) => {
  const { open, close, data, currentUser, sendSubmit } = props
  const [multipleAns, setMultipleAns] = useState(null)

  const [checkBoxAns, setCheckBoxAns] = useState([])
  const [answerQuestion, setAnswerQuestion] = useState('')
  const [answerShort, setAnswerShort] = useState(null)



  const onAddChatPerson = (val, key) => {
    if (val?.id == multipleAns?.id && val?.answer == key) {
      setMultipleAns(null)
    }
    else {

      let option = {
        id: val?.id,
        answer: key
      }
      setMultipleAns(option)
    }
  }

  const onAddCheckBox = (val, key) => {
    let checkAlready = checkBoxAns?.length > 0 ? checkBoxAns?.some(o1 => o1?.id == val?.id) : false
    if (checkAlready == true) {
      let filters = checkBoxAns?.find(o1 => o1?.id == val?.id)
      let alreadyInAswer = filters?.answer?.some(o1 => o1 == key?.toString())
      // console.log(" filter----CheckBoc:::== ", filters, "alreadyInAswer", alreadyInAswer)
      if (alreadyInAswer == true) {
        let otherData = checkBoxAns?.filter(o1 => o1?.id != val?.id)
        let arrFilter = filters?.answer?.filter(o1 => o1 != key?.toString())
        let option = {
          id: filters.id,
          answer: arrFilter
        }
        otherData = otherData.concat(option)
        // console.log(" otherData:== ", otherData, "option", option, "arrFilter", arrFilter)
        setCheckBoxAns(otherData)
      } else {
        let otherData = checkBoxAns?.filter(o1 => o1?.id != val?.id)
        let arr = filters.answer?.length > 0 ? filters.answer : []
        arr = arr.concat(key?.toString())
        let option = {
          id: filters.id,
          answer: arr
        }
        otherData = otherData.concat(option)
        // console.log(" otherData:== ", otherData, "option", option, "arr", arr)
        setCheckBoxAns(otherData)
      }

    } else {
      let arr = []
      arr.push(key?.toString())
      let option = {
        id: val?.id,
        answer: arr
      }
      // console.log("CheckBoc:::== ", option)
      setCheckBoxAns(checkBoxAns.concat(option))
    }
  }

  const typeShortAnswer = (message, id) => {
    setAnswerQuestion(message)
    if (message.length > 0) {
      let option = {
        id: id,
        answer: message
      }
      setAnswerShort(option)
    } else {
      setAnswerShort(null)
    }
  }

  const submit = () => {
    let questions = []

    multipleAns != null && questions.push(multipleAns)
    questions = checkBoxAns.length > 0 && questions.concat(checkBoxAns)
    answerShort != null && questions.push(answerShort)
    console.log("_____Nafeel____", questions)

    sendSubmit(questions, data?.id)
  }

  const addSuggestListList = (item, index) => {
    // const limitMember = item?.member?.length > 3 ? item?.member.slice(0, 3) : item?.member
    // console.log("_____Nafeel____", limitMember)
    return (
      <>
        <View key={index}
          style={Styles.itemQuestionWrapper}>
          {
            item?.type == "multiple" ?
              <>
                <Text style={Styles.questionHeading}>{item?.question}</Text>
                {
                  item?.options?.length > 0 && item?.options?.map((val, key) => {
                    return (
                      <>
                        <View style={{ flexDirection: 'row', marginTop: hp(1), marginBottom: hp(1) }}>
                          {
                            item?.answer && parseInt(item?.answer) == key ?
                              <TouchableOpacity >
                                <Image source={Images.circleFilled} style={Styles.iconCircle1} />
                              </TouchableOpacity> :
                              multipleAns?.answer == key ?
                                <TouchableOpacity onPress={() => { onAddChatPerson(item, key) }}>
                                  <Image source={Images.circleFilled} style={Styles.iconCircle1} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => { onAddChatPerson(item, key) }}>
                                  <Image source={Images.circle} style={Styles.iconCircle} />
                                </TouchableOpacity>
                          }
                          {/* <CheckBox
                            disabled={false}
                            value={multipleAns?.answer == key ? true : false}
                            onValueChange={() => { onAddChatPerson(val, key) }}
                            boxType="circle"
                            tintColors={multipleAns?.id == val?.id ? Colors.golden : "#DADFE6"}
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
                          /> */}
                          <View style={{ marginLeft: hp(1) }}>
                            <Text style={Styles.itemQuestionText}>{val}</Text>
                          </View>
                        </View>
                      </>
                    )
                  })
                }


              </>
              :
              item?.type == "checkbox" ?
                <>
                  <Text style={Styles.questionHeading}>{item?.question}</Text>
                  {
                    item?.options?.length > 0 && item?.options?.map((val, key) => {
                      return (
                        <>
                          <View style={{ flexDirection: 'row', marginTop: hp(1), marginBottom: hp(1) }}>
                            {
                              item?.answer && item?.answer?.length > 0 ?
                                <CheckBox
                                  disabled={false}
                                  value={parseInt(item?.answer?.[key]) == key ? true : false}
                                  // onChange={() => onAddCheckBox(item, key)}
                                  boxType='square'
                                  tintColors={parseInt(item?.answer?.[key]) == key ? Colors.golden : "#DADFE6"}
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
                                :

                                <CheckBox
                                  disabled={false}
                                  value={checkBoxAns?.answer == key ? true : false}
                                  onChange={() => onAddCheckBox(item, key)}
                                  boxType='square'
                                  tintColors={checkBoxAns?.id == item?.id ? Colors.golden : "#DADFE6"}
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
                            }
                            <View style={{ marginLeft: hp(1) }}>
                              <Text style={Styles.itemQuestionText}>{val}</Text>
                            </View>
                          </View>
                        </>
                      )
                    })
                  }
                </>
                :
                item?.type == "shortAnswer" ?
                  <>
                    <Text style={Styles.questionHeading}>{item?.question}</Text>

                    {
                      item?.answer ?
                        <View style={[Styles.emailWrapper, { borderColor: answerQuestion.length > 0 ? Colors.golden : Colors.lightGrey }]}>
                          <TextInput
                            style={Styles.emailInput}
                            value={item?.answer}
                            placeholder={"Type Your Answer"}
                            placeholderTextColor={Colors.textColor}
                            autoCapitalize='none'
                            editable={false}
                          />
                        </View>
                        :
                        <View style={[Styles.emailWrapper, { borderColor: answerQuestion.length > 0 ? Colors.golden : Colors.lightGrey }]}>
                          <TextInput
                            style={Styles.emailInput}
                            value={answerQuestion}
                            placeholder={"Type Your Answer"}
                            placeholderTextColor={Colors.textColor}
                            autoCapitalize='none'
                            onChangeText={(value) => {
                              typeShortAnswer(value, item?.id)

                            }}
                          />
                        </View>
                    }
                  </>
                  : null
          }
        </View>
      </>
    )
  }

  // console.log("-------", checkBoxAns, "multipleAns=== ", multipleAns)

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

              <Text style={Styles.touchViewprofileOne}>{"Questionarie"}</Text>
            </View>
            {
              currentUser == data?.sender ?
                <View style={{ width: hp(5) }} />
                :
                data?.answeredByMe == true ?
                  <View style={{ width: hp(5) }} />
                  :
                  <TouchableOpacity onPress={submit}
                    style={Styles.filterStyle}>
                    <Text style={Styles.plusIconText}>{"Save"}</Text>
                  </TouchableOpacity>
            }
          </View>
          <View style={Styles.seperator} />
          <View style={Styles.headerWrapper}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={Styles.tabText}>{"Due date"}</Text>
              <View style={Styles.inboxLine} />
              <Text style={Styles.tabDateText}>{moment(data?.dueDate).format('L')}</Text>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Image source={Images.Nudge} style={Styles.iconBottom1} />
              <Text style={Styles.dateBeforeText}>{"1 day before"}</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.seperator} />
          <View style={Styles.mainContent}>
            {/* <Text style={Styles.participateText}>{"Participants list"}</Text> */}
            {/* <View style={Styles.headerWrapper}>
              <Text style={Styles.questionHeading}>{"Question for questionary with single choice?"}</Text>
              <TouchableOpacity>
                <Image source={Images.Download} style={Styles.downloadIcon} />
              </TouchableOpacity>
            </View> */}
            <FlatList
              key={1}
              horizontal={false}
              scrollEnabled={false}
              numColumns={1}
              data={data?.questions}
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



{/* <View style={{ flexDirection: 'row', marginTop: hp(1) }}>
                {
                  limitMember?.length > 0 && limitMember?.map((val, index) => {
                    return (
                      <>
                        <TouchableOpacity key={index}>
                          <Image source={val?.pic} style={Styles.answerUser} />
                        </TouchableOpacity>
                      </>
                    )
                  })

                }
               <TouchableOpacity>
                  <Text style={Styles.moreText}>{"+4 more"}</Text>
                </TouchableOpacity> 
              </View> */}

{/* <Text style={Styles.itemPercentageText}>{item.percentage}</Text> */ }

