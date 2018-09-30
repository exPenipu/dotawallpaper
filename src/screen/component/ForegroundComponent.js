import React from 'react'
import {
  View,
  Text,
  Dimensions,
  Linking,
  TouchableOpacity,
} from 'react-native'
import WallPaperManager from 'react-native-wallpaper-manager'

const { width, height } = Dimensions.get('window')

export default class ForegroundComponent extends React.Component {
  constructor() {
    super()
    this.setWallpaper.bind(this)
  }
  download() {
    Linking.openURL(this.props.url)
  }
  setWallpaper() {
    WallPaperManager.setWallpaper(this.props.image, (response) => {
      if(response.status == 'success') alert('success')
    })
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
        <View style={{
          width: width,
          padding: 10,
          flexDirection: 'row'
          }}>
          <View style={{paddingLeft: 10}}>
            <Text style={{fontSize: 20, color: 'white'}}>{this.props.text && this.props.text}</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={this.download.bind(this)} style={{ backgroundColor: 'rgba(250, 250, 250, 0.2)', padding: 3}}>
                <Text style={{fontSize: 12, color: 'snow'}}>Download</Text>
              </TouchableOpacity>
              <View style={{marginLeft: 5}} />
              <TouchableOpacity onPress={this.setWallpaper.bind(this)} style={{backgroundColor: 'rgba(250, 250, 250, 0.2)', padding: 3}}>
                <Text style={{fontSize: 12, color: 'snow', marginLeft: 5}}>Set as Wallpaper</Text>
              </TouchableOpacity>            
            </View>
          </View>
        </View>
      </View>
    )
  }
}