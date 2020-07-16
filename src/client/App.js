import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';
import DefaultPage from './pages/DefaultPage';

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/admin" component={AdminPage} />
                    <Route path="/products/:id" component={ProductPage} />
                    <Route component={DefaultPage} />
                </Switch>
                <Footer />
            </>
        );
    }
}

// nested routes: https://stackoverflow.com/questions/41474134/nested-routes-with-react-router-v4-v5
// OR bootstrap tabs

export default App;
