import {
    STYLE_ALL,
} from '../../common/styles.js';

export default {
  all: STYLE_ALL,

  main: {
    flex: 1,
    position: 'relative',
  },
  detail: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  operation: {
    marginTop: 10,
    flex: 1,
    alignItems: 'flex-end',
  },
  loading: {
    position: 'absolute',
    top: 20,
    width: '100vw',
  },
};
