import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function NewRecipe() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [description, setDescription] = useState([]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:8000/api/recipes', {
            title,
            ingredients,
            description,
        })
        .then((res) => {
            navigate('/');
        })
        .catch((err) => {
            console.log('ERROR Response Data', err.response.data);
            setErrors(err.response.data.error.errors);
        });
    };
    return (
        <form onSubmit={submitHandler}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        {errors.title && <p className="text-danger">{errors.title.message}</p>}
        <label>Ingredients:</label>
        <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        {errors.ingredients && <p className="text-danger">{errors.ingredients.message}</p>}
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}

        <br />
        <input type="submit" value="Add Recipe" />
        </form>
    );
}

export default NewRecipe;