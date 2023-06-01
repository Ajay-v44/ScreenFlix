import React from 'react';
import NavBAr from './components/NavBar/NavBAr';
import Banner from './components/Banner/Banner';
import './App.css';
import RowPost from './components/RowPost/RowPost';
import RowPost2 from './components/RowPost/RowPost';
import Footer from './components/Footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Signup/Login';
function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes> <Route path="/login" element={<Login />} /></Routes>
                <NavBAr />
                <Banner />

                <RowPost title='SCREENFLIX ORIGINALS' />
                <RowPost title='Action Movies' isSmall />
                <RowPost2 title='Action Movies' isSmall />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
