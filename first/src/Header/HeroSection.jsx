import React from "react";
import "./hero.css";
import logo from "../Header/images/yussif.jpg";
import head from "../Header/images/pexels-pixabay-459653.jpg";

export default function HeroSection() {
  return (
    <>
      <nav>
        <div>
          <h2>Company</h2>
        </div>
        <div className="bar">
          <a href="">Welcome</a>
          <a href="">Help</a>
          <a href="">Blog</a>
          <a href="">Services</a>
          <a href="">Contact</a>
          <a href="">
          <a href=""><button>Log in</button></a>  
          </a>
        </div>
      </nav>
      <div className="home">
        <div className="title">
          <h1>Youssef Ahmed</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere provident quae incidunt dolore neque? Officia facilis magni, assumenda dicta eligendi excepturi laborum, maxime ipsa, repellendus nihil magnam rem veritatis commodi?</p>
          <button>Ctl</button>
        </div>
        <img src={head} alt="" />
      </div>
      <hr />
      <div className="about">
        <h2>Youssef Ahmed</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi asperiores dignissimos ipsum natus, cupiditate id autem quisquam iure, incidunt eligendi vel voluptatem fugit nostrum! Ea architecto beatae laborum quasi quibusdam.</p>
        <button>yusif</button>
      </div>
      <hr />
      <div className="blog">
      <img src={head} alt="" />
      <div className="title">
          <h1>Youssef Ahmed</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere provident quae incidunt dolore neque? Officia facilis magni, assumenda dicta eligendi excepturi laborum, maxime ipsa, repellendus nihil magnam rem veritatis commodi?</p>
          <button>Ctl</button>
        </div>

      </div>
      <hr />
      <section className="services-section"> 
      <div className="container">
        <h2>These are my services</h2>
        <div className="services-container">
          <div className="service-card">
            <img src={head} alt="Service 1" /> 
            <div className="service-details">
              <h3 className="service-title">Service Title 1</h3>
              <p className="service-description">Brief description of service 1.</p>
            </div>
            <a href="" className="cta-button">Order Now</a>
          </div>
          <div className="service-card midd">
            <img src={head} alt="Service 2" />
            <div className="service-details">
              <h3 className="service-title">Service Title 2</h3>
              <p className="service-description">Brief description of service 2.</p>
            </div>
            <a href="" className="cta-button">Order Now</a>
          </div>
          <div className="service-card">
            <img src={head} alt="Service 3" />
            <div className="service-details">
              <h3 className="service-title">Service Title 3</h3>
              <p className="service-description">Brief description of service 3.</p>
            </div>
            <a href="" className="cta-button">Order Now</a>
          </div>
        </div>
      </div>
    </section>
    <br/><br/>

    </>
  );
}
