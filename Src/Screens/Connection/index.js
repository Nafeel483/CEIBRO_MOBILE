import React, { Component } from 'react'
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Images from '../../Styles/Images'
import Colors from '../../Styles/Colors';
import Styles from './Styles'
import { connect } from 'react-redux';
import { getMyAllInvites, getMyAllConnections } from '../../Redux/Actions/users';
import * as API from '../../Redux/Selectors/AllApi';
import Loader from '../../Components/Loader';
import InviteUser from '../../Components/InviteUser'
import { showMessage, hideMessage } from "react-native-flash-message";


class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      inviteOpen: false
    }
  }
  // componentDidMount = () => {
  //   // let accessToken = this.props.auth?.userLogin?.tokens?.access?.token

  //   let allInvites = this.props.user?.allInvites ? this.props.user?.allInvites : []
  //   console.log("allInvites", allInvites)
  //   this.setState({ allInvites: allInvites })
  // }

  accpetUser = (inviteId) => {
    let accepted = true
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    this.setState({ loading: true })
    API.acceptRejectApi(inviteId, accepted, token)
      .then((res) => {
        console.log("acceptRejectApi Response api====>", res)
        this.props.getMyAllInvites(token)
        this.props.getMyAllConnections(token)
        this.setState({ loading: false })

      })
      .catch((error) => {
        console.log("acceptRejectApi api error", error)
        this.setState({ loading: false })
      });
  }
  rejectUser = (inviteId) => {
    let accepted = false
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    this.setState({ loading: true })
    API.acceptRejectApi(inviteId, accepted, token)
      .then((res) => {
        console.log("acceptRejectApi Response api====>", res)
        this.props.getMyAllInvites(token)
        this.props.getMyAllConnections(token)
        this.setState({ loading: false })

      })
      .catch((error) => {
        console.log("acceptRejectApi api error", error)
        this.setState({ loading: false })
      });
  }

  allAcceptReject = (accepted) => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    this.setState({ loading: true })
    API.allAcceptRejectApi(accepted, token)
      .then((res) => {
        console.log("allAcceptRejectApi Response api====>", res)
        this.props.getMyAllInvites(token)
        this.props.getMyAllConnections(token)
        this.setState({ loading: false })

      })
      .catch((error) => {
        console.log("allAcceptRejectApi api error", error)
        this.setState({ loading: false })
      });
  }
  toogleInvite = () => {
    this.setState({ inviteOpen: !this.state.inviteOpen })
  }

  sendInvite = (email) => {
    let token = this.props.auth?.userLogin?.tokens?.access?.token
    const data = {
      email: email
    }
    this.setState({ loading: true })
    API.InviteUserApi(data, token)
      .then((res) => {
        console.log("InviteUserApi Response api====>", res)
        this.props.getMyAllInvites(token)
        this.props.getMyAllConnections(token)
        this.setState({
          loading: false,
          inviteOpen: false
        })

        showMessage({
          message: "Invitation Send Successfully",
          description: "Invitation Send Successfullyy",
          type: "default",
          backgroundColor: "#009900", // background color
          color: "white" // text color
        })

      })
      .catch((error) => {
        console.log("InviteUserApi api error", error)
        this.setState({ loading: false })
      });
  }

  render() {
    const { loading, inviteOpen } = this.state

    let allInvites = this.props.user?.allInvites ? this.props.user?.allInvites : []
    let allConnections = this.props.user?.allConnections ? this.props.user?.allConnections : []

    return (
      <>
        <SafeAreaView style={Styles.MainContainer}>
          <View style={Styles.contain} >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={Images.close} style={Styles.Setimage} />
            </TouchableOpacity >
            <Text style={Styles.touchViewprofileOne}>{"Connection"}</Text>
            <TouchableOpacity onPress={this.toogleInvite}
              style={Styles.touchwrite}>
              <Text style={Styles.btn}>{"Invite"}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={Styles.line}
          />

          {
            allInvites?.length > 0 ?
              <>
                <View style={Styles.viewAccept}>
                  <TouchableOpacity onPress={() => { this.allAcceptReject(true) }}
                    style={Styles.accepttouch}>
                    <Text style={Styles.acceptall}>{"Accept all"}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.allAcceptReject(false) }}
                    style={Styles.touchdecline}>
                    <Text style={Styles.textDecline} >{"Decline all"}</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={Styles.line}
                />
              </> : null
          }
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollWrapper}>
              {
                allInvites?.length > 0 ?
                  allInvites?.map((value, index) => {
                    return (
                      <>
                        {
                          value?.status == "pending" ?
                            <>
                              <View>
                                <View style={Styles.viewMain}>
                                  <View style={{ flexDirection: 'row' }}>
                                    {
                                      value?.from?.profilePic ?
                                        <Image source={{ uri: value?.from?.profilePic }} style={Styles.imgstyle} />
                                        :
                                        <View style={Styles.userProfileWrapper}>
                                          <Text style={Styles.userProfileText}>{`${value?.from?.firstName?.[0]?.toUpperCase()}${value?.from?.surName?.[0]?.toUpperCase()}`}</Text>
                                        </View>
                                    }

                                    <View style={Styles.subView}>
                                      <Text style={Styles.textSubView}>{`${value?.from?.firstName} ${value?.from?.surName} `}</Text>
                                      <Text style={Styles.companyName}>{value?.from?.email}</Text>
                                    </View>
                                  </View>
                                  <View style={Styles.viewone}>
                                    <TouchableOpacity onPress={() => { this.accpetUser(value?._id) }}
                                      style={Styles.touchtwo}>
                                      <Text style={Styles.btnone}>{"Accept"}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { this.rejectUser(value?._id) }}>
                                      <Image source={Images.Decline} style={Styles.touchdeclinestyle} />
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                              <View
                                style={Styles.line}
                              />
                            </>
                            : null
                        }
                      </>
                    )
                  }) : null
              }


              {
                allConnections?.length > 0 ?
                  allConnections.map((value, index) => {
                    return (
                      <>
                        <View>
                          <View style={Styles.viewMain}>
                            <View style={{ flexDirection: 'row' }}>
                              {
                                value?.from?.profilePic ?
                                  <Image source={{ uri: value?.from?.profilePic }} style={Styles.imgstyle} />
                                  :
                                  <View style={Styles.userProfileWrapper}>
                                    <Text style={Styles.userProfileText}>{`${value?.from?.firstName?.[0]?.toUpperCase()}${value?.from?.surName?.[0]?.toUpperCase()}`}</Text>
                                  </View>
                              }

                              <View style={Styles.subView}>
                                <Text style={Styles.textSubView}>{`${value?.from?.firstName} ${value?.from?.surName} `}</Text>
                                <Text style={Styles.companyName}>{value?.from?.email}</Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </>
                    )
                  })

                  : null
              }



            </View>
          </ScrollView>
          {
            inviteOpen == true ?
              <InviteUser
                open={inviteOpen}
                close={this.toogleInvite}
                submit={this.sendInvite}
              />
              : null
          }

          {loading ? <Loader /> : null}
        </SafeAreaView>

      </>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMyAllInvites: (user) => dispatch(getMyAllInvites(user)),
    getMyAllConnections: (user) => dispatch(getMyAllConnections(user)),

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connection);
