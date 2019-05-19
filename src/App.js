import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from 'bootstrap';

library.add(faPlay)

class App extends Component {
  render() {
    return (
      <div className="App">

      <div className="topnav">
        <nav className="navbar sticky-top navbar-custom">
          <a className="navbar-brand" href="/"><span className="navbar-icon"><ion-icon name="headset"></ion-icon></span>RESONATE</a>
          <div className="navbar-nav">
            <a class="nav-item nav-link" href="/library">LIBRARY</a>
          </div>
        </nav>
      </div>

       <main>
         <Route exact path="/" component={Landing} />
         <Route path="/library" component={Library} />
         <Route path="/album/:slug" component={Album} />
       </main>

       </div>
    );
  }
}

export default App;
