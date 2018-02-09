import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation'
import AuthenticationField from '../../components/AuthenticationField'

class PickAPassword extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <KeyboardAvoidingView style={ styles.container }
        behavior='position'
      >
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
      </KeyboardAvoidingView>
    )
  }

  focusNextField = () => {
    this.handleFieldRef.inputRef.focus()
  }

  completeRegistration = () => {
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
    flexDirection : 'column',
    flex : 1,
    justifyContent : 'center'
  },
  handleField : {
    marginTop : 7.5
  }
})

export default PickAPassword
