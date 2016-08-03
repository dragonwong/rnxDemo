import { ListView } from 'react-native';
import tester from '../../tester.js';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let listData = ds.cloneWithRows([

    {
        gap: true,
        text: 'backTo Base',
        onPress() {
            let res = RNPlus.backTo('Base', {
                param: {
        			api: 'back',
        			from: 'PageA',
        			to: 'Base'
        		}
            });
            tester.log(res);
        },
    },
    {
        text: 'open Base',
        onPress() {
            let res = RNPlus.open('Base', {
                param: {
                    api: 'open',
                    from: 'PageA',
                    to: 'Base'
                }
            });
            tester.log(res);
        },
    },
    {
        text: 'home',
        onPress() {
            let res = RNPlus.home({
                param: {
                    api: 'home',
                    from: 'pageB',
                    to: 'pageB'
                }
            });
            tester.log(res);
        },
    },
]);

export default listData;
