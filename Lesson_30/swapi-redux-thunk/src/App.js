// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import Store from '../src/components/Store/Store';
import Title from './components/Title/Title';
import ApiInput from './components/Input/ApiInput';
import Textarea from './components/Input/Textarea';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Title text="SWAPI" />
                <ApiInput />
                <Textarea />
                <Footer />
            </header>
        </div>
    );
}

function WrappedApp() {
    return (
        <Provider store={Store}>
            <App />
        </Provider>
    );
}

export default WrappedApp;
