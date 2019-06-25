import React from 'react';
import '../styles/Form.css';

const Form = (props) => {
    return (
        <div className="searchForm">
            {props.image ? <button onClick={props.click} className="searchButton">Wyszukaj kolejnego pieska</button> : <button onClick={props.click} className="searchButton">Wyszukaj pieska</button>}
        </div>
    );
}

export default Form;