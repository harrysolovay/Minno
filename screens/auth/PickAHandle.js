import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import KeyboardCorrectlyAvoidingView from '../../components/KeyboardCorrectlyAvoidingView'
import AuthenticationField from '../../components/AuthenticationField'

class PickAHandle extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <KeyboardCorrectlyAvoidingView
        behavior='position'
      >
        <AuthenticationField
          placeholder='YOUR NAME'
          keyboardType='default'
          next={ this.focusNextField }
          autoFocus
        />
        <AuthenticationField ref={ (ref) => { this.handleFieldRef = ref } } fieldStyle={ styles.handleField }
          placeholder='A HANDLE'
          keyboardType='default'
          next={ this.submitHandle }
          hasNextButton
        />
      </KeyboardCorrectlyAvoidingView>
    )
  }

  focusNextField = () => {
    this.handleFieldRef.inputRef.focus()
  }

  submitHandle = () => {
    this.props.navigation.navigate('pickAPassword')
  }

}

const styles = StyleSheet.create({
  handleField : {
    marginTop : 7.5
  }
})

export default PickAHandle
