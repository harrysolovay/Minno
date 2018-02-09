import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'

class ComposeBar extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={ styles.container }>
        <TextInput style={ styles.input }
          multiline={ true }
          placeholder={ 'post somethin\'' }
          onFocus={ this.props.onCompositionInputFocus }
          onChange={ this.props.onCompositionInputChange }
          onBlur={ this.props.onCompositionInputBlur }
        />
        <TouchableOpacity style={ styles.button }
          activeOpacity={ .5 }
          onPress={ () => { console.log('sent or submitted') } }
        >
          <Text style={ styles.buttonText }>
            post
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#eeeeee',
    justifyContent : 'center',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    flexDirection: 'row'
  },
  input : {
    flexGrow : 1,
    fontSize: 16,
    paddingTop : 12,
    paddingRight : 14,
    paddingBottom : 13,
    paddingLeft : 14
  },
  button : {
    paddingTop : 11,
    paddingRight : 14,
    paddingBottom : 14,
    paddingLeft : 14
  },
  buttonText : {
    fontSize : 16,
    color : '#4a90e2'
  }
})

export default ComposeBar
