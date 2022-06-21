import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';
import NewRecipe from './components/NewRecipe';
import UpdateRecipe from './components/UpdateRecipe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<RecipeList />} />
          <Route path="/new" element={<NewRecipe />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/recipe/edit/:id" element={<UpdateRecipe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;