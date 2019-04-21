import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay)

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
      <ul className="topnav">
        <li className="navbrand"> <a href="/">Resonate</a></li>
        <li className="navlibrary"> <a href="/library">Library</a></li>
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
