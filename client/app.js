import history from './history'
// unsure as to whether we are likely to need history. We may well, with the VisualEvent shenanigans

import React from 'react'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import { Home } from './containers'
import { Navbar } from './components'


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

          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    </Router>
  )
}



// {
//   isLoggedIn &&
//     <Switch>
//       {/* Routes placed here are only available after logging in */}
//       <Route path='/home' component={UserHome} />
//     </Switch>
// }
