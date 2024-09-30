import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/profileImg.jpg"
import "./Header.css"

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Hey! I am </h1>
        <h2 className="fullname">Aditya Singh</h2>
        <h2>I am a {" "}</h2>
        <Typical
          steps={[
            "Fullstack Developer 🚀",
            1000,
            "Backend Developer 🏆",
            1000,
            "Frontend Developer 🔷",
            1000,
          ]}
          loop={Infinity}
          wrapper="b"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          quaerat sint recusandae, amet dolorem id, distinctio vero maxime
          eveniet temporibus laudantium voluptate dignissimos modi, suscipit
          placeat? Molestias ratione rerum, recusandae, dignissimos quo sapiente
          totam consequatur eaque doloremque voluptates commodi autem.
        </p>

        <div className="header-payment-container">
          <button>Hire Me</button>
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      <div className="profile-img-container">
        <img src={profileImg} alt="profile Image" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
