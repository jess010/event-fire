import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

/**
 * Navbar (Dumb) Component:
 *
*/
export default function Navbar () {
  return (
    <div className='nav-div'>
        <nav className="my-nav">
            <ul className='nav-list'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/honey'>OK</Link>
            </ul>
        </nav>
    </div>
  );
}
