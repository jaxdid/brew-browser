import React from 'react'
import PropTypes from 'prop-types'
import BeerListItem from '../BeerListItem/BeerListItem'

import './beerList.less'

export default function BeerList ({ beers }) {
  return (
    <div className="beer-list">
      {beers.map(beer => <BeerListItem key={beer.id} data={beer} />)}
    </div>
  )
}

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object).isRequired
}
