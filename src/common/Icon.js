import React, { PropTypes } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

const ICON_SOURCE = {
  menu: 'f0c9',
  'angle-left': 'f104',
  'commenting-o': 'f27b',
};
const ICON_MAP = (() => {
  const res = {};
  for (const [key, value] of Object.entries(ICON_SOURCE)) {
    res[key] = String.fromCharCode(parseInt(value, 16));
  }
  return res;
})();

const styles = StyleSheet.create({
  icon: {
    fontFamily: 'FontAwesome',
  },
});

function Icon(props) {
  return (
    <Text style={[styles.icon, props.style]}>{ICON_MAP[props.name]}</Text>
  );
}

Icon.propTypes = {
  // 字符名字
  name: PropTypes.string.isRequired,
  // 自定义样式
  style: Text.propTypes.style,
};
Icon.defaultProps = {
  name: '',
  style: null,
};

export default Icon;
