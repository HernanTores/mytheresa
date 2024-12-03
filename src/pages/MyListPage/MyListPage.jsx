import React from 'react'
import Layout from '../../components/Layout/Layout'
import ItemCard from '../../components/ItemCard/ItemCard'
import Button from '../../components/Button/Button'
import { useMyList } from '../../context/MyListContext'
import './MyListPage.scss'

const MyListPage = () => {
  const { myList, removeFromList } = useMyList()

  return (
    <Layout>
      <div id='my-list-page'>
        <h1>My list</h1>
        {myList.length > 0
          ? (
            <ul className='movie-list'>
              {myList.map((movie) => (
                <li key={movie.id} className='movie-item'>
                  <ItemCard id={movie.id} imageUrl={movie.poster_path} category={movie.category} />
                  <div className='movie-item-controls'>
                    <h2>{movie.original_title}</h2>
                    <Button text='Remove' variant='danger' onClick={() => removeFromList(movie.id)} />
                  </div>
                </li>
              ))}
            </ul>
            )
          : (
            <p>No movies in your list.</p>
            )}
      </div>
    </Layout>
  )
}

export default MyListPage
