import React, { useState } from 'react';
import {
  Image,
  View,
  ImageBackground,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';
import Modal from 'react-native-modal';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import CheckBox from '@react-native-community/checkbox';
import ToggleSwitch from 'toggle-switch-react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


const CreateQuestionare = (props) => {
  const { open, close } = props
  const [title, setTitle] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [assigned, setAssigned] = useState("")
  const [questionTitle, setQuestionTitle] = useState("")
  const [questionType, setQuestionType] = useState("")


  const [nudgeToogle, setNudgeToogle] = useState(false)
  const [answerToogle, setAnswerToogle] = useState(false)


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
          {/* header */}
          <View style={Styles.headerWrapper}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={close}>
                <Image source={Images.close} style={Styles.Setimage} />
              </TouchableOpacity>

              <Text style={Styles.touchViewprofileOne}>{"Questionarie"}</Text>
            </View>
            <TouchableOpacity style={Styles.filterStyle}>
              <Text style={Styles.plusIconText}>{"Save"}</Text>
            </TouchableOpacity>
          </View>
          {/* header end*/}
          <View style={Styles.seperator} />

          {/* Title */}
          <View style={Styles.emailWrapper}>
            <Text style={Styles.tabText}>{"Title"}</Text>
            <View style={Styles.inboxLine} />
            <TextInput
              style={Styles.emailInput}
              value={title}
              placeholder={"Enter questionarie title"}
              placeholderTextColor={Colors.textColor}
              autoCapitalize='none'
              onChangeText={(value) => {
                setTitle(value)
              }}
            />
            <Text style={Styles.templeteText}>{"Templates"}</Text>
          </View>

          <View style={Styles.seperator} />
          {/* Due Date */}
          <View style={Styles.emailWrapper}>
            <Text style={Styles.tabText}>{"Due date"}</Text>
            <View style={Styles.inboxLine} />
            <TextInput
              style={Styles.emailInput}
              value={dueDate}
              placeholder={"06/06/21"}
              placeholderTextColor={Colors.textColor}
              autoCapitalize='none'
              onChangeText={(value) => {
                setDueDate(value)
              }}
            />
            <TouchableOpacity>
              <Image source={Images.calender} style={Styles.searchStyle} />
            </TouchableOpacity>
          </View>
          <View style={Styles.seperator} />
          {/* Assigned */}
          <View style={Styles.emailWrapper}>
            <Text style={Styles.tabText}>{"Assigned "}</Text>
            <View style={Styles.inboxLine} />
            <TextInput
              style={Styles.emailInput}
              value={assigned}
              placeholder={"All"}
              placeholderTextColor={Colors.textColor}
              autoCapitalize='none'
              onChangeText={(value) => {
                setAssigned(value)
              }}
            />
            <TouchableOpacity>
              <Image source={Images.dropDown} style={Styles.searchStyle} />
            </TouchableOpacity>
          </View>
          <View style={Styles.seperator} />

          <View style={Styles.toogleContainer}>
            <View style={Styles.toogleInner}>
              <ToggleSwitch
                isOn={nudgeToogle}
                onColor={Colors.golden}
                offColor="#AEADBD"
                size="small"
                onToggle={isOn => setNudgeToogle(isOn)}
              />
              <Text style={Styles.listText}>{"Nudge"}</Text>
            </View>
            <View style={Styles.toogleInner1}>
              <ToggleSwitch
                isOn={answerToogle}
                onColor={Colors.golden}
                offColor="#AEADBD"
                size="small"
                onToggle={isOn => setAnswerToogle(isOn)}
              />
              <Text style={Styles.listText}>{"Show answers"}</Text>
            </View>
          </View>
          <ScrollView>
            <View style={Styles.scrollWrapper}>
              <Text style={Styles.questionText}>{"Question"}</Text>

              <View style={Styles.seperator} />

              {/* Title */}
              <View style={Styles.emailWrapper}>
                <Text style={Styles.tabText}>{"Question title"}</Text>
                <View style={Styles.inboxLine} />
                <TextInput
                  style={Styles.emailInput}
                  value={questionTitle}
                  placeholder={"Type your question"}
                  placeholderTextColor={Colors.textColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    setQuestionTitle(value)
                  }}
                />
              </View>
              <View style={Styles.seperator} />
              {/* Question type */}
              <View style={Styles.emailWrapper}>
                <Text style={Styles.tabText}>{"Question type"}</Text>
                <View style={Styles.inboxLine} />
                <TextInput
                  style={Styles.emailInput}
                  value={questionType}
                  placeholder={"Select question type"}
                  placeholderTextColor={Colors.textColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    setQuestionType(value)
                  }}
                />
                <TouchableOpacity>
                  <Image source={Images.dropDown} style={Styles.searchStyle} />
                </TouchableOpacity>
              </View>
              <View style={Styles.seperator} />

              <TouchableOpacity
                // onPress={() => {
                //   this.props.navigation.navigate('ChatFeature', {
                //     screen: 'NewChat',
                //   })
                // }}
                style={Styles.filterStyle1}>
                <Image source={Images.iconPlus} style={Styles.plusIcon} />
                <Text style={Styles.plusIconText1}>{"Add question"}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

        </View>
      </Modal>
    </>
  );
}
export default CreateQuestionare;