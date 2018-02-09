import React, { Component } from 'react'
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'

const STATUS_BAR_HEIGHT = isIphoneX() ? 44 : Platform.OS == 'ios' ? 20 : 0
const HEADER_HEIGHT = 65
const KEYBOARD_AVOIDING_VIEW_PADDING_TOP = STATUS_BAR_HEIGHT + HEADER_HEIGHT

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
    paddingTop : KEYBOARD_AVOIDING_VIEW_PADDING_TOP
  }
})

export default KeyboardCorrectlyAvoidingView
