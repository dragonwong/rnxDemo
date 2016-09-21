import { PView } from 'rnplus';
import tester from '../../tester.js';
import render from './render.js';

class Base extends PView {
  render = render;

    // Events
  bindEvents = {
    ready() {
      tester.log('[Base][ready]', this.props.param);
    },
    actived(param) {
      tester.log('[Base][actived]', param);
    },
    deactived() {
      tester.log('[Base][deactived]');
    },
    destroy() {
      tester.log('[Base][destroy]');
    },
  };
}

export default Base;
