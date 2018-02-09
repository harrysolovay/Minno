import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { isIphoneX } from 'react-native-iphone-x-helper'

class SearchBar extends Component {
  render() {
    return (
      <View style={[ this.props.headerStyle, styles.container ]}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    height : 45
  }
})

export default SearchBar
