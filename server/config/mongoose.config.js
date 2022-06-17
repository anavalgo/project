const mongoose = require('mongoose');
const recipeDB = 'recipeDB';

mongoose
    .connect(`mongodb://localhost/${recipeDB}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Connected to MongoDB ${recipeDB}`);
    })
    .catch((err) => {
        console.log('DB CONNECTION ERROR', err);
    });