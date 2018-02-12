import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

class LoadingUser extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Loading User</Text>
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
  }
})

export default LoadingUser
