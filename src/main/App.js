import React, { Component } from 'react';
import IndexStyles from './assets/theme/IndexStyles';
import Home from './views/Home';
import About from './views/About';
import Education from './views/Education';
import Project from './views/Project';
import Experience from './views/Experience';
import Footer from './components/Footer';
import './assets/css/responsive.css';
import './assets/css/ionicons.css';
import './assets/css/fluidbox.min.css';

class App extends Component {
  render() {
    return(
      <>
        <IndexStyles/>
        <Home/>
        <About/>
        <Experience/>
        <Project/>
        <Education/>
        <Footer/>
      </>
    );
  }
}

export default App;

