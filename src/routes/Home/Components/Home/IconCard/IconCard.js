import React, { Component } from 'react'
import PropTypes from 'prop-types'

class IconCard extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="col-12 col-md-4 px-3 ">
        <img className="icon my-3" src={this.props.icon}></img>
        <h3 className="text-center textcolor">{this.props.title}</h3>
        <div>{this.props.description}</div>
      </div>
    )
  }
}

export default IconCard
