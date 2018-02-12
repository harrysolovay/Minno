import { isIphoneX } from 'react-native-iphone-x-helper'

const HEADER_HEIGHT = isIphoneX() ? 89 : 65

export {
  HEADER_HEIGHT
}
