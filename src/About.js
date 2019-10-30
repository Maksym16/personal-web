import React from 'react';

export default function About() {
  return (
    <div className="about" id="about">
      <header>
        <h1 className="section-head">Who I Am</h1>
      </header>
      <img
        src="/Users/max/Desktop/personalWeb/max/public/IMG_3614.JPG"
        alt=""
      />
      <div className="about-description">
        <p>
          Born and raised in the NYC area, my interest in computers started in
          middle school, when I needed to upgrade my Mother's computer with a
          new video card. 17 years later, equipped with a degree in Computer
          Information Systems, I'm on a mission to create enjoyable web
          experiences by writing clean, user-friendly applications.
        </p>
        <p>
          With over 9 years of experience as an IT professional, I've developed
          the problem solving and analytical skills necessary to tackle
          difficult bugs, and troubleshoot effectively.
        </p>
        <p>Please check out my project work below!</p>
      </div>
    </div>
  );
}
