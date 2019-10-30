import React from 'react';

export default function Contacts() {
  return (
    <section className="contact" id="contact">
      <div className="contact-details-container">
        <h1 className="section-head">Say Hello!</h1>
        <h4>
          If you'd like to work with me, please
          <span>
            <a href="mailto:mfedorenko16@gmail.com" target="_blank">
              reach out!
            </a>
          </span>
        </h4>
        <div className="contact-details">
          <div className='cont-info'>
            <span
              className="iconify-info"
              data-icon="ic:baseline-alternate-email"
              data-inline="false"
            ></span>
            <h4>mfedorenko16@gmail.com</h4>
          </div>
          <div className='cont-info'>
            <span
              className="iconify-info"
              data-icon="dashicons:phone"
              data-inline="false"
            ></span>
            <h4>360.947.4967</h4>
          </div>
          <div className='cont-info'>
            <span
              className="iconify-info"
              data-icon="el:github"
              data-inline="false"
            ></span>
            <a href="https://github.com/Maksym16" target="_blank">
              Github
            </a>
          </div>
          <div className='cont-info'>
            <span
              className="iconify-info"
              data-icon="ant-design:linkedin-fill"
              data-inline="false"
            ></span>
            <a
              href="https://www.linkedin.com/in/maksym-fedorenko/"
              target="_blank"
            >
              Lnkedin
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}

