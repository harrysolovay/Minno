import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { inject, observer } from 'mobx-react'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { NavigationActions } from 'react-navigation'
import LogInButton from '../../components/LogInButton'
import * as firebase from 'firebase'
import 'firebase/firestore'

@inject('userStore')
@observer
class Login extends Component {

  constructor(props) {
    super(props)
    if(props.userStore.isNewUser)
      props.navigation.navigate('pickAHandle')
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
          <LogInButton
            buttonStyle={{ backgroundColor : '#3b5998' }}
            textStyle={{ color : '#fff' }}
            text={ 'with Facebook' }
            onPress={ this.logInWithFacebook }
          />
          <LogInButton
            buttonStyle={{ backgroundColor : '#000' }}
            textStyle={{ color : '#fff' }}
            text={ 'with phone' }
            onPress={ this.logInWithPhone }
          />
          <LogInButton
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
    this.props.userStore.logInWithFacebook().then(() => {
      this.props.navigation.navigate('pickAHandle')
    })
  }

  logInWithPhone = () => {
    // this.props.navigation.navigate('withPhone')
    this.props.userStore.logOut()
  }

  continueAsGuest = () => {
    this.props.userStore.logInAsGuest()
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
