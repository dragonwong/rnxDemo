import React from 'react';
import {
    View,
    ScrollView,
} from 'react-native';
import RNPlus, {
  PView,
} from 'rnplus';
import Icon from '../../common/Icon';
import {
    STYLE_ALL,
    STYLE_ITEM,
    STYLE_SCROLL_VIEW,
} from '../../common/styles.js';

const navBarOpts = {
  title: 'IconFont',
};

class IconFont extends PView {
  styles = {
    all: STYLE_ALL,
    scrollView: STYLE_SCROLL_VIEW,
    item: STYLE_ITEM,
  };

  render() {
    return (
      <View class="all">
        <RNPlus.Router.NavBar opts={navBarOpts} />
        <ScrollView class="scrollView">
          <View class="item">
            <Icon name="menu" />
          </View>
          <View class="item">
            <Icon name="angle-left" color="red" fontSize={20} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default IconFont;
