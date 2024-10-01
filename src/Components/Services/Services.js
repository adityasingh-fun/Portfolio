import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* services list description */}
        <div className="services-desc-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
            As a Full Stack Developer, I provide comprehensive web development
            services that cover both frontend and backend aspects of an
            application. Here’s how I can help:
          </p>
          <button>Hire Me</button>
        </div>
        {/* services list items */}
        <div className="services-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Frontend Development</h3>
              <p>
                I build responsive, user-friendly interfaces using HTML, CSS,
                and JavaScript frameworks like React or Angular. I ensure that
                your website or application looks great and functions smoothly
                across all devices.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Backend Developmnet</h3>
              <p>
                I handle the server-side logic, creating robust APIs and
                managing databases (SQL, MongoDB). Using technologies like
                Node.js and Express, I ensure efficient data processing,
                security, and scalability.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>Fullstack Development</h3>
              <p>
                From conceptualization to deployment, I can build entire web
                applications from the ground up, ensuring that both the frontend
                and backend components integrate seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
