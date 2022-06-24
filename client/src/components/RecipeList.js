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
            <ul>
            <li><h2>{recipe.title}</h2></li>
            </ul>
            <br />
            <Link class="link" to={`/recipe/${recipe._id}`}> Description</Link>
            <span> | </span>
            <Link class="link" to={`/recipe/edit/${recipe._id}`}> Update</Link>
            <br />
            <br />
            <button class="button" onClick={() => handleDelete(recipe._id)}>Delete</button>
            </div>
        ))}
        </div>
    );
}

export default RecipeList;