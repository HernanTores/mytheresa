import React from 'react'
import { useNavigate } from 'react-router'
import config from '../../config'
import './ItemCard.scss'

const ItemCard = ({ imageUrl, id, category }) => {
  const navigate = useNavigate()

  return (
    <div className='item-card'>
      <img
        onClick={() => navigate(`/${category.toLowerCase()}/${id}`)}
        className='card-image'
        src={`${config.api.imageBaseUrl}${imageUrl}`}
        alt={`Movie poster in ${category} category`}
      />
    </div>
  )
}

export default ItemCard
