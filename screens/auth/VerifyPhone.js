import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import AuthenticationField from '../../components/AuthenticationField'

class VerifyPhone extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <KeyboardAvoidingView style={ styles.container }
        behavior='position'
      >
        <AuthenticationField
          placeholder='VERIFICATION CODE'
          keyboardType='phone-pad'
          next={ this.verifyPhone }
          autoFocus
          hasNextButton
        />
      </KeyboardAvoidingView>
    )
  }

  verifyPhone = () => {
    this.props.navigation.navigate('pickAHandle')
  }

}

const styles = StyleSheet.create({
  container : {
    flexDirection : 'column',
    flex : 1,
    justifyContent : 'center'
  }
})

export default VerifyPhone
