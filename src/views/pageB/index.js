import tester from '../../tester.js';
import render from './render.js';

class PageB extends PView {
    render = render;

	// Events
    bindEvents = {
        ready() {
            tester.log('[PageB][ready]', this.props.param);
        },
		actived(param) {
			tester.log('[PageB][actived]', param);
		},
		deactived() {
			tester.log('[PageB][deactived]');
		},
		destroy() {
			tester.log('[PageB][destroy]');
		}
    };
};

export default PageB;
