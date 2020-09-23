import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <ul className='navBar'>
          <Link to="/" as='li' className="navBarli">Home</Link>
          <Link to="/about" as='li' className="navBarli">About</Link>
          <Link to="/product" as='li' className="navBarli">Product</Link> 
        </ul>
        
    </div>
  );
}

export default NavBar;



