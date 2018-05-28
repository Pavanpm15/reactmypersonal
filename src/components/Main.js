import React, { Component } from 'react';
import './../App.css';

import Landing from './Landing';
import About from  './About';
import Mywork from './Mywork';
import Contact from './Contact';

class Main extends Component {
  render() {
    return (
      <div>
        <Landing />
        <About />
        <Mywork />
        <Contact />
      </div >
    );
  }
}

export default Main;
