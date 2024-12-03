import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Carousel from '../../components/Carousel/Carousel'
import moviesService from '../../services/moviesService'
import './HomePage.scss'
import { useLoading } from '../../context/LoadingContext'
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay'
import TrendingCarousel from './TrendingCarousel/TrendingCarousel'

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [comedyMovies, setComedyMovies] = useState([])
  const [actionMovies, setActionMovies] = useState([])
  const [adventureMovies, setAdventureMovies] = useState([])
  const { isLoading, setIsLoading } = useLoading()

  const fetchTrendingMovies = async () => {
    setIsLoading(true)
    const results = await moviesService.getTrending()
    setTrendingMovies(results.results)
    setIsLoading(false)
  }

  const fetchComedyMovies = async () => {
    setIsLoading(true)
    const results = await moviesService.byCategory(moviesService.categories.COMEDY)
    setComedyMovies(results.results)
    setIsLoading(false)
  }

  const fetchActionMovies = async () => {
    setIsLoading(true)
    const results = await moviesService.byCategory(moviesService.categories.ACTION)
    setActionMovies(results.results)
    setIsLoading(false)
  }

  const fetchAdventureMovies = async () => {
    setIsLoading(true)
    const results = await moviesService.byCategory(moviesService.categories.ADVENTURE)
    setAdventureMovies(results.results)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchComedyMovies()
    fetchActionMovies()
    fetchAdventureMovies()
    fetchTrendingMovies()
  }, [setIsLoading])

  return (
    <Layout fullWidth>
      <div id='home-page'>
        <TrendingCarousel trendingMovies={trendingMovies} />
        <div className='layout'>
          {
            isLoading
              ? (<LoadingOverlay />)
              : (
                <>
                  <Carousel category='Comedy' movies={comedyMovies} />
                  <Carousel category='Action' movies={actionMovies} />
                  <Carousel category='Adventure' movies={adventureMovies} />
                </>
                )
          }
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
