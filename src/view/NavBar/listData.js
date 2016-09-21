import { ListView } from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const listData = ds.cloneWithRows([
  {
    text: '改标题 setTitle',
    onPress() {
      this.props.view.navBar.setState({
        title: 'new title very long long long long long long long',
      });
    },
  },
]);

export default listData;
