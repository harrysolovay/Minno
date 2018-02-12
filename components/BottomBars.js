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
          bumperHeight={ 100 }
        >
          <ComposeBar style={{ bottom : this.props.compositionBarOffset }}
            activeTab={ this.props.activeTab }
            onCompositionInputFocus={ this.onCompositionInputFocus }
            onCompositionInputBlur={ this.onCompositionInputBlur }
          />
        </KeyboardAccessoryView>
        {
          this.state.showTabBar &&
            <TabBar ref={ (ref) => { this.tabBarRef = ref } }
              goToPage={ this.props.goToPage }
              activeTab={ this.props.activeTab }
            />
        }
      </View>
    )
  }

  onCompositionInputFocus = () => {
    this.setState({ showTabBar : false })
  }

  onCompositionInputBlur = () => {
    this.setState({ showTabBar : true })
  }

}

export default BottomBars
