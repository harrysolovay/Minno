import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'

class Account extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView contentContainerStyle={ styles.container }>
        <Text>Account</Text>
      </ScrollView>
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

export default Account
