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
    paddingBottom: 20,
    textAlign: 'center',
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
  loading: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 44,
    color: '#888',
  },
  recipeTitle: {
    fontSize: 40,
    color: 'purple',
    margin: 15,
    marginBottom: 0,
  },
  recipeIngredients: {
    fontSize: 22,
    color: 'black',
    margin: 15,
    marginBottom: 0,
  },
  recipeInstructions: {
    fontSize: 22,
    color: 'black',
    margin: 15,
    marginBottom: 0,
  },
  recipeSubtitle: {
    fontSize: 30,
    color: '#888',
    margin: 15,
    marginBottom: 0,
    textDecorationLine: 'underline',
  },
});

export default styles;
