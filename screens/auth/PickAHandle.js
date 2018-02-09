import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import AuthenticationField from '../../components/AuthenticationField'

class PickAHandle extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <KeyboardAvoidingView style={ styles.container }
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
      </KeyboardAvoidingView>
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
  container : {
    flexDirection : 'column',
    flex : 1,
    justifyContent : 'center'
  },
  handleField : {
    marginTop : 7.5
  }
})

export default PickAHandle
