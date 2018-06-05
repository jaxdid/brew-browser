import React from 'react'
import PropTypes from 'prop-types'

export default function BeerListItem ({ data }) {
  const {
    name,
    tagline
  } = data

  return (
    <div className="beer-list-item">
      {`${name} - ${tagline}`}
    </div>
  )
}

BeerListItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.node).isRequired
}
