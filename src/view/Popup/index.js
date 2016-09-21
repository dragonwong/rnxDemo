import { PView } from 'rnplus';
import tester from '../../tester.js';
import render from './render.js';

class Popup extends PView {
  render = render;

  // Events
  bindEvents = {
    ready() {
      tester.log('[Popup][ready]', this.props.param);
    },
    actived(param) {
      tester.log('[Popup][actived]', param);
    },
    deactived() {
      tester.log('[Popup][deactived]');
    },
    destroy() {
      tester.log('[Popup][destroy]');
    },
  };
}

export default Popup;
