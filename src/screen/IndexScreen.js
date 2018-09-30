import React from "react";
import {
  Animated,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";

import {
  ParallaxSwiper,
  ParallaxSwiperPage
} from "react-native-parallax-swiper";

import WallpaperList from '../constant/WallpaperList'
import ForegroundComponent from './component/ForegroundComponent'
import BackgroundComponent from './component/BackgroundComponent'

const { width, height } = Dimensions.get("window");

export default class App extends React.Component {
  myCustomAnimatedValue = new Animated.Value(0);

  render() {
    return (
      <ParallaxSwiper
        speed={0.7}
        animatedValue={this.myCustomAnimatedValue}
        dividerWidth={1}
        dividerColor="black"
        backgroundColor="black"
        onMomentumScrollEnd={activePageIndex => console.log(activePageIndex)}
        >
        {WallpaperList.map(wallpaper => {
          return (
            <ParallaxSwiperPage
              key={wallpaper.id}
              BackgroundComponent={<BackgroundComponent image={wallpaper.image} />}
              ForegroundComponent={<ForegroundComponent text={wallpaper.name} image={wallpaper.image} url={wallpaper.url} />}
            />
          )
        })}
      </ParallaxSwiper>
    );
  }
}