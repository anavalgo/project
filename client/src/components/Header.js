import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
function Header() {
    return (
        <header>
        <h1> Recipes Club </h1>
        <NavLink className="nav-link" to="/">
            Home
        </NavLink>
        <span> | </span>
        <NavLink className="nav-link" to="/new">
            Add a new Recipe
        </NavLink>
        </header>
    );
}

export default Header;