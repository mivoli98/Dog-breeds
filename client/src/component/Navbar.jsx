import React from 'react';
import "../Styles/navBar.css"

const Navbar = () => {
  return (
    <div className='navBar'>
      <ul className="app__navbar-links">
        {['home', 'search'].map((item) => (
          <li key={`link-${item}`}>
            <a className="nav-link nav-link-ltr" href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
