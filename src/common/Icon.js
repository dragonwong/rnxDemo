import React, { PropTypes } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

const ICON_SOURCE = {
  menu: 'f0c9',
  'angle-left': 'f104',
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
  const customStyle = {};
  if (props.color) {
    customStyle.color = props.color;
  }
  if (props.fontSize) {
    customStyle.fontSize = props.fontSize;
  }
  return (
    <Text style={[styles.icon, customStyle]}>{ICON_MAP[props.name]}</Text>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

export default Icon;
