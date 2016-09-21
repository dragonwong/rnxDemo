import { ListView } from 'react-native';
import RNPlus from 'rnplus';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const listData = ds.cloneWithRows([
  {
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
    text: '下拉列表 DropDown',
    onPress() {
      RNPlus.open('CompDropDown');
    },
  },
  {
    text: '数字 Number',
    onPress() {
      RNPlus.open('CompNumber');
    },
  },
  {
    text: '底部弹层 Popover',
    onPress() {
      RNPlus.open('CompPopover');
    },
  },
]);

export default listData;
