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
    backgroundColor: '#888',
  },
  tileList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
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
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 200,
    height: 200,
  },
  image: {
    width: 200,
    height: 200,
  },
  tileText: {
    fontSize: 32,
    color: 'purple',
  },
  textInput: {
    fontSize: 26,
    color: 'cyan',
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
  inputLabels: {
    fontSize: 24,
    color: 'blue',
    paddingLeft: 20,
  },
});

export default styles;
