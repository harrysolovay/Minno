import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { inject, observer } from 'mobx-react'
import TabsScrollView from '../../components/TabsScrollView'
import { SettingsGroupsFromConfig } from '../../components/Settings'

@inject('userStore')
@observer
class Posts extends Component {

  render() {
    return (
      <TabsScrollView style={ styles.tabsScrollView }>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
        <Text>Leonard</Text>
      </TabsScrollView>
    )
  }

}

const styles = StyleSheet.create({
  tabsScrollView : {
    paddingBottom : 46
  }
})

export default Posts
