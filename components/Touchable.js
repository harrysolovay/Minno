import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'

class Touchable extends Component {
  render() {
    return (
      <TouchableOpacity style={ this.props.style }
        { ...this.props }
        activeOpacity={ this.props.activeOpacity || .875 }
      />
    )
  }
}

export default Touchable
