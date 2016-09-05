import render from './render.js';

class Scene extends PView {
    render = render;

	// Events
    bindEvents = {
        ready() {
            console.log('[Scene][ready]', this.props.param);
        },
		actived(param) {
			console.log('[Scene][actived]', param);
		},
		deactived() {
			console.log('[Scene][deactived]');
		},
		destroy() {
			console.log('[Scene][destroy]');
		}
    };
};

export default Scene;
