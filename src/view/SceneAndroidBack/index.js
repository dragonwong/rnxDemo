import { PView } from 'rnplus';
import tester from '../../tester.js';
import render from './render.js';

class SceneAndroidBack extends PView {
  render = render;

  preventBackByAndroidKey = false;

  onBackPressed() {
    return this.preventBackByAndroidKey;
  }

    // Events
  bindEvents = {
    ready() {
      tester.log('[SceneAndroidBack][ready]', this.props.param);
    },
    actived(param) {
      tester.log('[SceneAndroidBack][actived]', param);
    },
    deactived() {
      tester.log('[SceneAndroidBack][deactived]');
    },
    destroy() {
      tester.log('[SceneAndroidBack][destroy]');
    },
  };
}

export default SceneAndroidBack;
