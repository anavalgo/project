import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:8000/api/recipes')
        .then((res) => {
            setRecipes(res.data);
        })
        .catch((err) => {
            console.log('ERROR IN GET ALL', err);
        });
    }, []);
    const handleDelete = (recipeID) => {
        axios
        .delete(`http://localhost:8000/api/recipes/${recipeID}`)
        .then((res) => {
            console.log(res);
            setRecipes(recipes.filter((recipe) => recipe._id !== recipeID));
        })
        .catch((err) => {
            console.log(err);
        });
    };
    return (
        <div className="container">
        {recipes.map((recipe) => (
            <div className="recipe" key={recipe._id}>
            <h2>{recipe.title}</h2>
            <br />
            <Link to={`/recipe/${recipe._id}`}> Description</Link>
            <span> | </span>
            <Link to={`/recipe/edit/${recipe._id}`}> Update</Link>
            <br />
            <button onClick={() => handleDelete(recipe._id)}>Delete</button>
            </div>
        ))}
        </div>
    );
}

export default RecipeList;