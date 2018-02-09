import React from 'react'
import { StackNavigator, NavigationActions } from 'react-navigation'
import { LeftButton, SearchButton } from '../components/Header'

import LogIn from '../screens/auth/LogIn'
import WithPhone from '../screens/auth/WithPhone'
import VerifyPhone from '../screens/auth/VerifyPhone'
import PickAPassword from '../screens/auth/PickAPassword'
import PickAHandle from '../screens/auth/PickAHandle'
import RootTabs from '../navigation/Root'
import Search from '../screens/search/Search'

const HEADER_STYLE = {
  borderColor : '#cccccc',
  backgroundColor : '#eeeeee'
}

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
      navigationOptions : ({ navigation }) => ({
        headerTitle : () => {
          return <SearchButton onPress={ () => navigation.navigate('search') } />
        },
        headerStyle : HEADER_STYLE
      })
    },
    search : {
      screen : Search,
      navigationOptions : {
        headerTitle : <SearchButton />
      },
      headerStyle : HEADER_STYLE
    }
  }, {
    navigationOptions : ({ navigation }) => ({
      headerStyle : HEADER_STYLE,
      headerLeft : () => {
        return <LeftButton onPress={ () => navigation.dispatch(NavigationActions.back()) } />
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
