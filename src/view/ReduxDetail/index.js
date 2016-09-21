import { PView } from 'rnplus';
import render from './render.js';
import styles from './styles.js';

class ReduxDetail extends PView {
  render = render;
  styles = styles;

  static reduxPlugin = {
    mapStateToProps: ['listDataOrigin'],
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  // Events
  bindEvents = {
    ready() {
      const id = this.props.param.id;

      setTimeout(() => {
        this.setState({
          loading: false,
          detailData: {
            id,
            name: `产品${id}`,
            des: `产品${id}是坠吼的！`,
          },
        });
      }, 1000);
    },
    actived(param) {
      this.navBar.setState({
        title: param.name,
      });
    },
  };
}

export default ReduxDetail;
