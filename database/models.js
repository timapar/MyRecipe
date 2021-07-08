const { pool } = require('./');

module.exports.getListOfAllRecipes = (usersID) => {
  const selectAllRecipesQryStr = `
    SELECT id, title, photo
    FROM recipes
    WHERE users_id = ${usersID}
    ORDER BY id DESC;
  `;

  return pool.query(selectAllRecipesQryStr);
};

module.exports.getRecipeDetails = (recipeID) => {
  const selectRecipeQryStr = `
    SELECT *
    FROM recipes
    WHERE id = ${recipeID};
  `;

  return pool.query(selectRecipeQryStr);
};

module.exports.addNewRecipe = ({ title, ingredients, instructions }) => {
  const insertRecipeQryStr = `
    INSERT INTO recipes(users_id, title, ingredients, instructions)
    VALUES (1, '${title}', '${ingredients}', '${instructions}')
    RETURNING id;
  `;

  return pool.query(insertRecipeQryStr);
};

module.exports.deleteRecipe = (recipeID) => {
  const deleteRecipeQryStr = `
    DELETE FROM recipes
    WHERE id = ${recipeID};
  `;

  return pool.query(deleteRecipeQryStr);
};
