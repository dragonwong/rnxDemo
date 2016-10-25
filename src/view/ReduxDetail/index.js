import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import { PView } from 'rnplus';
import Cart from '../../common/Cart.js';
import Operation from '../../common/Operation.js';
import NavBar from '../../common/NavBar';
import styles from './styles.js';

class ReduxDetail extends PView {
  styles = styles;

  static reduxPlugin = {
    mapStateToProps: ['listDataOrigin'],
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: 'ReduxDetail',
    };
  }

  // Events
  bindEvents = {
    ready() {
      const id = this.props.param.id;

      setTimeout(() => {
        this.setState({
          loading: false,
          detailData: {
            id,
            name: `产品${id}`,
            des: `产品${id}是坠吼的！`,
          },
          title: this.props.param.name,
        });
      }, 1000);
    },
    // actived(param) {
    //   this.navBar.setState({
    //     title: param.name,
    //   });
    // },
  };

  render() {
    return (
      <View class="all">
        <NavBar title={this.state.title} />
        <View style={{ flex: 1 }}>
          <ScrollView class="main">
            {
              this.state.loading ? <ActivityIndicator class="loading" /> :
                <View class="detail">
                  <Text class="title">{this.state.detailData.name}</Text>
                  <Text>{this.state.detailData.des}</Text>
                  <View class="operation">
                    <Operation class="test" index={this.props.param.id} count={this.props.listDataOrigin[this.props.param.id].count} />
                  </View>
                </View>
            }
          </ScrollView>
          <Cart />
        </View>
      </View>
    );
  }
}

export default ReduxDetail;
