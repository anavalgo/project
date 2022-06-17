const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is needed!'],
            unique: true, 
        },

        ingredients: {
            type: String,
            required: [true, 'Ingredients are required!'],
        },

        description: {
            type: String,
            required: [true, 'Recipe Description is required'], 
            },
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;