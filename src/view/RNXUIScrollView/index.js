import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import {
  PView,
} from 'rnplus';
import {
  imgLoadingCicleDark,
  imgLoadingPointerDark,
} from 'PImageSet';
import ScrollView from 'rnx-ui-scrollview';
import {
  STYLE_ALL,
  STYLE_ITEM,
  STYLE_SCROLL_VIEW,
} from '../../common/styles.js';
import styles from './style.js';
import NavBar from '../../common/NavBar';

const demoList = ((len) => {
  let i = 0;
  const res = [];
  while (i < len) {
    i += 1;
    res.push(`${i}`);
  }
  return res;
})(30);

class RNXUIScrollView extends PView {

  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      deg: 0,
      refreshControlText: '下拉刷新',
    };
  }

  styles = {
    all: STYLE_ALL,
    item: STYLE_ITEM,
    scrollView: STYLE_SCROLL_VIEW,
  };

  rotateStart() {
    const t = 16;
    const v = 1;
    this.intervalId = setInterval(() => {
      this.setState({
        deg: this.state.deg + (v * t),
      });
    }, t);
  }

  rotateStop() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <View class="all">
        <NavBar title="ToolTip" />
        <ScrollView
          class="scrollView"
          refreshControl={
            <View
              refreshing={this.state.isRefreshing}
              style={{
                alignItems: 'center',
                paddingVertical: 10,
              }}
              onPull={() => {
                this.setState({
                  refreshControlText: '下拉刷新',
                });
              }}
              onPulling={(p) => {
                this.setState({
                  deg: p * 3,
                });
              }}
              onReadyToRefresh={() => {
                if (!this.state.isRefreshing) {
                  this.setState({
                    refreshControlText: '松开刷新',
                  });
                }
              }}
              onRefresh={() => {
                this.setState({
                  isRefreshing: true,
                  refreshControlText: '正在刷新...',
                });
                this.rotateStart();
                setTimeout(() => {
                  this.setState({
                    refreshControlText: '刷新成功',
                  });
                  this.rotateStop();
                  setTimeout(() => {
                    this.setState({
                      isRefreshing: false,
                      refreshControlText: '下拉刷新',
                    });
                  }, 500);
                }, 3000);
              }}
            >
              <View style={styles.loader}>
                <Image source={imgLoadingCicleDark} style={styles.cicle} />
                <Image
                  source={imgLoadingPointerDark}
                  style={[styles.pointer, {
                    transform: [{
                      rotate: `${this.state.deg}deg`,
                    }],
                  }]}
                />
              </View>
              <Text style={styles.text}>{this.state.refreshControlText}</Text>
            </View>
          }
        >
          {
            demoList.map((item, index) => (
              <View
                key={`tooltip-demo-${index}`}
                class="item"
              >
                <Text>{item}</Text>
              </View>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

export default RNXUIScrollView;
