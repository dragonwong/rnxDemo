import RNPlus from 'rnplus';
import reducer from './reducer';

// 添加 RNPlus 插件：webx
RNPlus.defaults.globalPlugins.push('webx');

// 配置 projectId
RNPlus.defaults.projectId = 'rnxDemo';
// 配置应用名
RNPlus.defaults.appName = 'rnxDemo';
// 配置首页
// RNPlus.defaults.indexView = 'RNXUINavBar';
// redux 配置项
RNPlus.defaults.redux = {
  /**
   * 配置 option, reducer/initialState/enhancer
   */
  reducer,
  // initialState: {},
  // enhancer: null,
  /**
   * 配置 middleware 中间件
   */
  middleware: [() => next => (action) => {
    console.log(action.type);
    return next(action);
  }],
};
