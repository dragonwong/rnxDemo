import { ListView } from 'react-native';
import tester from '../../tester.js';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let listData = ds.cloneWithRows([
    {
        gap: true,
        text: 'open new VC',
        onPress() {
            RNPlus.Router.Bridge.openNewVC({
                // 指定目标
                hybridId: 'qunar_react_native_ext',
                data: {
                    param: {
                        usr: 'wyy',
                    },
                }
            });
        },
    },
    {
        text: 'open PageA in new VC',
        onPress() {
            RNPlus.Router.Bridge.openNewVC({
                // 指定目标
                hybridId: 'qunar_react_native_ext',
                data: {
                    qInitView: 'PageA',
                    param: {
                        usr: 'wyy',
                    },
                }
            });
        },
    },
    {
        text: 'open PageA in new hybridId',
        onPress() {
            RNPlus.Router.Bridge.openNewVC({
                // 指定目标
                hybridId: 'test',
                data: {
                    qInitView: 'PageA',
                    param: {
                        usr: 'wyy',
                    },
                }
            });
        },
    },

    {
        gap: true,
        text: 'sendScheme',
        onPress() {
            RNPlus.Router.Bridge.sendScheme({
                url: 'qunariphone://react/debug',
            });
        },
    },
    {
        text: 'sendSchemeOpen',
        onPress() {
            RNPlus.Router.Bridge.sendScheme({
                url: 'qunariphone://react/open?hybridId=qunar_react_native_ext&qInitView=PageA&initProps=%7B%22param%22%3A%7B%22name%22%3A%22wyy%22%7D%7D',
            }, (data) => {
                console.log('~~~~~~~ sendScheme open', data);
            });
        },
    },
    {
        text: 'sendSchemeBiz',
        onPress() {
            RNPlus.Router.Bridge.sendScheme({
                url: 'qunariphone://react/biz?hybridId=qunar_react_native_ext&qInitView=PageA',
            }, (data) => {
                console.log('~~~~~~~ sendScheme biz', data);
            });
        },
    },
    {
        text: 'sendSchemeBizNoExt',
        onPress() {
            RNPlus.Router.Bridge.sendScheme({
                url: 'qunariphone://react/biz?hybridId=qunar_react_native_ext&RNPlus=false',
            }, (data) => {
                console.log('~~~~~~~ sendScheme biz', data);
            });
        },
    },
    {
        text: 'sendSchemaHy',
        onPress() {
            let url = 'qunariphone://hy?url=http%3A%2F%2Fwyy.qunar.com%2Fqreact-test-hy%2Findex.html&loadview=auto';
            RNPlus.Router.Bridge.sendScheme({
                url,
            });
        },
    },

    {
        gap: true,
        text: 'sendBroadcast',
        onPress() {
            RNPlus.Router.Bridge.sendBroadcast({
                // 广播名
                name: 'getMsg',
                // 广播内容
                data: {
                    msg: 'this is a broadcast',
                },
                // 指定发送目标，不指定则发给全局
                hybridId: 'qunar_react_native_ext',
            });
        },
    },
]);

export default listData;
