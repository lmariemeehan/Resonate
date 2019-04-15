import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
      <ul class="topnav">
        <li class="navbrand"> <a href="/">Resonate</a></li>
        <li class="navlibrary"> <a href="/library">Library</a></li>
      </ul>
      </header>

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
