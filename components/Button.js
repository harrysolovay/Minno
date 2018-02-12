import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'

class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={ this.props.style }
        { ...this.props }
        activeOpacity={ .875 }
      />
    )
  }
}

export default Button
