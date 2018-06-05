import React from 'react'
import PropTypes from 'prop-types'

export default function BeerList ({ beers }) {
  return (
    <div className="beer-list">
      {beers.map(beer => <div key={beer.id}>{beer.name}</div>)}
    </div>
  )
}

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object)
}
