import {
    ListView,
    Alert,
} from 'react-native';
import RNPlus from 'rnplus';
import tester from '../../tester.js';
import CustomAlert from './customAlert.js';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const listData = ds.cloneWithRows([
  {
    text: 'popup',
    onPress() {
      RNPlus.popup.show({
        blankClose: true,
      });
    },
  },
  {
    text: 'popup + CustomAlert',
    onPress() {
      RNPlus.popup.show({
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        content: CustomAlert,
        bindEvents: {
          ready() {
            tester.log('[popup][ready]', this.props.param);
          },
          actived(param) {
            tester.log('[popup][actived]', param);
          },
          deactived() {
            tester.log('[popup][deactived]');
          },
          destroy() {
            tester.log('[popupz][destroy]');
          },
        },
      });
    },
  },
  {
    text: 'popup + alert',
    onPress() {
      RNPlus.popup.show();
      Alert.alert('sdfsf', 'esfsdfs', [
        {
          text: 'OK',
          onPress() {
            RNPlus.popup.close();
          },
        },
      ]);
    },
  },
]);

export default listData;
