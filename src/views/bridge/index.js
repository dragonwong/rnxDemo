import { DeviceEventEmitter } from 'react-native';
import tester from '../../tester.js';
import render from './render.js';

class Bridge extends QView {
    render = render;

    // Events
    bindEvents = {
        ready() {
            tester.log('[Bridge][ready]', this.props.param);
        },
        actived(param) {
            tester.log('[Bridge][actived]', param);
        },
        deactived() {
            tester.log('[Bridge][deactived]');
        },
        destroy() {
            tester.log('[Bridge][destroy]');
        }
    };
};

export default Bridge;

DeviceEventEmitter.addListener('getMsg', (data) => {
    tester.log('receiveBroadcast: getMsg', data);
});
