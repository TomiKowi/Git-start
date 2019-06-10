import React from 'react';
import '../Result.css';

const Result = (props) => {

    const { image } = props

    return (
        <div className="resultContainer">
            <div className="imageContainer">
                {image ? <img src={image} alt="Random Dog" /> : null}
            </div>
        </div>
    );
}

export default Result;