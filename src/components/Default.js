import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    return (
      <div  className="d-flex justify-content-center ">
        <div><h3>Oops. Page <strong> "{this.props.location.pathname}" </strong> was not found</h3></div>
      </div>
    )
  }
}
