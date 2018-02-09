import React from 'react'
import { StackNavigator, NavigationActions } from 'react-navigation'
import { Left, Search } from '../components/Header'

import LogIn from '../screens/auth/LogIn'
import WithPhone from '../screens/auth/WithPhone'
import VerifyPhone from '../screens/auth/VerifyPhone'
import PickAPassword from '../screens/auth/PickAPassword'
import PickAHandle from '../screens/auth/PickAHandle'
import RootTabs from '../navigation/Root'

const AuthStack = StackNavigator(
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
    },
    rootTabs : {
      screen : RootTabs,
      navigationOptions : {
        headerTitle : <Search />,
        headerStyle : {
          borderColor : '#cccccc',
          backgroundColor : '#eeeeee'
        }
      }
    }
  }, {
    navigationOptions : ({ navigation }) => ({
      headerStyle : {
        height : 45,
        backgroundColor : '#fff'
      },
      headerLeft : () => {
        return <Left onPress={ () => navigation.dispatch(NavigationActions.back()) } />
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
)

export default AuthStack
