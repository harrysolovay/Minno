import React, { Component } from 'react'
import { Text } from 'react-native'
import LogInButton from '../../components/LogInButton'
import { inject, observer } from 'mobx-react'
import TabsScrollView from '../../components/TabsScrollView'

@inject('userStore')
@observer
class Posts extends Component {

  render() {
    return (
      <TabsScrollView>
        <LogInButton
          buttonStyle={{ backgroundColor : '#fff5f5' }}
          textStyle={{ color : '#000' }}
          text={ 'Log Out' }
          onPress={ this.logOut }
        />
      </TabsScrollView>
    )
  }

  logOut = () => {
    this.props.userStore.logOut()
  }

}

export default Posts
