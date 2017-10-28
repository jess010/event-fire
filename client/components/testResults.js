import React, { Component } from 'react';
import axios from 'axios'
//import { NavLink, Link } from 'react-router-dom'

/*
 * Test Results Component:
 * Relates to a specific page test, user is auto-directed here after entering a URL
*/

export default class TestResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: '',
    }
  }

  componentDidMount () {
    const pageTestId = this.props.match.params.pageTestId
    axios.get(`api/results/${pageTestId}`)
    .then(res => console.log(res))
    // .then(res => res.data)
    // .then(results => this.setState({ results }))
    // .then(_ => console.log(this.state.results))
    // .catch(err => console.error(err))
  }

  render () {
    return (
      <div className='test-results'>
        <h1>A respectable component</h1>
        {/*{this.state.results.map(result => {
          <p>{result}</p>
        })}*/}
      </div>
    );
  }
}
