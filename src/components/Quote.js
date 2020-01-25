import React, { Component } from 'react'

export default class Quote extends Component {
  render() {
    //console.log("props of Quote", this.props)
    return (
      <div>
        <p>{this.props.quoteText}</p>
        <p>By:{this.props.quoteAuthor}</p>
      </div>
    )
  }
}
