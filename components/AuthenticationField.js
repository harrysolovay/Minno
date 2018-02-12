import React, { Component } from 'react'

import { StyleSheet, Text, View, TextInput } from 'react-native'
import Button from './Button'
import { Ionicons } from '@expo/vector-icons'

export default class AuthenticationField extends Component {

  constructor(props) {
    super(props)
    state = {
      value : props.value ? props.value : ''
    }
  }

  render() {
    return (
      <View style={[ this.props.fieldStyle, styles.inputWrapper ]}>
        <TextInput ref={ (ref) => { this.inputRef = ref } } style={[ this.props.inputStyle, styles.input ]}
          placeholder={ this.props.placeholder }
          keyboardType={ this.props.keyboardType }
          autoFocus={ this.props.autoFocus }
          secureTextEntry={ this.props.secureTextEntry }
          returnKeyType={ 'next' }
          onChangeText={ (text) => this.setState({ value : text }) }
          onSubmitEditing={ this.props.next }
          value={ this.props.value }
        />
        { this.props.hasNextButton &&
          <Button style={ styles.nextButton }
            onPress={ this.props.next }
          >
            <Ionicons
              name='ios-arrow-round-forward'
              size={ 40 }
              color='#4a90e2'
            />
          </Button>
        }
      </View>
    )
  }

  getValue() {
    return this.state.value
  }

}

const styles = StyleSheet.create({
  inputWrapper : {
    marginRight : 15,
    marginLeft : 15,
    borderWidth : 1,
    borderColor : '#000',
    flexDirection : 'row',
    justifyContent : 'center'
  },
  input : {
    paddingTop : 15,
    paddingRight : 15,
    paddingBottom : 14,
    paddingLeft : 15,
    fontFamily : 'FuturaLTBook',
    fontSize : 16,
    flexGrow : 1
  },
  nextButton : {
    paddingTop : 5,
    paddingRight : 15
  }
})
