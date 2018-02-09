import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import BottomBars from '../components/BottomBars'

import Chat from '../screens/tabs/Posts'
import Posts from '../screens/tabs/Posts'
import Capture from '../screens/tabs/Capture'
import Account from '../screens/tabs/Account'


class RootTabs extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollableTabView
        initialPage={ 1 }
        tabBarPosition={ 'bottom' }
        renderTabBar={ () => <BottomBars /> }
      >
        <Chat />
        <Posts />
        <Capture />
        <Account />
      </ScrollableTabView>
    )
  }

}

const styles = StyleSheet.create({

})

export default RootTabs
