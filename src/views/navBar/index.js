import tester from '../../tester.js';

import render from './render.js';

class NavBar extends QView {
    render = render;

    // Events
    bindEvents = {
        ready() {
            tester.log('[NavBar][ready]', this.props.param);
        },
        actived(param) {
            tester.log('[NavBar][actived]', param);
        },
        deactived() {
            tester.log('[NavBar][deactived]');
        },
        destroy() {
            tester.log('[NavBar][destroy]');
        }
    };
};

export default NavBar;
