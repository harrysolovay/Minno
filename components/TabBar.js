import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { Ionicons } from '@expo/vector-icons'
import Touchable from './Touchable'

class TabBar extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[ styles.tabs ]}>
        {
          [
            {
              ioniconName : 'ios-chatbubbles-outline',
              iconSize : 30
            },
            {
              ioniconName : 'ios-disc-outline',
              iconSize : 30
            },
            {
              ioniconName : 'ios-aperture-outline',
              iconSize : 30
            },
            {
              ioniconName : 'ios-contact-outline',
              iconSize : 30
            }
          ].map((tab, i) => {
            return (
              <Touchable key={i} style={styles.tab}
                activeOpacity={ .5 }
                onPress={ () => this.goToPage(i) }
              >
                <Ionicons
                  name={ tab.ioniconName }
                  size={ tab.iconSize }
                  color={ this.props.activeTab === i ? '#4a90e2' : '#000000' }
                />
              </Touchable>
            )
          })
        }
      </View>
    )
  }

  goToPage(i) {
    this.props.goToPage(i)
  }

}

const styles = StyleSheet.create({
  tab : {
    paddingTop : 8,
    paddingBottom : 4,
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
  },
  tabs : {
    flexDirection : 'row',
    borderTopWidth : 1,
    borderBottomWidth : 1,
    borderColor : '#cccccc',
    backgroundColor : '#eeeeee',
    ...ifIphoneX({
      paddingBottom : 20
    })
  }
})

export default TabBar
