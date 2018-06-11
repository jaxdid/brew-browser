import React from 'react'
import PropTypes from 'prop-types'

import './beerListItem.less'

export default function BeerListItem ({ data }) {
  const {
    abv,
    image_url: imageUrl,
    name,
    tagline,
    description
  } = data

  return (
    <div className="beer-list-item">
      <div className="beer-abv">
        {`${abv}%`}
        <div className="beer-abv-label">ABV</div>
      </div>
      <div className="beer-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <h4>{name}</h4>
      <p>{tagline}</p>
      <p>{description}</p>
    </div>
  )
}

BeerListItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.node).isRequired
}
