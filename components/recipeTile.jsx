import React from 'react';
import { TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from '../styles/';

const RecipeTile = (props) => {
  return (
    <TouchableOpacity
      style={styles.tile}
      onPress={() => {
        props.navigation.navigate('My Recipe', { recipeID: props.recipe.id });
      }}
    >
      <ImageBackground
        style={styles.tile}
        source={require('/home/tim/HackReactor/MVP/MyRecipe/assets/med-food-hero_1.jpg')}
      >
        <Text style={styles.tileText}>{props.recipe.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default RecipeTile;
