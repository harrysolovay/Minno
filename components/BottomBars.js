import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'

import ComposeBar from './ComposeBar'
import TabBar from './TabBar'

class BottomBars extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showTabBar : true
    }
  }

  render() {
    return (
      <View>
        <KeyboardAccessoryView
          alwaysVisible={ true }
        >
          <ComposeBar
            onCompositionInputFocus={ this.onCompositionInputFocus }
            onCompositionInputBlur={ this.onCompositionInputBlur }
            onCompositionInputChange={ this.onCompositionInputChange }
          />
        </KeyboardAccessoryView>
        {
          this.state.showTabBar &&
            <TabBar
              goToPage={ this.props.goToPage }
              activeTab={ this.props.activeTab }
            />
        }
      </View>
    )
  }

  onCompositionInputFocus = () => {
    this.setState({ showTabBar : false })
    console.log('focused & hiding nav bar')
  }

  onCompositionInputBlur = () => {
    this.setState({ showTabBar : true })
    console.log('blurred & showing nav bar')
  }

  onCompositionInputChange = () => {
    console.log('text')
  }

}

const styles = StyleSheet.create({

})

export default BottomBars
