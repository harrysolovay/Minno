import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { inject, observer } from 'mobx-react'
import KeyboardCorrectlyAvoidingView from '../../components/KeyboardCorrectlyAvoidingView'
import AuthenticationField from '../../components/AuthenticationField'

@inject('userStore')
@observer
class PickAHandle extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <KeyboardCorrectlyAvoidingView
        behavior='position'
      >
        <AuthenticationField ref={ (ref) => { this.nameFieldRef = ref } }
          placeholder='MORTY THE MINNO'
          keyboardType='default'
          next={ this.focusNextField }
          autoFocus
        />
        <AuthenticationField ref={ (ref) => { this.handleFieldRef = ref } } fieldStyle={ styles.handleField }
          placeholder='CATFISH'
          keyboardType='default'
          next={ this.saveNameAndHandle }
          hasNextButton
        />
      </KeyboardCorrectlyAvoidingView>
    )
  }

  focusNextField = () => {
    this.handleFieldRef.inputRef.focus()
  }

  saveNameAndHandle = () => {
    Promise.all([
      this.props.userStore.saveNameAndHandle(
        this.nameFieldRef.getValue(),
        this.handleFieldRef.getValue()
      ),
      this.props.userStore.saveAsBeingNoLongerNew()
    ]).then(() => this.props.navigation.navigate('root'))
  }

}

const styles = StyleSheet.create({
  handleField : {
    marginTop : 7.5
  }
})

export default PickAHandle
