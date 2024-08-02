import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <Link to="/">Fast React Pizza Company</Link>
        <p>Rhythm</p>
    </header>
  )
}

export default Header