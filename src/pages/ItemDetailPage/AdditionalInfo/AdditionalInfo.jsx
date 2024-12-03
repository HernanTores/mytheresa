import React from 'react'
import './AdditionalInfo.scss'

const AdditionalInfo = ({ originalTitle, productionCompanies, voteAverage, homePage }) => {
  const formatedVoteAverage = voteAverage ? voteAverage.toFixed(1) : 'N/A'
  return (
    <div className='additional-info'>
      <h3>About {originalTitle}</h3>
      <p><strong>Production Companies:</strong> {productionCompanies?.map(company => company.name).join(', ') || 'No production companies available'}</p>
      <p><strong>Vote Average:</strong> {formatedVoteAverage}</p>
      <p><strong>Home Page: </strong>
        {homePage ? (<a href={homePage} target='_blank' rel='noopener noreferrer'>{homePage}</a>) : ('No link available')}
      </p>
    </div>
  )
}

export default AdditionalInfo
