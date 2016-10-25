import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Alert,
} from 'react-native';
import RNPlus, {
  PView,
} from 'rnplus';
import NavBar from 'rnx-ui-navbar';
import List from '../../common/List.js';
import Icon from '../../common/Icon.js';
import { STYLE_ALL } from '../../common/styles.js';

const COLOR_NAVBAR_TEXT = '#fff';
const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'pink',
  },
  title: {
    color: 'blue',
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
  rightIcon: {
    color: COLOR_NAVBAR_TEXT,
    fontSize: 20,
  },
});

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const listData = ds.cloneWithRows([
  {
    text: '改标题',
    onPress() {
      this.props.view.setState({
        title: '识得唔识得啊？',
      });
    },
  },
]);

class RNXUINavBar extends PView {
  constructor(props) {
    super(props);
    this.state = {
      title: 'rnx-ui-navbar',
    };
  }
  render() {
    return (
      <View style={STYLE_ALL}>
        <NavBar
          style={styles.navBar}
          title={this.state.title}
          centerTextStyle={styles.title}
          leftBtn={
            <View style={styles.leftBtn}>
              <Icon name="angle-left" style={styles.leftIcon} />
              <Text style={styles.leftBtnText} >
                {'返回'}
              </Text>
            </View>
          }
          leftEvent={() => {
            RNPlus.back();
          }}
          rightBtn={
            <Icon name="commenting-o" style={styles.rightIcon} />
          }
          rightEvent={() => {
            Alert.alert('雷哋吼啊！');
          }}
        />
        <View style={{ flex: 1 }}>
          <List dataSource={listData} view={this} />
        </View>
      </View>
    );
  }
}

export default RNXUINavBar;
