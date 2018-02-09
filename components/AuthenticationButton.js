import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'

class AuthenticationButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[ this.props.buttonStyle, styles.button ]}
        onPress={ this.props.onPress }
        activeOpacity={ .8 }
      >
        <Text style={[ this.props.textStyle, styles.text ]}>
          { this.props.text }
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button : {
    marginTop : 7.5,
    paddingTop : 18,
    paddingBottom : 10,
    alignItems : 'center',
    borderRadius : 5
  },
  text : {
    fontSize : 18,
    fontFamily : 'HelveticaNeueLight'
  },
})

export default AuthenticationButton
