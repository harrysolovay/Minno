import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import AuthenticationButton from '../../components/AuthenticationButton'

class Login extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.logoAndTextContainer }>
          <Image style={ styles.logo }
            resizeMode='contain'
            source={ require('../../assets/images/logo.png') }
          />
          <Text style={ styles.title }>MINNO</Text>
          <Text style={ styles.subTitle }>now you see me, now you don&#x27;t</Text>
        </View>
        <View style={ styles.AuthenticationOptions }>
          <AuthenticationButton
            buttonStyle={{ backgroundColor : '#3b5998' }}
            textStyle={{ color : '#fff' }}
            text={ 'with Facebook' }
            onPress={ this.logInWithFacebook }
          />
          <AuthenticationButton
            buttonStyle={{ backgroundColor : '#000' }}
            textStyle={{ color : '#fff' }}
            text={ 'with phone' }
            onPress={ this.logInWithPhone }
          />
          <AuthenticationButton
            buttonStyle={{ backgroundColor : '#eee' }}
            textStyle={{ color : '#000' }}
            text={ 'continue as guest' }
            onPress={ this.continueAsGuest }
          />
        </View>
      </View>
    )
  }

  logInWithFacebook = () => {
    this.props.navigation.navigate('withPhone')
  }

  logInWithPhone = () => {
    this.props.navigation.navigate('withPhone')
  }

  continueAsGuest = () => {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index : 0,
        actions : [
          NavigationActions.navigate({
            routeName : 'rootTabs'
          })
        ]
      })
    )
  }

}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'flex-end',
    backgroundColor : '#fff'
  },
  logoAndTextContainer : {
    flexGrow : 1,
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center'
  },
  logo : {
    width : 120,
    height : 120,
  },
  title : {
    fontSize : 30,
    marginTop : 15,
    fontFamily : 'FuturaLTBook'
  },
  subTitle : {
    fontSize : 22,
    textAlign : 'center',
    width : 200,
    marginTop : 10,
    fontFamily : 'HelveticaNeueLight'
  },
  AuthenticationOptions : {
    flexDirection : 'column',
    paddingLeft : 15,
    paddingRight : 15,
    alignSelf : 'stretch',
    ...ifIphoneX({
      paddingBottom : 50
    }, {
      paddingBottom : 30
    })
  }
})

export default Login
