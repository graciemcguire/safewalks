import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
});

export default styles;
