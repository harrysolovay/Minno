import React, { Component } from 'react'
import { StyleSheet, Modal, View, TextInput, Image, Text, TouchableOpacity } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import Button from '../../components/Button'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      query : ''
    }
  }

  render() {
    return (
      <Modal style={ styles.container }
        visible={ this.props.isOpen }
        animationType='slide'
        onRequestClose={ this.props.close }
      >
        <View style={ styles.searchBar }>
          <Image style={ styles.searchIcon }
            resizeMode='contain'
            source={ require('../../assets/images/search.png') }
          />
          <TextInput ref={ (ref) => this.searchInput = ref } style={ styles.input }
            onChangeText={ (text) => this.setState({ query : text }) }
            placeholder='search'
            autoFocus
          />
          <Button style={ styles.clearButton }
            onPress={ this.state.query === '' ? this.props.close : this.clear }
          >
            <Text style={ styles.clearButtonText }>
              { this.state.query === '' ? 'close' : 'clear' }
            </Text>
          </Button>
        </View>
        <View style={ styles.results }>
          { this.state.query === ''
            ? <Text>suggestions</Text>
            : <Text>results</Text>
          }
        </View>
      </Modal>
    )
  }

  clear = () => {
    this.searchInput.clear()
    this.setState({ query : '' })
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
    ...ifIphoneX({
      paddingTop : 44
    }, {
      paddingTop : 20
    })
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
  },
  results : {
    flexDirection : 'column',
    justifyContent : 'flex-start',
    alignItems : 'center'
  }
})


export default Search
