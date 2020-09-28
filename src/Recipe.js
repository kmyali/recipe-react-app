import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, url}) => {
    return (
        <div className={style.recipe}>
            <h1>
                <a href={url}> {title} </a>
            </h1>
            <img className={style.image}src={image} alt={title}/>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
        </div>
    )
}

export default Recipe;