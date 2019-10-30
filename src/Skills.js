import React from 'react';

export default function Skills() {
  return (
    <div className="skills-list">
      <div className="skills" id="skills">
        <header>
          <h1 className="section-head">My toolbox:</h1>
        </header>
        <ul className="skill-list">
          <li>
            <a href="https://www.ruby-lang.org/en/" target="_blank">
              <span
                className="iconify"
                data-icon="mdi:ruby"
                data-inline="false"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
            >
              <span
                className="iconify"
                data-icon="simple-icons:javascript"
                data-inline="false"
              ></span>
            </a>
          </li>
          <li>
            <a href="https://redux.js.org/" target="_blank">
              <span
                className="iconify"
                data-icon="simple-icons:redux"
                data-inline="false"
              ></span>
            </a>
          </li>
          <li>
            <a href="https://nodejs.org/en/" target="_blank">
              <span
                class="iconify"
                data-icon="ion:logo-nodejs"
                data-inline="false"
              ></span>
            </a>
          </li>

          <li>
            <a href="https://firebase.google.com/" target="_blank">
              <span
                class="iconify"
                data-icon="ion:logo-firebase"
                data-inline="false"
              ></span>
            </a>
          </li>
          <a href="https://reactjs.org/" target="_blank">
            <span
              className="iconify"
              data-icon="fa-brands:react"
              data-inline="false"
            ></span>
          </a>

          <li>
            <a href="https://www.postgresql.org/" target="_blank">
              <span
                className="iconify"
                data-icon="simple-icons:postgresql"
                data-inline="false"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
              target="_blank"
            >
              <span
                className="iconify"
                data-icon="typcn:html5"
                data-inline="false"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
            >
              <span
                className="iconify"
                data-icon="fa-brands:css3-alt"
                data-inline="false"
              ></span>
            </a>
          </li>
          <li>
            <a href="https://sequelize.org/master/index.html" target="_blank">
              <span
                class="iconify"
                data-icon="logos:sequelize"
                data-inline="false"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
