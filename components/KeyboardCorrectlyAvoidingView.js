import React, { Component } from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const HEADER_HEIGHT = 45 + getStatusBarHeight()

class KeyboardCorrectlyAvoidingView extends Component {
  render() {
    return (
      <KeyboardAvoidingView { ...this.props } style={[ this.props.style, styles.container ]} />
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flexDirection : 'column',
    flex : 1,
    justifyContent : 'center',
    paddingTop : HEADER_HEIGHT
  }
})

export default KeyboardCorrectlyAvoidingView
