import history from './history'
// unsure as to whether we are likely to need history. We may well, with the VisualEvent shenanigans

import React from 'react'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import { Home } from './containers'
import { Navbar, TestResults } from './components'


/**
 * COMPONENT
 */
export default function App () {
  return (
    <Router history={history}>
      <div>
        <Navbar/>
        <Switch>
          {/* Routes placed here are available to all visitors */}
          <Route exact path='/test/:pageTestId' component={TestResults}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    </Router>
  )
}

