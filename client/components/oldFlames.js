import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class OldFlames extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageTests: []  //aka the flames that are old
    }
    this.fetchOldFlames = this.fetchOldFlames.bind(this)
  }

  componentDidMount () {
    this.fetchOldFlames()
  }

  fetchOldFlames () {
    axios.get('/api/pageTests')
    .then(pts => this.setState({
      pageTests: pts.data
    }))
    .catch(err => console.error(err))
  }


  render () {
    const columns = [{
      Header: 'Test ID',
      accessor: 'id'
    }, {
      id: 'testUrl',
      Header: 'Test URL',
      accessor: dataPoint => <Link to={`/test/${dataPoint.id}`}>{dataPoint.url}</Link>
    }]

    return (
      <div id="old-flames">
        <h1>Old Flames</h1>
        <p>Click on the links below to view old page tests:</p>
        <ReactTable data={this.state.pageTests} columns={columns} />
      </div>
    )
  }

}
