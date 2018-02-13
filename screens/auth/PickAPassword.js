import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation'
import KeyboardCorrectlyAvoidingView from '../../components/KeyboardCorrectlyAvoidingView'
import AuthenticationField from '../../components/AuthenticationField'

class PickAPassword extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <KeyboardCorrectlyAvoidingView>
        <AuthenticationField
          placeholder='PASSWORD'
          keyboardType='default'
          secureTextEntry
          next={ this.focusNextField }
          autoFocus
        />
        <AuthenticationField ref={ (ref) => { this.handleFieldRef = ref } } fieldStyle={ styles.handleField }
          placeholder='PASSWORD AGAIN'
          keyboardType='default'
          secureTextEntry
          next={ this.completeRegistration }
          hasNextButton
        />
      </KeyboardCorrectlyAvoidingView>
    )
  }

  focusNextField = () => {
    this.handleFieldRef.inputRef.focus()
  }

  completeRegistration = () => {

  }

}

const styles = StyleSheet.create({
  handleField : {
    marginTop : 7.5
  }
})

export default PickAPassword
