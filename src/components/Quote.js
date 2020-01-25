import React, { Component } from "react";

export default class Quote extends Component {
  // state = {
  //   likedness: null,
  //   numLikes: 0,
  //   numDisLikes: 0
  // };

  render() {
    const {
      quoteText,
      quoteAuthor,
      likedness,
      numLikes,
      numDisLikes,
      handleClick
    } = this.props;

    return (
      <div>
        <h2>
          Liked: {numLikes}/ DisLiked: {numDisLikes}
        </h2>
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
