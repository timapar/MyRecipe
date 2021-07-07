import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import RecipeTile from './recipeTile';
import styles from '../styles/';

class RecipeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        { id: 1, title: 'title 1' },
        { id: 2, title: 'title 2' },
        { id: 3, title: 'title 3' },
        { id: 4, title: 'title 4' },
        { id: 5, title: 'title 5' },
        { id: 6, title: 'title 6' },
        { id: 7, title: 'title 7' },
        { id: 8, title: 'title 8' },
      ],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.colContainer}>
        <View style={styles.tiles}>
          <ScrollView contentContainerStyle={styles.tileList}>
            {this.state.recipes.map((recipe) => (
              <RecipeTile recipe={recipe} key={recipe.id} />
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Add Recipe')}>
          <Text style={styles.buttonText}>Add Recipe</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default RecipeView;
