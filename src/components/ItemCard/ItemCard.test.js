/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ItemCard from './ItemCard'
import config from '../../config'

test('renders image with correct attributes', () => {
  render(
    <BrowserRouter>
      <ItemCard imageUrl='path/to/image.jpg' id='1' category='Action' />
    </BrowserRouter>
  )
  const image = screen.getByRole('img')
  const expectedSrc = `${config.api.imageBaseUrl}path/to/image.jpg`
  expect(image).toHaveAttribute('src', expectedSrc)
  expect(image).toHaveAttribute('alt', 'Movie poster in Action category')
})
