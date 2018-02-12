import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'

import ComposeBar from './ComposeBar'
import TabBar from './TabBar'

class BottomBars extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showTabBar : true,
      compositionBarVericalOffset : 0
    }
  }

  render() {
    return (
      <View>
        <KeyboardAccessoryView
          alwaysVisible={ true }
          bumperHeight={ 100 }
        >
          <ComposeBar style={{ position : 'absolute', bottom : this.state.compositionBarVericalOffset }}
            activeTab={ this.props.activeTab }
            onCompositionInputFocus={ this.onCompositionInputFocus }
            onCompositionInputBlur={ this.onCompositionInputBlur }
            onCompositionInputChange={ this.onCompositionInputChange }
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

  componentDidMount() {
    this.props.scrollValue.addListener((e) => {

      let y

      if(e.value <= 1)
        y = 0

      if(e.value > 1)
        y = -(46 - ( 46 * (2 - e.value)))

      this.setState({
        compositionBarVericalOffset : y
      })

    })
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

export default BottomBars
