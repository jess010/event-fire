import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'

/**
 * Home Component:
 * Has search bar and button to retrieve events associated with that thing.
 * Needs state to contain the
*/
export default class Home extends Component {
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
    const text = event.target.value;
    this.setState({
      input: text
    });
  }

  handleSubmit (event) {
    event.preventDefault()
    const url = this.state.input // if time, add error messaging to catch things that aren't URLs
    this.setState({input: ''})
    // window.location.href = url
    // setTimeout(function () {console.log(window)}, 3000)
    axios.get(url)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    // const targetPage = window.open(url, 'targetWindow', "location=yes")
    // console.log(targetPage.document)

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



    // function createCORSRequest(method, url) {
    //   var xhr = new XMLHttpRequest();
    //   if ("withCredentials" in xhr) {
    //     // Check if the XMLHttpRequest object has a "withCredentials" property.
    //     // "withCredentials" only exists on XMLHTTPRequest2 objects.
    //     xhr.open(method, url, true);

    //   } else if (typeof XDomainRequest != "undefined") {

    //   // Otherwise, check if XDomainRequest.
    //    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    //   xhr = new XDomainRequest();
    //   xhr.open(method, url);

    //   } else {

    //     // Otherwise, CORS is not supported by the browser.
    //     xhr = null;

    //   }
    //   return xhr;
    // }

    // var xhr = createCORSRequest('GET', url);
    // if (!xhr) {
    //   throw new Error('CORS not supported');
    // }
    // console.log(xhr)
