import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import {
  PView,
} from 'rnplus';
// import Accordion from '../../../rnx-ui/rnx-ui-accordion';
import Accordion from 'rnx-ui-accordion';
import {
    STYLE_ALL,
    STYLE_BUTTON,
} from '../../common/styles.js';
import NavBar from '../../common/NavBar';

const contentButtonStyle = {
  ...STYLE_BUTTON,
  flex: 1,
  paddingVertical: 10,
};

const accordionData = [{
  title: '标题：我的内容是文本',
  content: '人吶就都不知道，自己就不可以預料。你一個人的命運啊，當然要靠自我奮鬥，但是也要考慮到歷史的行程，我絕對不知道，我作為一個上海市委書記怎麼把我選到北京去了，所以鄧小平同志跟我講話，說「中央都決定啦，你來當總書記」，我說另請高明吧。我實在我也不是謙虛，我一個上海市委書記怎麼到北京來了呢？但是呢，小平同志講「大家已經研究決定了」，所以後來我就念了兩首(原話如此)詩，叫「苟利國家生死以，豈因禍福避趨之」，那麼所以我就到了北京。',
}, {
  title: '标题：我的内容是元素',
  content: (
    <View style={{ flexDirection: 'row' }}>
      <TouchableHighlight
        underlayColor="#D9D9D9"
        style={contentButtonStyle}
        onPress={() => console.log('吼啊！')}
      >
        <Text>滋瓷</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#D9D9D9"
        style={[contentButtonStyle, {
          marginLeft: 10,
        }]}
        onPress={() => console.log('I\'m angry!')}
      >
        <Text>不滋瓷</Text>
      </TouchableHighlight>
    </View>
  ),
}];

class RNXUIAccordion extends PView {

  constructor(props) {
    super(props);

    this.state = {
      open: -1,
    };
  }

  styles = {
    all: STYLE_ALL,
    button: {
      padding: 4,
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#fff',
    },
  };

  onChange(v) {
    console.log('打开', v);
  }

  render() {
    return (
      <View class="all">
        <NavBar title="Accordion" />
        <ScrollView
          style={{
            flex: 1,
            padding: 10,
          }}
        >
          <Accordion
            data={accordionData}
            open={this.state.open}
            onChange={v => this.onChange(v)}
          />

          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
            }}
          >
            <TouchableHighlight
              style={contentButtonStyle}
              underlayColor="#D9D9D9"
              onPress={() => this.setState({ open: 0 })}
            >
              <Text>打开第一个</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[contentButtonStyle, {
                marginLeft: 10,
              }]}
              underlayColor="#D9D9D9"
              onPress={() => this.setState({ open: 1 })}
            >
              <Text>打开第二个</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default RNXUIAccordion;
