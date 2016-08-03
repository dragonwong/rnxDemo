import reducer from './reducers'

// 配置 hybridId
RNPlus.defaults.hybridId = 'rnxDemo';
// 配置应用名
RNPlus.defaults.appName = 'rnxDemo';
console.log(RNPlus.defaults)
// 配置首页
// RNPlus.defaults.indexView = 'CompNumber';
// RNPlus.defaults.indexView = 'CompDialog';
// RNPlus.defaults.indexView = 'Components';
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
    middleware: [() => {
        return (next) => (action) => {
            console.log(action.type);
            return next(action);
        }
    }]
};
