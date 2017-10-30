import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios';
//import { NavLink, Link } from 'react-router-dom'

/*
 * Test Results Component:
 * Relates to a specific page test, user is auto-directed here after entering a URL
*/

export default class TestResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
    }
    this.fetchResults = this.fetchResults.bind(this)
  }

  fetchResults () {
    const pageTestId = this.props.match.params.pageTestId
    return axios.get(`/api/results/test/${pageTestId}`)
    .then(res => res.data)
    .then(results => this.setState({ results }))
    .then(_ => console.log(this.state.results))
    .catch(err => console.error(err))
  }

  componentDidMount () {
    this.fetchResults()
  }

  render () {
    const columns = [{
      Header: 'Result ID',
      accessor: 'id'
    }, {
      Header: 'DOM Element',
      accessor: 'tagName'
    }, {
      Header: 'URL',
      accessor: 'href'
    }, {
      // id: 'shortInnerHTML',
      Header: 'Inner HTML',
      accessor: 'innerHTML'
      // acessor: d => d.innerHTML.trim()
    }, {
      Header: 'Outcome',
      accessor: 'outcome'
    }]

    return (
      <div className='test-results'>
        <h1>Results for Page Test</h1>
        {/*{this.state.results.map(result => {
          <p>{result}</p>
        })}*/}
        <ReactTable data={this.state.results} columns={columns} />
      </div>
    );
  }
}
