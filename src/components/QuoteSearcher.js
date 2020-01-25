import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    fetching: true,
    loading: "",
    quotes: []
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://quote-garden.herokuapp.com/quotes/search/tree"
      );
      const parseData = await response.json();
      const quoteData = parseData.results;
      if(!quoteData) {
        this.setState({loading: "Loading"})
      } else {
        this.setState({
          fecthing: false,
          quotes: quoteData
        })

      }
     
    } catch (error) {
      console.log(error);
    }
  };


  render() {
    console.log(this.state.quotes)

    const data = this.state.quotes.map(quote => {
      return (
        <Quote 
        quoteText = {quote.quoteText}
        quoteAuthor = {quote.quoteAuthor}
        />
      )
    })
    return (
      <div>
        {data}
      </div>
    );
  }
}

// const quotes = Object.values(quoteData)

// // const quotes = quoteData.map(quote => quote)
// // console.log(quotes)

// const quoteText = quoteData.map(quote => quote.quoteText)
// const quoteAuthor = quoteData.map(quote => quote.quoteAuthor)
// console.log("quoteAuthor", quoteAuthor)
// console.log("quoteText", quoteText )

// const rQuote = {};
// rQuote[quote.quoteText] = quote.quoteAuthor;
// return rQuote;


// const quotes = quoteData.map(quote => {
//   this.setState({
//     quotes: [
//       ...this.state.quotes,
//       {
//         text: quote.quoteText,
//         author: quote.quoteAuthor
//       }
//     ]       
//   })
// })