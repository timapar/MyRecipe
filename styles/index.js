import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  colContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  tiles: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#888',
  },
  button: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 44,
    color: 'white',
  },
  tile: {},
});

export default styles;
