import React, { Component } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

class LoadingUser extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Image style={ styles.logo }
          resizeMode='contain'
          source={ require('../../assets/images/logo.png') }
        />
        <Text style={ styles.text }>loading...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#fff'
  },
  logo : {
    width : 120,
    height : 120,
  },
  text : {
    fontSize : 25,
    marginTop : 15,
    fontFamily : 'HelveticaNeueLight'
  },
})

export default LoadingUser
