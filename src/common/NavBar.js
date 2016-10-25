import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import RNPlus from 'rnplus';
import RNXNavBar from 'rnx-ui-navbar';
import Icon from './Icon';

const COLOR_NAVBAR_TEXT = '#fff';
const styles = StyleSheet.create({
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

function NavBar(props) {
  let leftBtn = null;
  let leftEvent = () => {};
  if (props.canBack) {
    leftBtn = (
      <View style={styles.leftBtn}>
        <Icon name="angle-left" style={styles.leftIcon} />
        <Text style={styles.leftBtnText} >
          {'返回'}
        </Text>
      </View>
    );
    leftEvent = () => {
      RNPlus.back();
    };
  }

  return (
    <RNXNavBar
      title={props.title}
      leftBtn={leftBtn}
      leftEvent={leftEvent}
      rightBtn={props.rightBtn}
      rightEvent={props.rightEvent}
    />
  );
}

NavBar.propTypes = {
  // 标题
  title: PropTypes.string,
  // 右侧按钮
  rightBtn: PropTypes.element,
  // 右侧点击事件
  rightEvent: PropTypes.func,
  // 能否返回
  canBack: PropTypes.bool,
};
NavBar.defaultProps = {
  title: '',
  rightBtn: null,
  rightEvent: () => {},
  canBack: true,
};

export default NavBar;
