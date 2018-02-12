import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Button from './Button'

export class LeftButton extends Component {
  render() {
    return (
      <Button style={ styles.leftButton }
        onPress={ () => {
          console.log('pressed')
          this.props.onPress()
        }}
      >
        <Ionicons
          name='ios-arrow-round-back'
          size={ 40 }
        />
      </Button>
    )
  }
}

export class SearchButton extends Component {
  render() {
    return (
      <Button
        activeOpacity={ .8 }
        onPress={ this.props.onPress }
      >
        <Image style={ styles.searchIcon }
          resizeMode='contain'
          source={ require('../assets/images/search.png') }
        />
      </Button>
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
