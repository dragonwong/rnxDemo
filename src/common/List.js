import React from 'react';
import {
  Text,
  ListView,
  TouchableHighlight,
} from 'react-native';
import {
  PComponent,
} from 'rnplus';
import {
  STYLE_ITEM,
  STYLE_SCROLL_VIEW,
} from './styles.js';

class List extends PComponent {
  styles = {
    list: STYLE_SCROLL_VIEW,
  };
  render() {
    return (
      <ListView
        class="list"
        contentContainerStyle={{ paddingBottom: 20 }}
        dataSource={this.props.dataSource}
        renderRow={item => (<ListItem item={item} onPressContext={this} />)}
      />
    );
  }
}

class ListItem extends PComponent {
  constructor(props) {
    super(props);

    let className = 'item list-item';

    if (props.item.gap) {
      className += ' item-gap';
    }

    this.className = className;
    this.onPress = props.item.onPress.bind(this.props.onPressContext);
  }
  styles = {
    item: STYLE_ITEM,
    'list-item': {
      justifyContent: 'center',
    },
    'item-gap': {
      marginTop: 20,
    },
  };
  render() {
    const item = this.props.item;
    return (
      <TouchableHighlight
        class={this.className}
        underlayColor="#D9D9D9"
        onPress={this.onPress}
      >
        <Text
          style={{
            color: 'black',
          }}
        >
          {item.text}
        </Text>
      </TouchableHighlight>
    );
  }
}

export default List;
