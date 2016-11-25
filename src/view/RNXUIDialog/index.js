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
// import Dialog, { Alert, Confirm } from '../../../rnx-ui/rnx-ui-dialog';
import Dialog, { Alert, Confirm } from 'rnx-ui-dialog';
import {
    STYLE_ALL,
    STYLE_ITEM,
    STYLE_INTRO,
    STYLE_INTRO_TEXT,
} from '../../common/styles.js';
import NavBar from '../../common/NavBar';

let counter = 0;

const dialogs = {
  dialog0: '默认配置',
  dialog1: '配置 header',
  dialog2: '隐藏 header',
  dialog3: '配置 content',
  dialog4: 'confirm 型 dialog',
  dialog5: 'alert 型 dialog',
  dialog6: '配置 modal',
  dialog7: '隐藏 modal',
  dialog8: '动态变化',
  dialog9: 'Confirm',
  dialog10: 'Alert',
};
const dialogsKeys = Object.keys(dialogs);

class RNXUIDialog extends PView {

  constructor(props) {
    super(props);

    this.state = {
      dialog0: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      dialog7: false,
      dialog8: false,
      dialog9: false,
      dialog10: false,
    };
  }

  styles = {
    all: STYLE_ALL,
    item: STYLE_ITEM,
    intro: STYLE_INTRO,
    introText: STYLE_INTRO_TEXT,
  };

  showDialog(id) {
    counter += 1;
    if (counter > 100000) counter = 0;
    const state = {};
    state[id] = true;
    this.setState(state);
  }

  onClose(id) {
    const state = {};
    state[id] = false;
    this.setState(state);
  }

  render() {
    const state = this.state;

    const modalStyle = {
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
    };

    return (
      <View class="all">
        <NavBar title="Dialog" />
        <ScrollView
          style={{ flex: 1 }}
        >
          <View class="intro">
            <Text class="introText">
                由于React-Native是完全按照先后顺序渲染元素的，因此为了使该组件正常显示，应该把 Dialog 放在靠后的位置上。
            </Text>
          </View>

          {
            dialogsKeys.map(item => (
              <TouchableHighlight
                key={`button${item}`}
                class="item"
                underlayColor="#f9f9f9"
                onPress={() => this.showDialog(item)}
              >
                <Text>{dialogs[item]}</Text>
              </TouchableHighlight>
            ))
          }
        </ScrollView>

        <Dialog
          title="默认配置"
          content="这是一个默认配置的对话框。"
          onClose={() => this.onClose('dialog0')}
          onCancel={() => console.log('取消：默认配置对话框')}
          onConfirm={() => console.log('确认：默认配置对话框')}
          visible={state.dialog0}
        />

        <Dialog
          title="配置 header"
          header={{
            confirm: { text: 'O', hidden: true },
            cancel: { text: 'X', hidden: false },
          }}
          content="这是一个配置 header 的对话框。定义 confirm 和 cancel 的顺序决定其所在左右两侧的位置。"
          onClose={() => this.onClose('dialog1')}
          visible={state.dialog1}
        />

        <Dialog
          showHeader={false}
          content={'这是一个隐藏 header 的对话框。'}
          onClose={() => this.onClose('dialog2')}
          visible={state.dialog2}
        />

        <Dialog
          title="配置 content"
          content={
            <View style={[{ backgroundColor: '#09c', padding: 10, alignItems: 'center' }]}>
              <Text style={[{ color: '#fff' }]}>
                content 可配置简单的字符串或复杂的 JSX
              </Text>
            </View>
          }
          onClose={() => this.onClose('dialog3')}
          visible={state.dialog3}
        />

        <Dialog
          showHeader={false}
          content="这是一个配置 footer 的 confirm 型对话框。定义 confirm 和 cancel 的顺序决定其所在左右两侧的位置。"
          onClose={() => this.onClose('dialog4')}
          visible={state.dialog4}
          type="confirm"
          footer={{
            cancel: { text: '残忍地拒绝' },
            confirm: { text: '愉快地接受' },
          }}
        />

        <Dialog
          showHeader={false}
          content="这是一个配置 footer 的 alert 型对话框。"
          onClose={() => this.onClose('dialog5')}
          visible={state.dialog5}
          type="alert"
          footer={{
            confirm: { text: '滋瓷' },
          }}
        />

        <Dialog
          modalStyle={modalStyle}
          showHeader={false}
          content="这是一个配置遮罩层对的对话框。"
          onClose={() => this.onClose('dialog6')}
          visible={state.dialog6}
        />

        <Dialog
          modal={false}
          showHeader={false}
          content="这是一个隐藏遮罩层对的对话框。"
          onClose={() => this.onClose('dialog7')}
          visible={state.dialog7}
        />

        <Dialog
          showHeader={false}
          content={`这是一个动态变化的对话框：${counter}`}
          onClose={() => this.onClose('dialog8')}
          visible={state.dialog8}
          type={counter % 2 ? 'alert' : 'confirm'}
        />

        <Confirm
          showHeader={false}
          content="Confirm 衍生组建"
          onClose={() => this.onClose('dialog9')}
          visible={state.dialog9}
        />
        <Alert
          showHeader={false}
          content="Alert 衍生组建"
          onClose={() => this.onClose('dialog10')}
          visible={state.dialog10}
        />
      </View>
    );
  }
}

export default RNXUIDialog;
