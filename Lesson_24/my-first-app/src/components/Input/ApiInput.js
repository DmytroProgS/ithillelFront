import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ApiInput({ onFetchData }) {
    const [endpoint, setEndpoint] = useState("people/1/");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = `https://swapi.dev/api/${endpoint}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            onFetchData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <form className="d-flex align-items-center p-3" onSubmit={handleSubmit}>
            <label>https://swapi.dev/api/</label>
            <input
                type="text"
                id="userInput"
                name="userInput"
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
