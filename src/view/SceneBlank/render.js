import React from 'react';
import { View } from 'react-native';
import RNPlus from 'rnplus';
import List from '../../common/List.js';
import listData from './listData.js';
import { STYLE_ALL } from '../../common/styles.js';

const navBarOpts = {
    // 标题内容，默认空字符串
  title: '空白场景',
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
