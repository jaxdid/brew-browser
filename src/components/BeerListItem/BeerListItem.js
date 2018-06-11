import React from 'react'
import PropTypes from 'prop-types'

import './beerListItem.less'

export default function BeerListItem ({ data }) {
  const {
    image_url: imageUrl,
    name,
    tagline
  } = data

  return (
    <div className="beer-list-item">
      <div className="beer-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <h4>{name}</h4>
      <p>{tagline}</p>
    </div>
  )
}

BeerListItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.node).isRequired
}
