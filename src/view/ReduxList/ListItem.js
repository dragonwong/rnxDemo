import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  PComponent,
} from 'rnplus';
import Operation from '../../common/Operation.js';
import {
    COLOR_LIST_BORDER,
} from '../../common/styles.js';


class ListItem extends PComponent {
  constructor(props) {
    super(props);
    this.onPress = props.onPress.bind(this, props.index, props.item.name);
  }
  styles = {
    item: {
      flexDirection: 'row',
      height: 100,
      alignItems: 'center',
      backgroundColor: '#fff',
      borderBottomColor: COLOR_LIST_BORDER,
      borderBottomWidth: 1,
      paddingLeft: 10,
      paddingRight: 10,
    },
    info: {
      flex: 1,
    },
  };
  render() {
    const item = this.props.item;
    return (
      <View class="item" onPress={this.onPress}>
        <View class="info">
          <Text class="name">{item.name}</Text>
        </View>
        <Operation index={this.props.index} count={item.count} />
      </View>
    );
  }
}

export default ListItem;
