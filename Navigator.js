import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import LoadingUser from './screens/auth/LoadingUser'
import Tabs from './screens/Tabs'

import { StackNavigator, NavigationActions } from 'react-navigation'
import { LeftButton } from './components/Header'

import LogIn from './screens/auth/LogIn'
import WithPhone from './screens/auth/WithPhone'
import VerifyPhone from './screens/auth/VerifyPhone'
import PickAPassword from './screens/auth/PickAPassword'
import PickAHandle from './screens/auth/PickAHandle'

import { HEADER_HEIGHT } from './constants/Layout'

const HEADER_STYLE = {
  borderColor : '#cccccc',
  backgroundColor : '#eeeeee'
}

const options = () => {
  return {
    navigationOptions : ({ navigation }) => ({
      headerStyle : HEADER_STYLE,
      headerLeft : () => {
        return (
          <LeftButton
            onPress={ () => navigation.dispatch(NavigationActions.back()) }
          />
        )
      },
      headerTitleStyle : {
        fontSize : 18,
        fontFamily : 'FuturaLTBook'
      }
    }),
    cardStyle : {
      backgroundColor : '#fff'
    }
  }
}



const Root = StackNavigator(
  {
    tabs : {
      screen : Tabs,
      navigationOptions : {
        header : null
      }
    }
  }, options()
)



const Authentication = StackNavigator(
  {
    logIn : {
      screen : LogIn,
      navigationOptions : {
        title : 'LOG IN OR SIGN UP'
      }
    },
    withPhone : {
      screen : WithPhone,
      navigationOptions : {
        title : 'WITH PHONE'
      }
    },
    verifyPhone : {
      screen : VerifyPhone,
      navigationOptions : {
        title : 'VERIFY NUMBER'
      }
    },
    pickAPassword : {
      screen : PickAPassword,
      navigationOptions : {
        title : 'PICK A PASSWORD'
      }
    },
    pickAHandle : {
      screen : PickAHandle,
      navigationOptions : {
        title : 'PICK A HANDLE'
      }
    }
  }, options()
)



@inject('userStore')
@observer
class Navigator extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return this.props.userStore.loaded
      ? this.props.userStore.user !== null && this.props.userStore.isNewUser == false
        ? <Root />
        : <Authentication />
      : <LoadingUser />
  }

}

export default Navigator
