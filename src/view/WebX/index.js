import React from 'react';
import {
  View,
  Text,
  ListView,
  ScrollView,
  Alert,
} from 'react-native';
import RNPlus, { PView } from 'rnplus';
import {
  COLOR_LIST_BORDER,
  STYLE_ALL,
  STYLE_SCROLL_VIEW,
} from '../../common/styles.js';

const navBarOpts = {
  // 标题内容，默认空字符串
  title: 'WebX',
};

class WebX extends PView {

  routerPlugin = {
    leftButtonText: '',
    title: 'WebX',
  };

  styles = {
    all: STYLE_ALL,
    scrollView: STYLE_SCROLL_VIEW,

    Text: {
      color: '#CAAD45',
    },

    item: {
      borderBottomColor: COLOR_LIST_BORDER,
      borderBottomWidth: 1,
      height: 40,
      justifyContent: 'center',
      backgroundColor: '#fff',
      paddingLeft: 10,
    },
    'item-gap': {
      marginTop: 20,
    },

    'vh-vw': {
      fontSize: '3vh',
      borderColor: 'red',
      borderWidth: 1,
      width: '50vw',
    },

    // active
    'item-1': {
      ':active': {
        backgroundColor: '#B1DEE8',
      },
    },
    'item-2': {
      ':active': {
        backgroundColor: '#B1DEE8',
      },
    },
    'child-text': {
      'item-2:active': {
        color: 'red',
      },
    },

    // 媒体查询
    '@media (min-width: 400)': {
      media: {
        color: 'red',
      },
    },
    '@media (max-width:900) and (min-width:400)': {
      media: {
        color: 'blue',
      },
    },

    'media-inner': {
      '@media (min-height: 500)': {
        color: 'red',
      },
      '@media (max-height:900) and (min-height: 500)': {
        color: 'blue',
      },
    },

    transform: {
      transform: 'translateX(50), rotate(-2deg)',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      dataSource: (new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })).cloneWithRows(['row 1', 'row 2', 'row 3']),
    };
  }

  testPressView() {
    Alert.alert('You pressed a View.');
  }
  testAutoBind() {
    console.log('testAutoBind', this);
  }

  render() {
    return (
      <View class="all">
        <RNPlus.Router.NavBar opts={navBarOpts} />
        <ScrollView class="scrollView">
          <View class="item">
            <Text>
                通过 className 写样式
            </Text>
          </View>
          <View class="item">
            <Text>
                通过 ComponentName 写样式（查看 Text 样式）
            </Text>
          </View>

          <View class="item item-gap">
            <Text class="vh-vw">
                支持 vh 和 vw 单位
            </Text>
          </View>

          <View class="item item-gap item-1">
            <Text>
                支持 :active
            </Text>
          </View>
          <View class="item item-2">
            <Text class="child-text">
                甚至支持通过获取其他组件的 :active 改变自己样式
            </Text>
          </View>

          <View class="item item-gap">
            <Text class="media">
                支持媒体查询（宽高）
            </Text>
          </View>
          <View class="item">
            <Text class="media-inner">
                样式内部也支持媒体查询（宽高）
            </Text>
          </View>

          <View class="item item-gap">
            <Text class="transform">
                transform 增强
            </Text>
          </View>

          <View class="item item-gap" onPress={this.testPressView}>
            <Text>
                View 上也可绑定 onPress 事件
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default WebX;
