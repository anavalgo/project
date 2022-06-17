import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function Recipe() {
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    console.log('IDDD', id);
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/recipes/${id}`)
        .then((res) => {
            console.log('RECIPE', res.data);
            setRecipe(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    const handleDelete = () => {
        axios
        .delete(`http://localhost:8000/api/recipes/${id}`)
        .then((res) => {
            console.log(res);
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
        });
    };
    return (
        <div>
        <h2>{recipe.title}</h2>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Description: {recipe.description}</p>
        <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Recipe;