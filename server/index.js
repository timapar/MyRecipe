const express = require('express');
const { addNewRecipe, getListOfAllRecipes, getRecipeDetails } = require('../database/models.js');
const app = express();
const port = process.env.PORT || 1337;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/all-recipes/:uid', (req, res) => {
  getListOfAllRecipes(req.params.uid)
    .then((results) => res.status(200).json(results.rows))
    .catch((err) => {
      console.error(err.stack);
      res.sendStatus(500);
    });
});

app.get('/recipe/:id', (req, res) => {
  getRecipeDetails(req.params.id)
    .then((results) => res.status(200).json(results.rows))
    .catch((err) => {
      console.error(err.stack);
      res.sendStatus(500);
    });
});

app.post('/recipe', (req, res) => {
  addNewRecipe(req.body.data)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error(err.stack);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`server listening at on port: ${port}`);
});
