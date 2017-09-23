import React, { Component } from 'react';
import { Link } from 'react-router-dom'

/**
 * Home Component:
 * Has search bar and button to retrieve events associated with that thing.
 * Needs state to contain the
*/
export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    event.preventDefault()
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <div className='search'>
        <form onSubmit={this.handleSubmit}>
          <label>Enter URL</label>
          <input
            onChange={this.handleChange}
            value={this.state.input}
            name="url" />
          <button>Events</button>
        </form>
      </div>
    )
  }
}

