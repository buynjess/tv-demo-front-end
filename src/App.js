import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import SiteNav from "./siteNav"

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <SiteNav/>   
          </Router>
      </div>
    );
  }
}

export default App;
