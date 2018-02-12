import React, { Component } from 'react'
import { AppLoading, Font } from 'expo'
import { Provider } from 'mobx-react'
import stores from './stores'
import Navigator from './Navigator'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded : false
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

    return (
      <Provider { ...stores }>
        <Navigator />
      </Provider>
    )

  }

  async load() {
    return Promise.all([
      Font.loadAsync({
        HelveticaNeueLight : require('./assets/fonts/HelveticaNeue-Light.ttf'),
        HelveticaNeueRegular : require('./assets/fonts/HelveticaNeue-Regular.ttf'),
        HelveticaNeueBold : require('./assets/fonts/HelveticaNeue-Bold.ttf'),
        FuturaLTBook : require('./assets/fonts/FuturaLT-Book.ttf')
      })
    ])
  }

}

export default App
