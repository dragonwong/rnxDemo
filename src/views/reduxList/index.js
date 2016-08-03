import {
    updateList,
} from '../../actions';
import render from './render.js';
import styles from './styles.js';

class ReduxList extends QView {
    render = render;
    styles = styles;

    static reduxPlugin = {
        mapStateToProps: ['listData', 'total'],
        mapDispatchToProps: {
            updateList,
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    };

    // Events
    bindEvents = {
        ready() {
            this.props.updateList().done(() => {
                this.setState({
                    loading: false,
                });
            });
        },
    };

    onPressItem(id, name) {
        RNPlus.open('ReduxDetail', {
            param: {
                id,
                name,
            }
        })
    };
};

export default ReduxList;
