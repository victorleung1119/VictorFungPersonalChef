import React, { Component } from 'react'
import { Link } from "react-router-dom";
import victorFungLogoSvg from 'img/logo.svg'
import './Header.css'
class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            <img src={victorFungLogoSvg} style={{height: '5rem'}}/>
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/About">Story</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Ourfood">Our Food</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
            </ul>
            <ul className="nav ml-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/Catering">Catering</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
