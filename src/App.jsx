import React from 'react';
import DataState from './context/dataState';
import Home from './pages/Homey';
import './styles/home.css';

const App = () => {
    return (
        <DataState>
            <Home />
        </DataState>
    );
};

export default App;
