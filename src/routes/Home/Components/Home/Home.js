import React, { Component } from 'react'
import heroOneImg from 'img/heroOne.jpg'
import chefIconSvg from 'img/chef.svg'
import cateringIconSvg from 'img/catering.svg'
import meetingIconSvg from 'img/meeting.svg'
import IconCard from './IconCard/IconCard'
import './Home.css'
// import sampleDishOneImg from 'img/sampleDishOne.jpg'
// import sampleDishTwoImg from 'img/sampleDishTwo.jpg'
// import sampleDishThreeImg from 'img/sampleDishThree.jpg'

const iconsummary = [{
  icon: chefIconSvg,
  title: `Personal Chef`,
  description: <p className="text-center">When you want Chinese food at the comfort of your house but you
    don't have time or the ability to cook and enjoy your time with
    the guests, you need a personal chef. <strong>Victor Fung </strong>
    can cook the food for you.</p>
},{
  icon: cateringIconSvg,
  title: `Catering`,
  description: <p className="text-center">When you want to bring Chinese food to your friend's house but
    you don't have the time or the ability to cook, <strong>Victor
    Fung </strong>can cook the food for you.</p>
},{
  icon: meetingIconSvg,
  title: `Meet the Chef`,
  description: <p className="text-center"><strong>Victor Fung </strong>has more than 50 years of cooking as
    a personal chef and in restaurants.</p>
}]

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
        <div>
          <img className="col-12 px-0 img-fluid heroOne" src={heroOneImg}></img>
        </div>
        {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner heights">
            <div className="carousel-item active">
              <img className="d-block w-80 mx-auto" src={sampleDishOneImg} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-80 mx-auto" src={sampleDishTwoImg} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-80 mx-auto" src={sampleDishThreeImg} alt="Third slide" />
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
        </div> */}


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
        <div className='container my-5'>
          <div className='row'>
            {iconsummary.map((iconsummary, index) => {
              return (
                <IconCard key={index} {...iconsummary} />
              )
            })}
          </div>
        </div>

        {/* Parallax scrolling */}
        <div className="parallax"></div>

        {/* form */}
        <div className="card">
          <form>
            <div className="form-group">
              <label for="inputName">Name</label>
              <input type="name" className="form-control" id="inputName" aria-describedby="inputName" placeholder="Enter Name" />
            </div>
            <div className="form-group">
              <label for="inputEmail">Email Address</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="Enter Email Address" />
            </div>
          </form>
        </div>

        <div className="container-fluid footer">

          {/* Footer */}
          <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </div>
      </div>
    )
  }
}

export default Home
