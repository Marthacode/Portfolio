import React from "react";
import avater1 from './avater1.jpg'
import { Link } from 'react-router-dom'

const Home=()=> {
  return (
    <div className="home">
      <div className="container ">
        <div className="row mt-5  d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <img className="mee img-fluid" src={avater1} alt="me" />
          </div>
          <div className="col-md-6 text-light">
            <h3>HI THERE!</h3>
            <h2>I'M <span className="text-warning">A FRONTEND DEVELOPER</span></h2>
            <p>I am Martha, a Frontend Web Developer and a UI/UX enthusiast, based in Benue State, Nigeria.</p>
            <p>I strive to build beautiful and Responsive Web applications. </p>
            <Link to="/about" className="btn btn-warning btn-large">MORE ABOUT ME</Link>
            <Link to="/portfolio" className="btn btn-outline-warning btn-large ml-4">PORTFOLIO</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;