import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav className="navbar sticky-top navbar-custom">
          <a className="navbar-brand" href="/"><span className="navbar-icon"><ion-icon name="headset"></ion-icon></span>RESONATE</a>
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/library">LIBRARY</a>
          </div>
        </nav>

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
