import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import KeyboardCorrectlyAvoidingView from '../../components/KeyboardCorrectlyAvoidingView'
import CodeInput from 'react-native-code-input'
import Button from '../../components/Button'

class VerifyPhone extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <KeyboardCorrectlyAvoidingView
        behavior='position'
      >
        <View style={ styles.inputGroup }>
          <CodeInput
            ref={ (ref) => { this.input = ref } }
            activeColor='#4a90e2'
            inactiveColor='#000'
            autoFocus={ true }
            keyboardType='numeric'
            inputPosition='center'
            returnKeyType='next'
            space={ 7.5 }
            size={ 52 }
            codeLength={ 4 }
            onFulfill={ (code) => this.verifyPhone(code) }
            codeInputStyle={ styles.input }
          />
        </View>
        <Button style={ styles.resendCodeButton }
          onPress={ this.resendCode }
        >
          <Text style={ styles.resendCodeButtonText }>
            resend verification code
          </Text>
        </Button>
      </KeyboardCorrectlyAvoidingView>
    )
  }

  verifyPhone = (code) => {
    this.props.navigation.navigate('pickAHandle')
  }

  resendCode = () => {
    console.log('resending verification code')
  }

}

const styles = StyleSheet.create({
  inputGroup : {
    marginTop : 21,
    height : 52,
  },
  input : {
    top : -21,
    borderWidth : 1,
    fontFamily : 'FuturaLTBook',
    fontSize : 18
  },
  resendCodeButton : {
    marginTop : 15,
    alignItems : 'center'
  },
  resendCodeButtonText : {
    color : '#4a90e2',
    fontFamily : 'HelveticaNeueLight',
    fontSize : 20
  }
})

export default VerifyPhone
