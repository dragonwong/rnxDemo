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
import Number from 'rnx-ui-number';
import {
    STYLE_ALL,
    STYLE_ITEM,
    STYLE_BUTTON,
    STYLE_SCROLL_VIEW,
} from '../../common/styles.js';


const navBarOpts = {
    // 标题内容，默认空字符串
  title: 'Number',
};

class CompNumber extends PView {

  constructor(props) {
    super(props);

    this.state = {
      value1: 0,
      value2: 5,
    };
  }

  styles = {
    all: STYLE_ALL,
    item: STYLE_ITEM,
    button: STYLE_BUTTON,
    title: {
      borderBottomColor: '#C9C9C9',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
    },
  };

  render() {
    return (
      <View class="all">
        <RNPlus.Router.NavBar opts={navBarOpts} />
        <ScrollView style={STYLE_SCROLL_VIEW}>
          <View class="title">
            <Text>随机赋值</Text>
          </View>

          <View class="item">
            <Number
              value={this.state.value1}
              onChange={v => this.onChange(v, 1)}
            />
            <TouchableHighlight
              underlayColor="#D9D9D9"
              onPress={() => this.change(10, 1)}
              class="button"
              style={{ marginLeft: 10 }}
            >
              <Text>随机赋值</Text>
            </TouchableHighlight>
          </View>

          <View class="title">
            <Text>min: -2 max: 10</Text>
          </View>

          <View class="item">
            <Number
              value={this.state.value2}
              onChange={v => this.onChange(v, 2)}
              min={-2} max={10}
            />
            <TouchableHighlight
              underlayColor="#D9D9D9"
              onPress={() => this.change(10, 2)}
              class="button"
              style={{ marginLeft: 10 }}
            >
              <Text>随机赋值</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }

  change(max, n) {
    const obj = {};
    obj[`value${n}`] = parseInt(Math.random() * max, 10);
    this.setState(obj);
  }

  onChange(v, n) {
    const obj = {};
    obj[`value${n}`] = v;
    this.setState(obj);
  }

}

export default CompNumber;
