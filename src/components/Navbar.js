import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/#products">Product</Link></li>
        <li><Link to="/services">Service</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar