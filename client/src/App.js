import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Header from './components/Header';
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';
import Footer from './components/Footer';
import "./App.css";



function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Header />
                <Switch> 
                    <Route exact path="/" component={Search} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/saved" component={Saved} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}


export default App;
