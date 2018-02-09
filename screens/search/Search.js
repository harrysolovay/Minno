import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Image, Text, TouchableOpacity } from 'react-native'

class Search extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.searchBar }>
          <Image style={ styles.searchIcon }
            resizeMode='contain'
            source={ require('../../assets/images/search.png') }
          />
          <TextInput style={ styles.input }
            placeholder='search'
            autoFocus
          />
          <TouchableOpacity style={ styles.clearButton }
            activeOpacity={ .5 }
          >
            <Text style={ styles.clearButtonText }>clear</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    backgroundColor : '#fff'
  },
  searchBar : {
    flexDirection : 'row',
    backgroundColor : '#eeeeee',
    justifyContent : 'center',
    alignItems : 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flexDirection: 'row'
  },
  searchIcon : {
    width : 15,
    height : 15,
    marginTop : 1,
    marginLeft : 15,
    marginRight : 7.5,
    opacity : .25
  },
  input : {
    flexGrow : 1,
    paddingTop : 15,
    paddingBottom : 12,
    fontFamily : 'HelveticaNeueRegular',
    fontSize : 18
  },
  clearButton : {
    paddingTop : 7,
    paddingRight : 14
  },
  clearButtonText : {
    fontFamily : 'HelveticaNeueRegular',
    fontSize : 18
  }
})


export default Search
