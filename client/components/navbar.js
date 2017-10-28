import React from 'react';
import { Link } from 'react-router-dom'

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
                <Link className='nav-link' to='/oldflames'>Old Flames</Link>
            </ul>
        </nav>
    </div>
  );
}
