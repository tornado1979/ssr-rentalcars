import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <nav className="navBar">
        <div className="title">
          <div className="logo" />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
