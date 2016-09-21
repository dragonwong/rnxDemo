import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import RNPlus from 'rnplus';
import Cart from '../../common/Cart.js';
import Operation from '../../common/Operation.js';

const navBarOpts = {
  title: 'ReduxDetail',
};

export default function () {
  return (
    <View class="all">
      <RNPlus.Router.NavBar
        opts={navBarOpts}
        ref={(c) => {
          this.navBar = c;
        }}
      />
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
