import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FoodCard extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="card border-success box-shadow mb-4">
        <img className="card-img-top" src={this.props.img} alt="Dishes"></img>
        <div className="card-body p-2 bgcolor" style={{ minHeight: `6.5rem`}}>
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default FoodCard
