const Recipe = require('../models/recipe.model');

module.exports = {
    createRecipe: (req, res) => {
        Recipe.create(req.body)
        .then((newRecipe) => {
            res.status(201).json(newRecipe);
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in create', error: err });
        });
    },
    getRecipeById: (req, res) => {
        Recipe.findOne({ _id: req.params.id })
        .then((recipe) => {
            res.json(recipe);
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in findById', error: err });
        });
    },
    getRecipes: (req, res) => {
        Recipe.find({})
        .then((recipes) => {
            res.json(recipes);
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in findAll', error: err });
        });
    },
    deleteRecipe: (req, res) => {
        Recipe.deleteOne({ _id: req.params.id })
        .then((recipe) => {
            res.json(recipe);
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in delete', error: err });
        });
    },
    updateRecipe: (req, res) => {
        Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then((recipe) => {
            res.json(recipe);
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in update', error: err });
        });
    },
    };