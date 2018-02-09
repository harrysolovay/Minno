import React, { Component } from 'react'
import { AppLoading, Font } from 'expo'

import AuthStack from './navigation/Auth'
import RootTabs from './navigation/Root'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded : false,
      isAuthenticated : false
    }
  }

  render() {

    if(! this.state.isLoaded) {
      return (
        <AppLoading
          startAsync={ this.load }
          onError={ e => console.error(e) }
          onFinish={ () => {
            this.setState({
              isLoaded : true
            })
          }}
        />
      )
    }

    if(this.state.isAuthenticated)
      return <RootTabs />
    else
      return <AuthStack />

  }

  async load() {
    return Promise.all([
      Font.loadAsync({
        HelveticaNeueRegular : require('./assets/fonts/HelveticaNeue-Regular.ttf'),
        FuturaLTBook : require('./assets/fonts/FuturaLT-Book.ttf')
      })
    ])
  }

}

export default App
