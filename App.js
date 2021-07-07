import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeView from './components/recipeView';
import AddRecipe from './components/addRecipe';
import Recipe from './components/recipe';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recipes" component={RecipeView} />
      <Stack.Screen name="Add Recipe" component={AddRecipe} />
      <Stack.Screen name="My Recipe" component={Recipe} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
