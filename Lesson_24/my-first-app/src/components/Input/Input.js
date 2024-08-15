import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Input() {
    const apiUrl = "https://swapi.dev/api/";
    const inputInfo = "people/1/";

    return (
        <form className="d-flex align-items-center p-3">
            <label>{apiUrl}</label>
            <input
                type="text"
                id="userInput"
                name="userInput"
                placeholder={inputInfo}
            />
            <button type="submit" className="btn btn-primary">
                Get Info
            </button>
        </form>
    );
}

export default Input;
