import React, { Component } from 'react';
import { Link } from 'react-router-dom'

/**
 * Navbar (Dumb) Component:
 *
*/
export default function Navbar () {
  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
    </div>
  );
}
