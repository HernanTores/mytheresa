import React from 'react'
import Header from '../Header/Header'
import './Layout.scss'

const Layout = ({ children, fullWidth }) => {
  return (
    <div className='layout-container'>
      <Header />
      <main className={fullWidth !== undefined ? '' : 'layout'}>{children}</main>
    </div>
  )
}

export default Layout
