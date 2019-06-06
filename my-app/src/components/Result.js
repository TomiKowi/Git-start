import React from 'react';

const Result = (props) => {

    const { image } = props

    return (
        <div>
            {image ? <img src={image} alt="Random Dog" /> : null}
        </div>
    );
}

export default Result;