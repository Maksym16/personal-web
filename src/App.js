import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Contacts from './Contacts';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <header>
            <div className="nav-bar">
              <Navbar />
            </div>
            <div className="welcome-container">
              <img
                src="/Users/max/Desktop/personalWeb/max/IMG_3614.JPG"
                alt=""
              />
              <h1 className="hello">Hello!</h1>
              <h1 className="welcome-message welcome-hidden">
                I'm
                <span>
                  <a
                    href="https://www.linkedin.com/in/maksym-fedorenko/"
                    target="_blank"
                  >
                    Maksym Fedorenko
                  </a>
                </span>
                , a software engineer and problem solver based out of New York,
                NY.
              </h1>
            </div>
          </header>
          <About />
          <Projects />
          <Skills />
          <Contacts />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
