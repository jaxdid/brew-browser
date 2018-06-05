import React, { Component } from 'react'
import BeerList from './BeerList'

export default class BrewBrowser extends Component {
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
    const { beers } = this.state

    return beers.length
      ? <BeerList beers={beers} />
      : <div>Loading...</div>
  }
}
