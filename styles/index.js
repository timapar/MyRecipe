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
    backgroundColor: '#fcf8f5',
  },
  tileList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  button: {
    flex: 1,
    backgroundColor: '#c2332a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 44,
    color: '#fcf8f5',
  },
  tile: {
    justifyContent: 'flex-end',
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
    color: '#f5b43b',
    paddingBottom: 25,
    textAlign: 'center',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: '#39393b',
  },
  textInput: {
    fontSize: 26,
    color: '#39393b',
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
  inputLabels: {
    fontSize: 24,
    color: '#ec7533',
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
    color: '#c2332a',
    margin: 15,
    marginBottom: 0,
  },
  recipeIngredients: {
    fontSize: 22,
    color: '#39393b',
    margin: 15,
    marginBottom: 0,
  },
  recipeInstructions: {
    fontSize: 22,
    color: '#39393b',
    margin: 15,
    marginBottom: 0,
  },
  recipeSubtitle: {
    fontSize: 30,
    color: '#ec7533',
    margin: 15,
    marginBottom: 0,
    textDecorationLine: 'underline',
  },
});

export default styles;
