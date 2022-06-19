import React from "react";
import "../PagesCSS/Home.css";
import { Link, NavLink } from "react-router-dom";
import jobSearch from "../Images/jobSearch.jpg";
import white from "../Images/white.jpg";
import pink from "../Images/pink.jpg";

function Home() {
  return (
    <section>
      <div className="home-section1">
        <img src={pink} alt="pink" className="pink-img" />
        <div className="home-heading1">
          Too many jobs ? <br /> <br /> Too many requirements  ? <br /> <br />
        </div>
      </div>

      <div className="home-img1">
        <img src={jobSearch} alt="home" className="home-img1" />
      </div>

      <div className="white-img">
        <img src={white} alt="white" className="white-img" />
        <div class="text-on-img">
          CareerKick is here to find the perfect job for you !
        </div>
      </div>

      <div className="home-section2">
        <h1 className="home-heading2">1 &emsp;&emsp;&emsp;Upload your VCs</h1>
        <br />
        <h1 className="home-heading2">2 &emsp;&emsp;&emsp;Apply constraints</h1>
        <br />
        <h1 className="home-heading2">3 &emsp;&emsp;&emsp;Choose your job</h1>
      </div>

      <div className="home-section3">
        <p className="home-heading3">
          <NavLink to="/jobs">
            <button className="home-button">Get Started !</button>
          </NavLink>
        </p>
      </div>
    </section>
  );
}

export default Home;
