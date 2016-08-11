import { ListView } from 'react-native';
import tester from '../../tester.js';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let listData = ds.cloneWithRows([
    {
        gap: true,
        text: '手风琴 Accordion（需应用内置字体，详见文档）',
        onPress() {
            RNPlus.open('CompAccordion');
        },
    },
    {
        text: '日历 Canlendar',
        onPress() {
            RNPlus.open('CompCalendar');
        },
    },
    {
        text: '轮播 Carousel',
        onPress() {
            RNPlus.open('CompCarousel');
        },
    },
    {
        text: '弹框 Dialog',
        onPress() {
            RNPlus.open('CompDialog');
        },
    },
    {
        text: '数字 Number',
        onPress() {
            RNPlus.open('CompNumber');
        },
    },
]);

export default listData;
