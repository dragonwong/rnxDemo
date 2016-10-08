import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import RNPlus, {
  PView,
} from 'rnplus';
import ToolTip from 'rnx-ui-tooltip';
import {
  STYLE_ALL,
  STYLE_ITEM,
  STYLE_SCROLL_VIEW,
  COLOR_PRESS,
} from '../../common/styles.js';

const demoList = [
  '默认配置',
  '配置遮罩层样式',
  '配置文本样式',
];
const navBarOpts = {
  title: 'ToolTip',
};

class CompToolTip extends PView {

  constructor(props) {
    super(props);
    this.state = {
      demo0: false,
      demo1: false,
      demo2: false,
    };
  }

  styles = {
    all: STYLE_ALL,
    item: STYLE_ITEM,
    scrollView: STYLE_SCROLL_VIEW,
  };

  show(index) {
    const state = {};
    state[`demo${index}`] = true;
    this.setState(state);
    setTimeout(() => {
      state[`demo${index}`] = false;
      this.setState(state);
    }, 1000);
  }

  render() {
    return (
      <View class="all">
        <RNPlus.Router.NavBar opts={navBarOpts} />
        <ScrollView class="scrollView">
          {
            demoList.map((item, index) => (
              <TouchableHighlight
                key={`tooltip-demo-${index}`}
                class="item"
                underlayColor={COLOR_PRESS}
                onPress={() => this.show(index)}
              >
                <Text>{item}</Text>
              </TouchableHighlight>
            ))
          }
        </ScrollView>
        <ToolTip
          visible={this.state.demo0}
          text="默认配置"
        />
        <ToolTip
          visible={this.state.demo1}
          text="配置遮罩层背景色"
          modalStyle={{ backgroundColor: 'rgba(255, 0, 0, 0.2)' }}
        />
        <ToolTip
          visible={this.state.demo2}
          text="配置字体颜色"
          textStyle={{ color: 'red' }}
        />
      </View>
    );
  }
}

export default CompToolTip;
