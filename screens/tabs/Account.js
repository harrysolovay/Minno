import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import LogInButton from '../../components/LogInButton'
import { inject, observer } from 'mobx-react'

@inject('userStore')
@observer
class Account extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.ButtonContainer }>
          <LogInButton
            buttonStyle={{ backgroundColor : '#fff5f5' }}
            textStyle={{ color : '#000' }}
            text={ 'Log Out' }
            onPress={ this.logOut }
          />
        </View>
      </View>
    )
  }

  logOut = () => {
    this.props.userStore.logOut()
  }


}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'flex-start',
    backgroundColor : '#fff'
  },
  ButtonContainer : {
    flexDirection : 'column',
    paddingLeft : 15,
    paddingRight : 15,
    alignSelf : 'stretch'
  }
})

export default Account
