import React, { Component } from 'react';
import Navbar from './Navbar';
import './RecipeApp.css';
import RecipeList from './RecipeList' ;

class RecipeApp extends Component {
  render() {
    return (
        <div className="App">
            <Navbar />
            <RecipeList />
        </div>
    );
  }
}

export default RecipeApp;
