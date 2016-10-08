import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import RNPlus, {
  PComponent,
} from 'rnplus';

class CustomAlert extends PComponent {
  styles = {
    dialog: {
      backgroundColor: '#fff',
      width: '60vw',
      borderRadius: 5,
      overflow: 'hidden',
    },
    'dialog-text': {
      textAlign: 'center',
      padding: 20,
      borderColor: '#D9D9D9',
      borderBottomWidth: 1,
    },
    button: {
      overflow: 'hidden',
      borderColor: '#D9D9D9',
      borderTopWidth: 1,
    },
    'button-text': {
      textAlign: 'center',
      padding: 10,
    },
  };

  close() {
    RNPlus.popup.close();
  }

  render() {
    return (
      <View class="dialog">
        <Text class="dialog-text">这是一个自己实现的弹层</Text>
        <TouchableHighlight class="button" underlayColor="#D9D9D9" onPress={this.close}>
          <Text class="button-text">
            确定
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default CustomAlert;
