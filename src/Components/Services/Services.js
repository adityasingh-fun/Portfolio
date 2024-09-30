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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            necessitatibus aliquam excepturi corrupti eligendi placeat ipsa esse
            quaerat ea odit voluptatum officiis aperiam ullam repellat cumque
            dolores nesciunt quam, debitis sapiente. Iure optio, unde possimus
            illum ipsum deleniti eligendi ea!
          </p>
          <button>Hire Me</button>
        </div>
        {/* services list items */}
        <div className="services-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum neque ipsam consequatur fugit necessitatibus vero quam
                dolor deleniti illum similique. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Dolorum quibusdam nesciunt iste
                non explicabo rem assumenda animi ipsa molestias accusantium!
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Desktop Developmnet</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus quas modi ab. Praesentium possimus, delectus saepe
                placeat at accusamus sed ipsum incidunt cumque quibusdam sequi
                molestias ducimus magnam reiciendis excepturi! Ducimus aperiam
                soluta minus sunt error voluptatibus itaque, id explicabo.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>Desktop Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                unde eligendi esse nihil pariatur deserunt, voluptatum mollitia
                quos labore dolores, cumque, fugit sed illum consequatur iure.
                Explicabo temporibus animi similique officiis nobis ea nisi nam
                fugiat eum autem! Mollitia, quas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
