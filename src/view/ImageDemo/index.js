import React from 'react';
import {
    View,
    ScrollView,
    Image,
} from 'react-native';
import {
  PView,
} from 'rnplus';
import {
  imgShy,
  imgHandsome,
} from 'PImageSet';
import {
    STYLE_ALL,
    STYLE_SCROLL_VIEW,
} from '../../common/styles.js';
import NavBar from '../../common/NavBar';

class ImageDemo extends PView {
  styles = {
    all: STYLE_ALL,
    scrollView: STYLE_SCROLL_VIEW,
    image: {
      flex: 1,
      width: null,
      height: 300,
    },
  };

  render() {
    return (
      <View class="all">
        <NavBar title="Image" />
        <ScrollView class="scrollView">
          <Image class="image" resizeMode="cover" source={imgShy} />
          <Image class="image" resizeMode="cover" source={imgHandsome} />
        </ScrollView>
      </View>
    );
  }
}

export default ImageDemo;
