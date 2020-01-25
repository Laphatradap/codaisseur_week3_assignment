import React, { Component } from 'react'
import PropTypes from "prop-types"


export default class Searchbar extends Component {

  static propTypes = {
    searchQuote: PropTypes.func.isRequired
  }

  state = {
    search: ""
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.search) {
      this.props.searchQuote(this.state.search)
    } else {
      return;
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          size="30" 
          name="search"
          onChange={this.handleChange}
          value={this.state.search}
          />
          <input  
          type="submit"
          value="Search!"/>
        </form>
      </div>
    )
  }
}
