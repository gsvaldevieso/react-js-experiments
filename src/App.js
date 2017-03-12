import React, { Component } from 'react';
import UserImage from './UserImage';
import Menu from './Menu';
import Footer from './Footer';
import Post from './Post';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      /*<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <UserImage />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
      <div class="container">

        <header>
          <h1>Uma rede social hipotética com ReactJS</h1>
        </header>
        
        <Menu />
        
        <article>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </article>

        <Footer />

      </div>
    );
  }
}

export default App;
