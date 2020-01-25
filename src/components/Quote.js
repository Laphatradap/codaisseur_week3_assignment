import React, { Component } from 'react'

export default class Quote extends Component {
  state = {
    likeColor: null
  }

  likeClicked = () => {
    this.setState({
      likeColor: "green"
    })
  }

  dislikeClicked = () => {
    this.setState({
      likeColor: "red"
    })
  }

   
  render() {
    const {quoteText, quoteAuthor} = this.props
   
    return (
      <div>
       <p style={{color:this.state.likeColor}}>{quoteText}</p>
       <p style={{color:this.state.likeColor}}>By:{quoteAuthor}</p>
       <button onClick={this.likeClicked}>Like</button>
       <button onClick={this.dislikeClicked}>Dislike</button>
      </div>
    )
  }
}
