import React from 'react';
import {
  View,
  ListView,
  ActivityIndicator,
} from 'react-native';
import RNPlus, {
  PView,
} from 'rnplus';
import { updateList } from '../../actions';
import Cart from '../../common/Cart.js';
import styles from './styles.js';
import ListItem from './ListItem.js';

const navBarOpts = {
  title: 'ReduxList',
};

class ReduxList extends PView {
  styles = styles;

  static reduxPlugin = {
    mapStateToProps: ['listData', 'total'],
    mapDispatchToProps: {
      updateList,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  // Events
  bindEvents = {
    ready() {
      this.props.updateList().done(() => {
        this.setState({
          loading: false,
        });
      });
    },
  };

  onPressItem(id, name) {
    RNPlus.open('ReduxDetail', {
      param: {
        id,
        name,
      },
    });
  }

  render() {
    return (
      <View class="all">
        <RNPlus.Router.NavBar opts={navBarOpts} />
        <View style={{ flex: 1 }}>
          <View class="main">
            <ListView
              contentContainerStyle={{ paddingBottom: 20 }}
              enableEmptySections
              dataSource={this.props.listData}
              renderRow={(item, sectionID, index) => (
                <ListItem
                  onPress={this.onPressItem}
                  index={index}
                  item={item}
                />
              )}
            />
            {
              this.state.loading ? <ActivityIndicator class="loading" /> : null
            }
          </View>
          <Cart />
        </View>
      </View>
    );
  }
}

export default ReduxList;
