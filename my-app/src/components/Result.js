import React from 'react';
import '../Result.css';

const Result = (props) => {

    const { image, addClick } = props

    return (
        <div className="resultContainer">
            <div className="imageContainer">
                {image ? <img src={image} alt="Random Dog" /> : null}
            </div>
            <button onClick={addClick}>Dodaj pieska do kolekcji</button>
        </div>
    );
}

export default Result;