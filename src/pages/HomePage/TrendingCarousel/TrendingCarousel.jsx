import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import config from '../../../config'
import './TrendingCarousel.scss'

const SLIDES_PER_VIEW = 1
const SPACE_BETWEEN = 50
const DELAY = 2000

const TrendingCarousel = ({ trendingMovies }) => {
  return (
    <div className='trading-movie-container'>
      <Swiper
        allowTouchMove={false}
        spaceBetween={SPACE_BETWEEN}
        slidesPerView={SLIDES_PER_VIEW}
        modules={[Autoplay]}
        autoplay={{ delay: DELAY, disableOnInteraction: false }}
      >
        {trendingMovies.map(movie => {
          return (
            <SwiperSlide key={movie.id}>
              <div
                className='trending-movie' style={{
                  backgroundImage: `url(${config.api.largeImageBaseUrl}${movie.backdrop_path})`
                }}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default TrendingCarousel
