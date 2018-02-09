import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import AuthenticationField from '../../components/AuthenticationField'

class WithPhone extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <KeyboardAvoidingView style={ styles.container }
        behavior='position'
      >
        <AuthenticationField
          placeholder='YOUR PHONE NUMBER'
          keyboardType='phone-pad'
          next={ this.submitNumber }
          autoFocus
          hasNextButton
        />
      </KeyboardAvoidingView>
    )
  }

  submitNumber = () => {
    this.props.navigation.navigate('verifyPhone')
  }

}

const styles = StyleSheet.create({
  container : {
    flexDirection : 'column',
    flex : 1,
    justifyContent : 'center'
  }
})

export default WithPhone
