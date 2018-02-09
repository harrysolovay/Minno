import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native'
import { RegularText } from './StyledText'

class AuthenticationButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[ this.props.buttonStyle, styles.button ]}
        onPress={ this.props.onPress }
        activeOpacity={ .8 }
      >
        <RegularText style={[ this.props.textStyle, styles.text ]}>
          { this.props.text }
        </RegularText>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button : {
    marginTop : 7.5,
    paddingTop : 19,
    paddingBottom : 12,
    alignItems : 'center',
    borderRadius : 5
  },
  text : {
    fontSize : 16,
  },
})

export default AuthenticationButton
