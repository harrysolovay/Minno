import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'

class ComposeBar extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[ this.props.style, styles.container ]}>
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
    paddingTop : 14,
    paddingRight : 14,
    paddingBottom : 9,
    paddingLeft : 14,
    fontFamily : 'HelveticaNeueRegular',
    fontSize : 18
  },
  button : {
    paddingTop : 14,
    paddingRight : 14,
    paddingBottom : 9,
    paddingLeft : 14
  },
  buttonText : {
    fontSize : 18,
    color : '#4a90e2',
    fontFamily : 'HelveticaNeueRegular',
  }
})

export default ComposeBar
