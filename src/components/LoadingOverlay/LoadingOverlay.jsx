import React from 'react'
import { useLoading } from '../../context/LoadingContext'
import './LoadingOverlay.scss'

const LoadingOverlay = () => {
  const { isLoading } = useLoading()

  if (!isLoading) return null

  return (
    <div className='loading-overlay'>
      <div className='spinner' />
      <p>Loading...</p>
    </div>
  )
}

export default LoadingOverlay
