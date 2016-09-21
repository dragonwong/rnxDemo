import React from 'react';
import RNPlus, {
  PView,
} from 'rnplus';
import {
    View,
    Image,
    Dimensions,
} from 'react-native';
import Carousel from 'rnx-ui-carousel';

import {
    STYLE_ALL,
} from '../../common/styles.js';

const navBarOpts = {
    // 标题内容，默认空字符串
  title: 'Carousel',
};

class CompCarousel extends PView {

  styles = {
    all: STYLE_ALL,
    page: {
      width: Dimensions.get('window').width,
      flex: 1,
      alignItems: 'stretch',
    },
    img: {
      flex: 1,
    },
  };

  render() {
    return (
      <View class="all">
        <RNPlus.Router.NavBar opts={navBarOpts} />
        <View style={{ flex: 1 }}>
          <Carousel showPagination>
            <View class="page">
              <Image
                class="img"
                source={{ uri: 'http://ww3.sinaimg.cn/large/4c8b519djw1f6pkqvpivnj208w0dy746.jpg' }}
              />
            </View>
            <View class="page">
              <Image
                class="img"
                source={{ uri: 'http://ww3.sinaimg.cn/large/4c8b519djw1f6pl2qtmjhj208w0dyq2t.jpg' }}
              />
            </View>
            <View class="page">
              <Image
                class="img"
                source={{ uri: 'http://ww3.sinaimg.cn/large/4c8b519djw1f6pl2qt64yj208w0dyjra.jpg' }}
              />
            </View>
          </Carousel>
        </View>
      </View>
    );
  }
}

export default CompCarousel;
