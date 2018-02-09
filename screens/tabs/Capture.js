import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

class Capture extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Capture</Text>
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

export default Capture
