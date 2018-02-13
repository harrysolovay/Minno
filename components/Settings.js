import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Touchable from './Touchable'

export class SettingsGroups extends Component {
  render() {
    return (
      <View style={[ this.props.style, styles.settingsGroups ]}
        { ...this.props }
      />
    )
  }
}

export class SettingsGroupsFromConfig extends Component {
  render() {
    return (
      <SettingsGroups>
        {
          this.props.config.map((settingsGroup, i) => {
            return (
              <SettingsGroup key={ i }>
                {
                  settingsGroup.map((settingsLink, j) => {
                    return (
                      <SettingsLink
                        key={ j }
                        { ...settingsLink }
                      />
                    )
                  })
                }
              </SettingsGroup>
            )
          })
        }
      </SettingsGroups>
    )
  }
}

export class SettingsGroup extends Component {
  render() {
    return (
      <View style={[ this.props.style, styles.settingsGroup ]}
        { ...this.props }
      />
    )
  }
}

export class SettingsLink extends Component {
  render() {
    return (
      <Touchable style={[ styles.settingsLinkContainer, { backgroundColor : this.props.backgroundColor } ]}
        onPress={ this.props.onPress }
      >
        <Text style={[ this.props.center ? styles.centerSettingsLinkText : null, styles.settingsLinkText ]}>{ this.props.text }</Text>
        { !this.props.center &&
          <View style={ styles.settingsLinkArrow } />
        }
      </Touchable>
    )
  }

}

const styles = StyleSheet.create({
  settingsGroups : {
    marginTop : 15,
    alignSelf : 'stretch'
  },
  settingsGroup : {
    marginTop : 15,
    marginRight : 15,
    marginLeft : 15,
    alignSelf: 'stretch',
    borderTopWidth : 1,
    borderRightWidth : 1,
    borderLeftWidth : 1,
    borderColor : '#dddddd'
  },
  settingsLinkContainer : {
    borderBottomWidth : 1,
    borderColor : '#dddddd',
    backgroundColor : '#fafafa',
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'center',
    alignSelf: 'stretch',
  },
  settingsLinkText : {
    fontFamily : 'HelveticaNeueLight',
    fontSize : 18,
    flexGrow : 1,
    paddingTop : 15,
    paddingRight : 14,
    paddingBottom : 8,
    paddingLeft : 14
  },
  centerSettingsLinkText : {
    textAlign : 'center'
  },
  settingsLinkArrow : {
    marginTop : 18,
    marginRight : 15,
    width : 7.5,
    height : 7.5,
    borderColor : '#000',
    borderTopWidth : .5,
    borderRightWidth : .5,
    transform : [{ rotate : '45deg' }]
  }
})
