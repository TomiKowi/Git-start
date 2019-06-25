import React from 'react';
import '../FavoriteDogs.css'


const Favorite = (props) => <div className="imageFavoriteDogsContainer"><img src={props.content} alt="FavoriteDog" /><button className="removeButton" onClick={props.remove}>Usuń</button></div>

const maxNumber = 7;


const FavoriteDogs = (props) => {

    const { favorites, removeClick } = props;

    const Favorites = favorites.map(favorite => <Favorite remove={removeClick} key={favorite} content={favorite} />);

    const numbers = favorites.length;

    return (
        <div className="favoriteContainer">
            <h3>Twoja kolekcja piesków {`${numbers}/${maxNumber}`}</h3>
            <div className="favoriteDogsContainer">
                {Favorites}
            </div>
        </div>
    );
}

export default FavoriteDogs;