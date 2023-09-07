import React from 'react'
import './header.scss'
import logo from '../../assets/logo.jpg'

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar-wrapper">
        <a className="navbar-brand" href="#">
          <img className='navbar-logo' src={logo} />
        </a>
      </nav>
    </div>
  )
}
