import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

class TextInputField extends Component {
  render() {
    return (
      <TextInput { ...this.props } style={[ this.props.style, styles.textInput ]} />
    )
  }

}

const styles = StyleSheet.create({
  textInput : {
    marginRight : 15,
    marginLeft : 15,
    borderWidth : 1,
    borderColor : '#000',
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'center',
    alignSelf: 'stretch',
    paddingTop : 15,
    paddingRight : 15,
    paddingBottom : 14,
    paddingLeft : 15,
    fontFamily : 'FuturaLTBook',
    fontSize : 16
  }
})

export default TextInputField
