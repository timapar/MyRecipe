import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../styles/';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.route.params.recipeID,
      user: null,
      title: null,
      ingredients: null,
      instructions: null,
      photo: null,
    };
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  getDetailsOfRecipe(id) {
    return axios.get(`http://192.168.1.7:1337/recipe/${id}`);
  }

  deleteRecipe(id) {
    return axios.delete(`http://192.168.1.7:1337/recipe/${id}`);
  }

  componentDidMount() {
    this.getDetailsOfRecipe(this.state.id)
      .then((results) => {
        const recipe = results.data;
        this.setState({
          user: recipe.users_id,
          title: recipe.title,
          ingredients: recipe.ingredients,
          instructions: recipe.instructions,
          photo: recipe.photo,
        });
      })
      .catch((err) => {
        console.log('error with request');
        console.error(err.stack);
      });
  }

  render() {
    if (this.state.title) {
      return (
        <View style={styles.colContainer}>
          <View style={styles.tiles}>
            <ScrollView>
              <View style={styles.colContainer}>
                <Text style={styles.recipeTitle}>{this.state.title}</Text>
                <Text style={styles.recipeSubtitle}>Ingredients:</Text>
                <Text style={styles.recipeIngredients}>{this.state.ingredients}</Text>
                <Text style={styles.recipeSubtitle}>Instructions:</Text>
                <Text style={styles.recipeInstructions}>{this.state.instructions}</Text>
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.deleteRecipe(this.state.id)
                .then(() => this.props.navigation.navigate('Recipes'))
                .catch((err) => console.error(err.stack));
            }}
          >
            <Text style={styles.buttonText}>Delete Recipe</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Loading</Text>
        </View>
      );
    }
  }
}

export default Recipe;
