import React, { useEffect, useRef, useState } from 'react'
import ItemCard from './../ItemCard/ItemCard'
import './Carousel.scss'

const Carousel = ({ category, movies }) => {
  const carouselRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkArrowsVisibility = () => {
    const container = carouselRef.current
    if (!container) return

    setShowLeftArrow(container.scrollLeft > 0)

    setShowRightArrow(
      container.scrollWidth > container.offsetWidth &&
      container.scrollLeft + container.offsetWidth < container.scrollWidth
    )
  }

  const scrollContainer = (direction) => {
    const container = document.querySelector(`#carousel-${category}`)
    const scrollAmount = 500
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const container = carouselRef.current
    if (!container) return

    setTimeout(() => {
      checkArrowsVisibility()
    }, 100)

    container.addEventListener('scroll', checkArrowsVisibility)
    return () => container.removeEventListener('scroll', checkArrowsVisibility)
  }, [])

  return (
    <div className='carousel'>
      <h2 className='carousel-title'>{category}</h2>
      <div className='carousel-wrapper'>
        {showLeftArrow && (
          <button
            onClick={() => scrollContainer('left')}
            className='carousel-arrow left'
          >
            ‹
          </button>
        )}
        <div
          id={`carousel-${category}`}
          className='carousel-container'
          ref={carouselRef}
        >
          {movies.map((movie) => {
            return (
              <ItemCard
                id={movie.id}
                imageUrl={movie.poster_path}
                category={category}
                key={movie.id}
              />
            )
          })}
        </div>

        {showRightArrow && (
          <button
            onClick={() => scrollContainer('right')}
            className='carousel-arrow right'
          >
            ›
          </button>
        )}
      </div>
    </div>
  )
}

export default Carousel
