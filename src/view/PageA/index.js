import RNPlus, {
  PView,
} from 'rnplus';
import tester from '../../tester.js';
import render from './render.js';

class PageA extends PView {
  render = render;

    // Events
  bindEvents = {
    ready() {
      tester.log('[PageA][ready]', this.props.param);
    },
    actived(param) {
      tester.log('[PageA][actived]', param);
    },
    deactived() {
      tester.log('[PageA][deactived]');
    },
    destroy() {
      tester.log('[PageA][destroy]');
    },
  };
}

export default PageA;

/**
 * 添加自动化测试 case
 */
// open 不同页
tester.addCase('open 不同页', () => RNPlus.open('PageB'));
// open 同页
tester.addCase('open 同页', () => RNPlus.open('PageB'));
// back
tester.addCase('back', () => RNPlus.back());
// backTo 前两页
tester.addCase('backTo 跨页', () => RNPlus.backTo('Base'));
// goto 前进
tester.addCase('goto 前进', () => RNPlus.goto('PageA'));
// goto 后退
tester.addCase('goto 后退', () => RNPlus.goto('Base'));
// 过场
tester.addProcess(() => RNPlus.open('PageA'));
// backTo 前页
tester.addCase('backTo 前页', () => RNPlus.backTo('Base'));
// 过场
tester.addProcess(() => RNPlus.open('PageA'));
// close 自身
tester.addCase('close 自身', () => RNPlus.close());
// 过场
tester.addProcess(() => RNPlus.open('PageA'));
// 过场
tester.addProcess(() => RNPlus.open('PageB'));
// close
tester.addCase('close 前页', () => RNPlus.close('PageA'));
// home
tester.addCase('home', () => RNPlus.home());
