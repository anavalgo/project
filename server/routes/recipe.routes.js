const RecipeController = require('../controllers/recipe.controller');

module.exports = (app) => {
    app.post('/api/recipes', RecipeController.createRecipe);
    app.get('/api/recipes', RecipeController.getRecipes);
    app.get('/api/recipes/:id', RecipeController.getRecipeById);
    app.put('/api/recipes/:id', RecipeController.updateRecipe);
    app.delete('/api/recipes/:id', RecipeController.deleteRecipe);
};