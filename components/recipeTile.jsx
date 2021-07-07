import React from 'react';
import { TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from '../styles/';

const RecipeTile = ({ recipe }) => {
  return (
    <TouchableOpacity style={styles.tile}>
      <ImageBackground
        style={styles.tile}
        source={require('/home/tim/HackReactor/MVP/MyRecipe/assets/default-recipe-big.png')}
      >
        <Text style={styles.tileText}>{recipe.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default RecipeTile;
