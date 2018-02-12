import React, { Component } from 'react'
import { View } from 'react-native'
import { inject, observer } from 'mobx-react'

import { HEADER_HEIGHT } from '../constants/Layout'

import ScrollableTabView from 'react-native-scrollable-tab-view'
import { SearchHeader } from '../components/Header'
import BottomBars from '../components/BottomBars'

import Chat from './tabs/Chat'
import Posts from './tabs/Posts'
import Capture from './tabs/Capture'
import Account from './tabs/Account'

import Search from './search/Search'

@inject('userStore')
@observer
class Tabs extends Component {

  constructor(props) {
    super(props)
    const INITIAL_SCROLL_X = props.userStore.launchToCapture ? 2 : 1
    this.state = {
      searchOpen : false,
      searchHeaderOffset : this.calculateSearchHeaderOffset(INITIAL_SCROLL_X),
      compositionBarOffset : this.calculateCompositionBarOffset(INITIAL_SCROLL_X)
    }
  }

  render() {
    return (
      <View style={{ flex : 1 }}>
        <SearchHeader
          offset={ this.state.searchHeaderOffset }
          onPress={ this.openSearch }
        />
        <ScrollableTabView
          initialPage={ this.props.userStore.launchToCapture ? 2 : 1 }
          tabBarPosition={ 'bottom' }
          renderTabBar={ () => {
            return (
              <BottomBars
                compositionBarOffset={ this.state.compositionBarOffset }
              />
            )
          }}
          onScroll={ (scrollX) => {
            this.setState({
              searchHeaderOffset : this.calculateSearchHeaderOffset(scrollX),
              compositionBarOffset : this.calculateCompositionBarOffset(scrollX)
            })
          }}
        >
          <Chat />
          <Posts />
          <Capture />
          <Account />
        </ScrollableTabView>
        <Search
          isOpen={ this.state.searchOpen }
          close={ this.closeSearch }
        />
      </View>
    )
  }

  calculateSearchHeaderOffset(scrollX) {
    let offset
    if(scrollX <= 1)
      offset = 0
    if(scrollX > 1 && scrollX < 2)
      offset = -(HEADER_HEIGHT - ( HEADER_HEIGHT * (2 - scrollX)))
    if(scrollX >= 2)
      offset = -(HEADER_HEIGHT - ( HEADER_HEIGHT * (scrollX - 2)))
    return offset
  }

  calculateCompositionBarOffset(scrollX) {
    let offset
    if(scrollX <= 1)
      offset = 0
    if(scrollX > 1)
      offset = -(46 - ( 46 * (2 - scrollX)))
    return offset
  }

  openSearch = () => {
    this.setState({
      searchOpen : true
    })
  }

  closeSearch = () => {
    this.setState({
      searchOpen : false
    })
  }

}

export default Tabs
