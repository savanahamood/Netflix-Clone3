import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import MovieList from './components/MovieList';

import Header from './components/Header';
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trending" element={<MovieList />} />

            </Routes>

        </>
    );
}
export default App;