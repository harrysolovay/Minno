import React, { Component } from 'react'
import { Text } from 'react-native'
import { inject, observer } from 'mobx-react'
import TabsScrollView from '../../components/TabsScrollView'
import Touchable from '../../components/Touchable'
import { SettingsGroupsFromConfig } from '../../components/Settings'



@inject('userStore')
@observer
class Posts extends Component {

  render() {
    return (
      <TabsScrollView>
        <SettingsGroupsFromConfig
          config={[
            [
              {
                text : 'invite friends',
                onPress : () => {
                  console.log('invite friends')
                }
              },
              {
                text : 'get help / give feedback',
                onPress : () => {
                  console.log('get help / give feedback')
                }
              },
              {
                text : 'the website',
                onPress : () => {
                  console.log('the website')
                }
              },
              {
                text : 'about',
                onPress : () => {
                  console.log('about')
                }
              },
              {
                text : 'terms & policy',
                onPress : () => {
                  console.log('terms & policy')
                }
              }
            ],
            [
              {
                text : 'log out',
                onPress : this.props.userStore.logOut,
                center : true,
                backgroundColor : '#fff5f5'
              }
            ]
          ]}
        />
      </TabsScrollView>
    )
  }

}

export default Posts
