import React, { Component } from 'react'

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
    return this.state.beers.length
      ? <div>Beers ready!</div>
      : <div>Loading...</div>
  }
}
