//import history from './history'
// unsure as to whether we are likely to need history. We may well, with the VisualEvent shenanigans

//history={history} -> removed from 'Router' statement
import React from 'react'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'

import Home from './containers/home'
import Navbar from './components/navbar'


/**
 * COMPONENT
 */
export default function App () {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {/* Routes placed here are available to all visitors */}

          <Route path='/' component={Home}/>
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
