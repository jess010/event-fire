import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

/**
 * Navbar (Dumb) Component:
 *
*/
export default function Navbar () {
  return (
    <div>
        <nav className="navbar-nav">
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/honey'>OK</Link>
            </ul>
        </nav>
    </div>
  );
}
