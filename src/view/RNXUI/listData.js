import { ListView } from 'react-native';
import RNPlus from 'rnplus';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const listData = ds.cloneWithRows([
  {
    text: '手风琴 Accordion（需应用内置字体，详见文档）',
    onPress() {
      RNPlus.open('RNXUIAccordion');
    },
  },
  {
    text: '日历 Canlendar',
    onPress() {
      RNPlus.open('RNXUICalendar');
    },
  },
  {
    text: '轮播 Carousel',
    onPress() {
      RNPlus.open('RNXUICarousel');
    },
  },
  {
    text: '弹框 Dialog',
    onPress() {
      RNPlus.open('RNXUIDialog');
    },
  },
  {
    text: '下拉列表 DropDown',
    onPress() {
      RNPlus.open('RNXUIDropDown');
    },
  },
  {
    text: '导航栏 NavBar',
    onPress() {
      RNPlus.open('RNXUINavBar');
    },
  },
  {
    text: '数字 Number',
    onPress() {
      RNPlus.open('RNXUINumber');
    },
  },
  {
    text: '底部弹层 Popover',
    onPress() {
      RNPlus.open('RNXUIPopover');
    },
  },
  {
    text: '滚动组件 ScrollView',
    onPress() {
      RNPlus.open('RNXUIScrollView');
    },
  },
  {
    text: '提示浮层 ToolTip',
    onPress() {
      RNPlus.open('RNXUIToolTip');
    },
  },
]);

export default listData;
