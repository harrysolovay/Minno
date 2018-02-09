import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export class LeftButton extends Component {
  render() {
    return (
      <TouchableOpacity style={ styles.leftButton } >
        <Ionicons
          name='ios-arrow-round-back'
          size={ 40 }
        />
      </TouchableOpacity>
    )
  }
}

export class SearchButton extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={ .8 }
        onPress={ this.props.onPress }
      >
        <Image style={ styles.searchIcon }
          resizeMode='contain'
          source={ require('../assets/images/search.png') }
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  leftButton : {
    marginLeft : 15
  },
  searchIcon : {
    width : 20,
    height : 20
  }
})
