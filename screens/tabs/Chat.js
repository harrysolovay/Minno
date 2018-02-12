import React, { Component } from 'react'
import { Text } from 'react-native'
import TabsScrollView from '../../components/TabsScrollView'

class Chat extends Component {

  render() {
    return (
      <TabsScrollView style={{ paddingBottom : 46 }}>
        <Text>Chat</Text>
      </TabsScrollView>
    )
  }

}

export default Chat
