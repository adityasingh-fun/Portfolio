import React from 'react'
import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work3.jpg";
import work4 from "../../assets/work4.jpg";
import work5 from "../../assets/work5.jpg";
import work6 from "../../assets/work6.jpg";
import './Works.css'


const Works = () => {
  return (
    <div className='works-container'>
      <h1>My Recent Works</h1>
      <div className="works-item-container">
        <div className="works-item">
            <img src={work1} alt="work1" />
        </div>
        <div className="works-item">
            <img src={work2} alt="work2" />
        </div>
        <div className="works-item">
            <img src={work3} alt="work3" />
        </div>
        <div className="works-item">
            <img src={work4} alt="work4" />
        </div>
        <div className="works-item">
            <img src={work5} alt="work5" />
        </div>
        <div className="works-item">
            <img src={work6} alt="work6" />
        </div>
      </div>
    </div>
  )
}

export default Works
