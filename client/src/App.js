import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Header from './components/Header';
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';
import Footer from './components/Footer';
import "./App.css";



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Header />
                <Routes> 
                    <Route exact path="/" element={<Search />} />
                    <Route exact path="/search" element={<Search />} />
                    <Route exact path="/saved" element={<Saved />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}


export default App;
