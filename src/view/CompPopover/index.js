import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import RNPlus, {
  PView,
} from 'rnplus';
import Popover, { ActionSheet } from 'rnx-ui-popover';
import {
    COLOR_PRESS,
    STYLE_ALL,
    STYLE_ITEM,
    STYLE_SCROLL_VIEW,
} from '../../common/styles.js';

const navBarOpts = {
  title: 'Popover',
};

const demoList = [
  '默认配置',
  '自定义配置',
  'ActionSheet',
];

class CompPopover extends PView {
  constructor(props) {
    super(props);

    this.state = {
      popover0: false,
      popover1: false,
      popover2: false,
    };
  }

  change(index, value) {
    const state = {};
    state[`popover${index}`] = value;
    this.setState(state);
  }

  styles = {
    all: STYLE_ALL,
    item: STYLE_ITEM,
    scrollView: STYLE_SCROLL_VIEW,

    popoverView: {
      padding: 20,
      flexDirection: 'column',
    },

    popoverButton: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      alignItems: 'center',
    },
  };

  render() {
    return (
      <View class="all">
        <RNPlus.Router.NavBar opts={navBarOpts} />
        <ScrollView class="scrollView">
          {
            demoList.map((item, index) => (
              <TouchableHighlight
                key={`popover-demo-${index}`}
                class="item"
                underlayColor={COLOR_PRESS}
                onPress={() => this.change(index, true)}
              >
                <Text>{item}</Text>
              </TouchableHighlight>
            ))
          }
        </ScrollView>

        <Popover
          visible={this.state.popover0}
          class="popoverView"
        >
          <TouchableHighlight
            class="popoverButton"
            underlayColor={COLOR_PRESS}
            onPress={() => this.change(0, false)}
          >
            <Text>点击按钮关闭</Text>
          </TouchableHighlight>
        </Popover>

        <Popover
          visible={this.state.popover1}
          class="popoverView"
          modalStyle={{
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
          }}
          onPressModal={() => this.change(1, false)}
          onClose={() => {
            console.log('closed!');
          }}
        >
          <TouchableHighlight
            class="popoverButton"
            underlayColor={COLOR_PRESS}
          >
            <Text>点击遮罩层关闭</Text>
          </TouchableHighlight>
        </Popover>

        <ActionSheet
          visible={this.state.popover2}
          menu={[[{
            text: '全部恢复',
            action: () => {
              console.log('全部恢复');
              this.change(2, false);
            },
          }, {
            text: '全部删除',
            textStyle: {
              color: 'red',
            },
            action: () => {
              console.log('全部删除');
              this.change(2, false);
            },
          }], [{
            text: '取消',
            action: () => this.change(2, false),
          }]]}
          onPressModal={() => this.change(2, false)}
        />
      </View>
    );
  }
}

export default CompPopover;
