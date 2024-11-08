import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
