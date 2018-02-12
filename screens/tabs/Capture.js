import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Camera, Permissions } from 'expo'
import Button from '../../components/Button'
import { Ionicons } from '@expo/vector-icons'

class Capture extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermissions : null,
      flashMode : Camera.Constants.FlashMode.off,
      type : Camera.Constants.Type.back
    }
  }

  render() {
    return this.state.hasCameraPermissions
      ? (
          <Camera ref={ (ref) => { this.camera = ref } } style={ styles.cameraContainer }
            type={ this.state.type }
            flashMode={ this.state.flashMode }
          >
            <View style={ styles.buttons }>

              <Button style={ styles.toggleFlashButton }
                onPress={ this.toggleFlash }
              >
                { this.state.flashMode === Camera.Constants.FlashMode.off
                  ? <Ionicons
                      name='ios-flash-outline'
                      size={ 40 }
                      color='#fff'
                    />
                  : <Ionicons
                      name='ios-flash'
                      size={ 40 }
                      color='#fff'
                    />
                }
              </Button>

              <Button style={ styles.captureButton }
                onPress={ this.takePicture }
              />

              <Button style={ styles.flipButton }
                onPress={ this.flip }
              >
                <Ionicons
                  name='ios-refresh'
                  size={ 40 }
                  color='#fff'
                />
              </Button>

            </View>
          </Camera>
        )
      : (
          <View style={ styles.permissionsContainer }>
            <Text>no camera permissions</Text>
          </View>
        )
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermissions : status === 'granted' })
  }

  takePicture = async() => {
    if(this.camera) {
      let pic = await this.camera.takePictureAsync({ base64 : true })
      console.log(pic)
    }
  }

  toggleFlash = () => {
    this.setState({
      flashMode : this.state.flashMode === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    }, () => {
      console.log(this.state.flashMode)
    })
  }

  flip = () => {
    this.setState({
      type : this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    })
  }

}

const styles = StyleSheet.create({
  cameraContainer : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'flex-end'
  },
  buttons : {
    marginBottom : 15,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  toggleFlashButton : {

  },
  captureButton : {
    width : 80,
    height : 80,
    borderRadius : 40,
    borderColor : '#fff',
    borderWidth : 1,
    marginBottom : 20
  },
  flipButton : {

  },
  permissionsContainer : {

  }
})

export default Capture
