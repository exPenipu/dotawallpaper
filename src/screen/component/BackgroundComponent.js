import React from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native'

const { width, height } = Dimensions.get("window");

const BackgroundComponent = ({image}) => (
  <View style={{ backgroundColor: 'black', height: height, justifyContent: 'center', alignItems: 'center' }}>
    <Image
      style={{width, height}}
      source={image}
    />
  </View>
)

export default BackgroundComponent