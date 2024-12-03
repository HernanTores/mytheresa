import React from 'react'
import './Button.scss'

const Button = ({ text, onClick, variant = 'primary', category }) => (
  <button className={`button button--${variant} button--${category}`} onClick={onClick}>
    {text}
  </button>
)

export default Button
