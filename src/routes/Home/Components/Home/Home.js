import React, { Component } from 'react'
import sampleDishOneImg from 'img/sampleDishOne.jpg'
import sampleDishTwoImg from 'img/sampleDishTwo.jpg'
import sampleDishThreeImg from 'img/sampleDishThree.jpg'

import './Home.css'

class Home extends Component {
  render() {
    return (
      // <div className="jumbotron">
      //   <h1 className="display-4">Hello, world!</h1>
      //   <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      //   <hr className="my-4"></hr>
      //   <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      //   <a className="btn btn-primary btn-lg" role="button">Learn more</a>
      // </div>
      //
      // <div className="col-12 px-0 heroOne">
      //   <p className="col-7">Hi Winnie</p>
      // </div>
      <div>
        {/* Hero Picture */}
        {/* <div>
          <img className="col-12 px-0 img-fluid heroOne" src="./Picture/heroOne.jpg"></img>
        </div> */}
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={sampleDishOneImg} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={sampleDishTwoImg} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={sampleDishThreeImg} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>


        {/* <div id="carouselExampleSlidesOnly" className="carousel slide mt-3" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block img-fluid mh-50" src={sampleDishOneImg} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid mh-50" src={sampleDishTwoImg} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid mh-50" src={sampleDishThreeImg} alt="Third slide" />
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

export default Home
