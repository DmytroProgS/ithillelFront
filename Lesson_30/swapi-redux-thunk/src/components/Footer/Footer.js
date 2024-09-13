// src/components/Footer/Footer.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { clearData } from '../Actions/Actions.js';

function Footer() {
    const dispatch = useDispatch();

    const handleClearData = () => {
        dispatch(clearData());
    };

    return (
        <footer>
            <button onClick={handleClearData} className="btn btn-danger mt-3">
                Clear Data
            </button>
        </footer>
    );
}

export default Footer;
