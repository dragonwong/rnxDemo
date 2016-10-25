import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import RNPlus from 'rnplus';
import List from '../../common/List.js';
import listData from './listData.js';
import { STYLE_ALL } from '../../common/styles.js';
import NavBar from 'rnx-ui-navbar';

const COLOR_NAVBAR_TEXT = '#fff';
const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'pink',
  },
  leftBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    color: COLOR_NAVBAR_TEXT,
  },
  leftBtnText: {
    marginLeft: 5,
    color: COLOR_NAVBAR_TEXT,
  },
});

export default function () {
  return (
    <View style={STYLE_ALL}>
      <NavBar
        style={styles.navBar}
        title="Base"
      />
      <View style={{ flex: 1 }}>
        <List dataSource={listData} view={this} />
      </View>
    </View>
  );
}
