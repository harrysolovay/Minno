import React, { Component } from 'react'
import { Text } from 'react-native'
import TabsScrollView from '../../components/TabsScrollView'

class Posts extends Component {

  render() {
    return (
      <TabsScrollView style={{ paddingBottom : 46 }}>
        <Text>Posts</Text>
      </TabsScrollView>
    )
  }

}

export default Posts
