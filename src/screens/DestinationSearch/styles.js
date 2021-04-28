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
    marginLeft: 20,
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
  listView: {
    position: 'absolute',
    top: 105,
  },
  locationText: {

  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 15,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: '#919191',
    position: 'absolute',
    top: 28,
    left: 17,
    
  },
});

export default styles;