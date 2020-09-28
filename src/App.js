import React, {useState, useEffect} from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  const APP_ID = "94dd0300";
  const APP_KEY = "a107ebb0bbcb93d7634e51c4b84cecd9";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');

  useEffect( () => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits); //Store the objects in the var recipes
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className = "App">
      <head>
        <title className="page-title">Search recipes and more!</title>
      </head>
      <form onSubmit= {getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h1 className="catch-phrase">What are you craving?</h1>
      <p className="info">You can make up to five searches per minute on any dish or ingredient.</p>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label} 
          title = {recipe.recipe.label} 
          calories = {Math.round(recipe.recipe.calories)}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          url={recipe.recipe.url}
          />
        ) )}
      </div>
      <p className="creds">Search bar powered by Edamam API</p>
      <p className="creds">Kamal Ali ©2020</p>
    </div>
  )

}

export default App;