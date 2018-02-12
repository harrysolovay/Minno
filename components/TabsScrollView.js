import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { HEADER_HEIGHT } from '../constants/Layout'

class TabsScrollView extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={[ this.props.style, styles.container ]}
        { ...this.props }
        showsVerticalScrollIndicator={ false }
      />
    )
  }
}

const styles = StyleSheet.create({
  container : {
    alignItems : 'center',
    backgroundColor : '#fff',
    paddingTop : HEADER_HEIGHT
  }
})

export default TabsScrollView
