import React, { useEffect, useState } from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div>
        <NavLink to='/'>
          <img src='/images/logo.svg' alt='Logo' id='logo' />
        </NavLink>
        <nav>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? 'active-link' : undefined}
          >
            Home
          </NavLink>
          <NavLink
            to='/my-list'
            className={({ isActive }) => isActive ? 'active-link' : undefined}
          >
            My list
          </NavLink>
        </nav>
        <a href='https://www.linkedin.com/in/hernantores/' target='_blank' rel='noopener noreferrer'>
          <img src='/images/linkedin.svg' alt='Linkedin logo' id='linkedin' />
        </a>
      </div>
    </header>
  )
}

export default Header
