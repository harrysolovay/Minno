import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export class RegularText extends Component {
  render() {
    return (
      <Text { ...this.props } style={[ this.props.style, styles.regular ]} />
    )
  }
}

export class TitleText extends Component {
  render() {
    return (
      <Text { ...this.props } style={[ this.props.style, styles.title ]} />
    )
  }
}

const styles = StyleSheet.create({
  regular : {
    fontFamily: 'HelveticaNeueRegular'
  },
  title : {
    fontFamily: 'FuturaLTBook'
  }
})
