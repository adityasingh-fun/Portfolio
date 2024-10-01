import React from "react";
import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work3.jpg";
import work4 from "../../assets/work4.jpg";
import work5 from "../../assets/work5.jpg";
import work6 from "../../assets/work6.jpg";
import "./Works.css";

const Works = () => {
  return (
    <div className="works-container">
      <h1>My Recent Works</h1>
      <div className="works-item-container">
        <div className="works-item">
          <a href="https://expense-tracker-frontend-gilt.vercel.app/" target="blank">
            <img src={work1} alt="work1" />
          </a>
        </div>
        <div className="works-item">
        <a href="https://expense-tracker-frontend-gilt.vercel.app/" target="blank">
            <img src={work2} alt="work2" />
          </a>
        </div>
        <div className="works-item">
        <a href="https://expense-tracker-frontend-gilt.vercel.app/" target="blank">
            <img src={work3} alt="work3" />
          </a>
        </div>
        <div className="works-item">
        <a href="https://expense-tracker-frontend-gilt.vercel.app/" target="blank">
            <img src={work4} alt="work4" />
          </a>
        </div>
        <div className="works-item">
        <a href="https://expense-tracker-frontend-gilt.vercel.app/" target="blank">
            <img src={work5} alt="work5" />
          </a>
        </div>
        <div className="works-item">
        <a href="https://expense-tracker-frontend-gilt.vercel.app/" target="blank">
            <img src={work6} alt="work6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
