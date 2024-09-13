// src/components/Input/ApiInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../Actions/Actions.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function ApiInput() {
    const [endpoint, setEndpoint] = useState("people/1/");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchData(endpoint));
    };

    return (
        <form className="d-flex align-items-center p-3" onSubmit={handleSubmit}>
            <label>https://swapi.dev/api/</label>
            <input
                type="text"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
                placeholder="people/1/"
                className="form-control mx-2"
            />
            <button type="submit" className="btn btn-primary">
                Get Info
            </button>
        </form>
    );
}

export default ApiInput;
