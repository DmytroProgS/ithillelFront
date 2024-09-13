import './App.css';
import React, { useState } from 'react';
import Title from './components/Title/Title';
import ApiInput from './components/Input/ApiInput';
import Textarea from './components/Input/Textarea';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [data, setData] = useState({});

    const handleFetchData = (fetchedData) => {
        setData(fetchedData);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Title text="SWAPI" />
                <ApiInput onFetchData={handleFetchData} />
                <Textarea text={data} />
            </header>
        </div>
    );
}

export default App;
