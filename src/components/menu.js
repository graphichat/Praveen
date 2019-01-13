import React from 'react'
import Link from 'gatsby-link'

const Menu = () => {
  return (
    <div style={{ background: '#f4f4f4', paddingTop: 10, marginTop: 'none' }}>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Me</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
