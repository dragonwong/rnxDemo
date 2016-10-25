import { StyleSheet } from 'react-native';

const LOADER_SIZE = 20;
const POINTER_SIZE = 10;
const POINTER_GAP = (LOADER_SIZE - POINTER_SIZE) / 2;

const styles = StyleSheet.create({
  loader: {
    position: 'relative',
    width: LOADER_SIZE,
    height: LOADER_SIZE,
  },
  cicle: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: null,
    width: null,
  },
  pointer: {
    position: 'absolute',
    top: POINTER_GAP,
    left: POINTER_GAP,
    height: POINTER_SIZE,
    width: POINTER_SIZE,
  },
  text: {
    marginTop: 5,
    fontSize: 10,
    color: '#333',
  },
});

export default styles;
