import React from 'react'
import { Link } from 'react-router-dom'

import styles from './header.module.css'
function Header() {
   return (
      <Link to="/" style={{ textDecoration: 'none' }}>
         <h1 className={styles.header}>Rodinná farmička</h1>
      </Link>
   )
}

export default Header
