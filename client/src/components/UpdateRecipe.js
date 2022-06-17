import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
function UpdateRecipe() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams();
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/recipes/${id}`)
        .then((res) => {
            console.log('RECIPE', res.data);
            setTitle(res.data.title);
            setIngredients(res.data.ingredients);
            setDescription(res.data.description);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:8000/api/recipes/${id}`, {
            title,
            ingredients,
            description,
        })
        .then((res) => {
            navigate('/');
        })
        .catch((err) => {
            console.log('ERROR', err);
        });
    };
    return (
        <form onSubmit={submitHandler}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Ingredients:</label>
        <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        
        
        <br />
        <input type="submit" value="Update Recipe" />
        </form>
    );
}

export default UpdateRecipe;