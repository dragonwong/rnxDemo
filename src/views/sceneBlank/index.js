import tester from '../../tester.js';
import render from './render.js';

class SceneBlank extends PView {
    render = render;

    // Events
    bindEvents = {
        ready() {
            tester.log('[SceneBlank][ready]', this.props.param);
        },
        actived(param) {
            tester.log('[SceneBlank][actived]', param);
        },
        deactived() {
            tester.log('[SceneBlank][deactived]');
        },
        destroy() {
            tester.log('[SceneBlank][destroy]');
        }
    };
};

export default SceneBlank;
