import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import moviesService from '../../services/moviesService'
import Button from '../../components/Button/Button'
import AdditionalInfo from './AdditionalInfo/AdditionalInfo'
import { useMyList } from '../../context/MyListContext'
import config from '../../config'
import './ItemDetailPage.scss'
import { useLoading } from '../../context/LoadingContext'
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay'
import moment from 'moment'

const ItemDetail = () => {
  const { id, category } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState({ genres: [] })
  const [isInList, setIsInList] = useState(false)
  const { addToList, removeFromList, myList } = useMyList()
  const { isLoading, setIsLoading } = useLoading()

  const fetchMovieDetail = async () => {
    setIsLoading(true)
    const result = await moviesService.getDetail(id)
    if (result.error) return navigate('/')
    setMovie(result)
    setIsLoading(false)
  }

  const additionalInfoData = {
    originalTitle: movie.original_title,
    productionCompanies: movie.production_companies,
    voteAverage: movie.vote_average,
    homePage: movie.homepage
  }

  useEffect(() => {
    const foundInList = myList.some((item) => item.id === parseInt(id))
    setIsInList(foundInList)
  }, [myList, id])

  useEffect(() => {
    fetchMovieDetail()
  }, [id, setIsLoading])

  const handleAddToMylist = () => {
    if (isInList) {
      removeFromList(movie.id)
    } else {
      addToList(movie, category)
    }
  }

  return (
    <Layout>
      <div id='item-detail' className={`category-${category}`}>
        {!isLoading
          ? (
            <>
              <div className='image-detail-section'>
                <div className='image-container'>
                  <img
                    className='movie-detail__image'
                    src={`${config.api.imageBaseUrl}${movie.poster_path}`}
                    alt={`Poster of ${movie.original_title}`}
                  />
                </div>

                <div className='movie-detail__content'>
                  <h2>{movie.original_title}</h2>
                  <div className='movie-detail__info'>
                    <p>
                      <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}
                    </p>
                    <p>
                      <strong>Release date:</strong> {moment(movie.release_date).format('Do MMMM YYYY')}
                    </p>
                    <p>
                      <strong>Runtime:</strong> {movie.runtime}
                    </p>
                  </div>
                  <p>{movie.overview}</p>
                  <Button
                    text={isInList ? 'Remove from my list' : 'Add to my list'}
                    onClick={handleAddToMylist}
                    variant={isInList ? 'danger' : 'primary'}
                    category={category}
                  />
                </div>
              </div><AdditionalInfo {...additionalInfoData} />
            </>)
          : (
            <LoadingOverlay />
            )}
      </div>
    </Layout>
  )
}

export default ItemDetail
