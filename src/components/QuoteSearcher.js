import React, { Component } from "react";
import Quote from "./Quote";
import Searchbar from "./Searchbar";

export default class QuoteSearcher extends Component {
  state = {
    loading: true,
    quotes: [],
    likedness: "",
    numLikes: 0,
    numDisLikes: 0,
    keyword: "tree"
  };

  getData = async () => {
    try {
      const response = await fetch(
        `https://quote-garden.herokuapp.com/quotes/search/${this.state.keyword}`
      );
      const parseData = await response.json();
      const quoteData = parseData.results;

      this.setState({
        loading: false,
        quotes: quoteData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => this.getData();

  searchQuote = searchKeyword => {
    this.setState(
      {
        keyword: searchKeyword
      },
      () => {
        this.getData();
      }
    );
  };


  handleClick = event => {
    const target = event.target
    if(target.id === 'like') {
      this.setState({
        numLikes: this.state.numLikes + 1,
        likedness: "green"
      })
    } else if (target.id === 'dislike') {
      this.setState({
        numDisLikes: this.state.numDisLikes + 1,
        likedness: "red"
      })

    }
  }  

  render() {
    //console.log("state of QuoteSearcher", this.state)
    const data = this.state.quotes.map(quote => {
      return (
        <div>
          <Quote
            quoteText={quote.quoteText}
            quoteAuthor={quote.quoteAuthor}
            quoteId={quote._id}
            key={quote._id}
            handleClick={this.handleClick}
          />
        </div>
      );
    });

    return this.state.loading ? (<div> Loading...</div>) : (
            <div>
             <Searchbar searchQuote={this.searchQuote}/>
            <div> Liked: {this.state.numLikes} /Disliked: {this.state.numDisLikes}</div>
            {data}
            </div>
          );
  }
  }