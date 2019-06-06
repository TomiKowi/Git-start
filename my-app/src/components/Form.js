import React from 'react';

const Form = (props) => {
    return (
        <button onClick={props.click} className="searchButton">Wyszukaj pieska</button>
    );
}

export default Form;