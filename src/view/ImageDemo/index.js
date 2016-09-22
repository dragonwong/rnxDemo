import React from 'react';
import {
    View,
    ScrollView,
    Image,
} from 'react-native';
import RNPlus, {
  PView,
} from 'rnplus';
import imageSet from 'PImageSet';
import {
    STYLE_ALL,
    STYLE_SCROLL_VIEW,
} from '../../common/styles.js';

const navBarOpts = {
  title: 'Image',
};

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
        <RNPlus.Router.NavBar opts={navBarOpts} />
        <ScrollView class="scrollView">
          <Image class="image" resizeMode="cover" source={{ uri: imageSet.shy }} />
          <Image class="image" resizeMode="cover" source={{ uri: imageSet.handsome }} />
        </ScrollView>
      </View>
    );
  }
}

export default ImageDemo;
