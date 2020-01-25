import React, { Component } from "react";

export default class Quote extends Component {

  render() {
    //console.log("props of Quote", this.props)
    const {
      quoteText,
      quoteAuthor,
      likedness,
      handleClick
    } = this.props;

    return (
      <div>
        <p style={{ color: likedness }}>
          {quoteText}
          <br></br>By:
          {quoteAuthor}
        </p>
        <div>
          <button id="like" onClick={handleClick}>
            Like
          </button>
          <button id="dislike" onClick={handleClick}>
            Dislike
          </button>
        </div>
      </div>
    );
  }
}
