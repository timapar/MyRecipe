import React, { Component } from 'react';
import { View, TextInput, ScrollView, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../styles/';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredients: '',
      instructions: '',
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeIngredients = this.onChangeIngredients.bind(this);
    this.onChangeInstructions = this.onChangeInstructions.bind(this);
    this.onSubmitRecipe = this.onSubmitRecipe.bind(this);
  }

  onChangeTitle(e) {
    this.setState({ title: e });
  }

  onChangeIngredients(e) {
    this.setState({ ingredients: e });
  }

  onChangeInstructions(e) {
    this.setState({ instructions: e });
  }

  onSubmitRecipe() {
    const data = this.state;
    axios
      .post('http://192.168.1.7:1337/new-recipe', { data })
      .then(() => this.props.navigation.navigate('Recipes'))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <View style={styles.colContainer}>
        <View style={styles.tiles}>
          <ScrollView>
            <View style={styles.colContainer}>
              <Text style={styles.inputLabels}>Title</Text>
              <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder="Click here to add your title"
                onChangeText={this.onChangeTitle}
              />
            </View>
            <View style={styles.colContainer}>
              <Text style={styles.inputLabels}>Ingredient List</Text>
              <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder="Click here to add your ingredients"
                onChangeText={this.onChangeIngredients}
              />
            </View>
            <View style={styles.colContainer}>
              <Text style={styles.inputLabels}>Instructions</Text>
              <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder="Click here to add your instructions"
                onChangeText={this.onChangeInstructions}
              />
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.onSubmitRecipe}>
          <Text style={styles.buttonText}>Submit Recipe</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddRecipe;
