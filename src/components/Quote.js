import React, { Component } from 'react'

export default class Quote extends Component {
  render() {
    const {quoteText, quoteAuthor} = this.props
   
    return (
      <div>
       <p>{quoteText}</p>
       <p>By:{quoteAuthor}</p>
      </div>
    )
  }
}
