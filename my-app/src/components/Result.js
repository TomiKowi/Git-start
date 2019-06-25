import React from 'react';
import '../styles/Result.css';

const Result = (props) => {

    const { image, addClick } = props

    return (
        <div className="rightContainer">
            <div className="resultContainer">
                <div className="imageContainer">
                    {image ? <img src={image} alt="Random Dog" /> : null}
                </div>
                {image ? <button className="addToFavorites" onClick={addClick}>Dodaj pieska do kolekcji</button> : null}
            </div>
        </div>
    );
}

export default Result;