import React from 'react';
import { TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from '../styles/';

const RecipeTile = (props) => {
  return (
    <TouchableOpacity
      style={styles.tile}
      onPress={() => {
        console.log(props.recipe.photo);
        props.navigation.navigate('My Recipe', { recipeID: props.recipe.id });
      }}
    >
      <ImageBackground
        style={styles.tile}
        source={
          props.recipe.photo
            ? { uri: props.recipe.photo }
            : require('/home/tim/HackReactor/MVP/MyRecipe/assets/default-recipe-big.png')
        }
      >
        <Text style={styles.tileText}>{props.recipe.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default RecipeTile;
