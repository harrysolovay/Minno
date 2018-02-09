import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export class Left extends Component {
  render() {
    return (
      <TouchableOpacity style={ styles.leftButton }
        onPress={ this.props.onPress }
      >
        <Ionicons
          name='ios-arrow-round-back'
          size={ 40 }
        />
      </TouchableOpacity>
    )
  }
}

export class Search extends Component {
  render() {
    return (
      <TouchableOpacity style={ styles.searchButton }
        onPress={ this.props.onPress }
        activeOpacity={ .5 }
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
  searchButton : {

  },
  searchIcon : {
    width : 20,
    height : 20
  }
})
