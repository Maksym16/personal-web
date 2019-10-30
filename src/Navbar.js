import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header-bar">
      <nav id="nav-bar" className="nav-bar-show">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>

        <li>
          <a href="https://drive.google.com/file/d/12Cw0etjS2-8UfDmozIifMElhDfBaKNb3/view">
            Resume
          </a>
        </li>
      </nav>
    </div>
  );
}

