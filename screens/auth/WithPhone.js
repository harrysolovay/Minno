import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import KeyboardCorrectlyAvoidingView from '../../components/KeyboardCorrectlyAvoidingView'
import AuthenticationField from '../../components/AuthenticationField'

class WithPhone extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <KeyboardCorrectlyAvoidingView
        behavior='position'
      >
        <AuthenticationField
          placeholder='YOUR PHONE NUMBER'
          keyboardType='phone-pad'
          next={ this.submitNumber }
          autoFocus
          hasNextButton
        />
      </KeyboardCorrectlyAvoidingView>
    )
  }

  submitNumber = () => {
    this.props.navigation.navigate('verifyPhone')
  }

}

export default WithPhone
