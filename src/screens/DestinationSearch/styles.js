import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    backgroundColor: '#eee',
  },
  textInput: {
    backgroundColor: '#e7e7e7',
    marginVertical: 5,
    padding: 10,
  },
  seperator: {
    backgroundColor: '#efefef',
    height: 1
  },
  autoCompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {

  },
  listView: {
     position: 'absolute',
     top: 105,
  },
});

export default styles;