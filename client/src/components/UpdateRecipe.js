import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
function UpdateRecipe() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState ({});
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
            console.log('ERROR Response Data', err.response.data);
            setErrors(err.response.data.error.errors);
        });
    };
    return (
        <form class="form" onSubmit={submitHandler}>
        <label>Title:</label>
        <input id="sec" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        {errors.title && <p className="text-danger">{errors.title.message}</p>}
        <br/>
        <label>Ingredients:</label>
        <input id="sec" type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        {errors.ingredients && <p className="text-danger">{errors.ingredients.message}</p>}
        <br/>
        <label>Description:</label>
        <input id="sec" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}
        <br />
        <input class="button" type="submit" value="Update Recipe" />
        </form>
    );
}

export default UpdateRecipe;