import React, { Component } from 'react'

export default class BeerGrid extends Component {
  constructor () {
    super()

    this.state = {
      beers: []
    }
  }

  componentDidMount () {
    this.fetchBeers()
      .then(beers => this.setState({beers}))
  }

  async fetchBeers () {
    const beers = await window.fetch('https://api.punkapi.com/v2/beers/')
    return beers.json()
  }

  render () {
    return (
      <div className="beer-grid">
        <div>Beers on tap:</div>
        <div>{this.state.beers.length || 'Loading...'}</div>
      </div>
    )
  }
}
