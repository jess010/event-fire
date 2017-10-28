import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import getEventListeners from '../utils/event-listeners'

//import jsdom from 'jsdom'
//const { JSDOM } = jsdom

/**
 * Home Component:
 * Has search bar and button to retrieve events associated with that thing.
 * Needs state to contain the
*/
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    event.preventDefault()
    const text = event.target.value;
    this.setState({
      input: text
    });
  }

  handleSubmit (event) {
    event.preventDefault()
    const url = this.state.input // if time, add error messaging to catch things that aren't URLs
    let pageTestId;
    this.setState({input: ''})

    axios.post('/api/pageTests', {url})
    .then(pt => {
      pageTestId = pt.data.id
    })
    .then(_ => this.setState({doc: ''})) //shouldn't this be input?
    .catch(err => console.log(err))

    axios.post('api/results', {url})
    .then(_ => this.props.history.push(`/test/${pageTestId}`))
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div className='search'>
        <img className='icon-img' src="/img/eventfire1.png"></img>
        <h1>Event Fire</h1>
        <form className='form-horizontal' onSubmit={this.handleSubmit}>
          <label>Enter URL</label>
          <input
            className="form-control input-sm"
            onChange={this.handleChange}
            name="url"
          />
          <button className='btn btn-default'>Events</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Home)
     // window.location.href = url
    // setTimeout(function () {console.log(window)}, 3000)


