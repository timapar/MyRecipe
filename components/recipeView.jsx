import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Recipe from './recipe';
import styles from '../styles/';

class RecipeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.colContainer}>
        <View style={styles.tiles}>
          {this.state.recipes.map((recipe) => (
            <Recipe recipe={recipe} />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Add Recipe')}>
          <Text style={styles.buttonText}>Add Recipe</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default RecipeView;
