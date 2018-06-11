import React, { Component } from 'react'
import BeerList from '../BeerList/BeerList'

import './brewBrowser.less'

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

  renderBeers () {
    return (
      <div className="brew-browser">
        <div className="side-bar">
          <h1 className="title">Brew Browser</h1>
        </div>
        <BeerList beers={this.state.beers} />
      </div>
    )
  }

  render () {
    return this.state.beers.length
      ? this.renderBeers()
      : <div className="loading">LOADING...</div>
  }
}
