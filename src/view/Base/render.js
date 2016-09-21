import React from 'react';
import { View } from 'react-native';
import RNPlus from 'rnplus';
import List from '../../common/List.js';
import listData from './listData.js';
import { STYLE_ALL } from '../../common/styles.js';

const navBarOpts = {
    // 标题内容，默认空字符串
  title: 'Base',
    // 左侧按钮文字，默认 '返回'
  leftText: '',
    // 左侧按钮点击事件，默认 `RNPlus.back()`
  leftEvent() {},
    // 右侧按钮文字，默认空字符串
  rightText: '',
};

export default function () {
  return (
    <View style={STYLE_ALL}>
      <RNPlus.Router.NavBar opts={navBarOpts} />
      <View style={{ flex: 1 }}>
        <List dataSource={listData} view={this} />
      </View>
    </View>
  );
}
