import React from 'react';
import { View } from 'react-native';
import List from '../../common/List.js';
import listData from './listData.js';
import { STYLE_ALL } from '../../common/styles.js';
import NavBar from '../../common/NavBar';

export default function () {
  return (
    <View style={STYLE_ALL}>
      <NavBar title="安卓物理返回键控制" />
      <View style={{ flex: 1 }}>
        <List dataSource={listData} view={this} />
      </View>
    </View>
  );
}
