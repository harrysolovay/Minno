import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import Touchable from './Touchable'

class LogInButton extends Component {
  render() {
    return (
      <Touchable style={[ this.props.buttonStyle, styles.button ]}
        onPress={ this.props.onPress }
      >
        <Text style={[ this.props.textStyle, styles.text ]}>
          { this.props.text }
        </Text>
      </Touchable>
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

export default LogInButton
