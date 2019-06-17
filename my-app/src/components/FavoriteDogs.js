import React from 'react';
import '../FavoriteDogs.css'


const Favorite = (props) => <div className="imageFavoriteDogsContainer"><img src={props.content} alt="" /></div>

const FavoriteDogs = (props) => {

    const Favorites = props.favorites.map(favorite => <Favorite content={favorite} />)

    return (
        <div className="favoriteDogsContainer">
            {Favorites}
        </div>
    );
}

export default FavoriteDogs;