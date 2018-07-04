import React, { Component } from 'react'
import cookLaughTwoimg from 'img/cookLaughTwo.jpg'
import './About.css'

class About extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <img className="col-12 px-0 img-fluid" src={cookLaughTwoimg} alt="about"></img>
        </div>
        <div className="column justify-content-center text-left bg-light">
          <div className="m-3 ">
            <div>
              <h2 className="mt-3">Our Mission</h2>
              <p>To make healthy food more accessable to physically limited people
                 in the relaxing enviroment of their own home.</p>
            </div>
            <div>
              <h2>Story</h2>
              <p>After cooking for people for more than 50 years, Victor Fung understands
                there are lot of people who are homebound or have special needs that
                prevent them from enjoying food.
                If they

                wants to be able
              to help people who are not able to cook for themselve. They may not be eat out
              because of the lack of mobility or have special restrictions in their diet.
            Victor's passion is to let them eat at the comfort of their own home and enjoy homestyle
            Chinese food without any health concern.</p>
            </div>
            <div>
              <h2>People served</h2>
              <li>Elderly who want to enjoy their time with family and friends at the
              comfort of their own home without endangering themselves during the process
              of cooking.</li>
              <li>People who have cancers or long term disease and lost their appetite.</li>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default About
