import React from 'react';
import '../Result.css';

const Result = (props) => {

    const { image, addClick } = props

    return (
        <div className="resultContainer">
            <div className="imageContainer">
                {image ? <img src={image} alt="Random Dog" /> : null}
            </div>
            {image ? <button className="addToFavorites" onClick={addClick}>Dodaj pieska do kolekcji</button> : null}

        </div>
    );
}

export default Result;