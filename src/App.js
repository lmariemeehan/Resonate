import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'; 
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="App">
    
       <main>
       <Route exact path="/" component={Landing} />       
       <Route path="/library" component={Library} />       
       <Route path="/album/:slug" component={Album} />       
       </main>      
       </div>  
       </div>  
       );  
     }
     }
       export default App;
