import React, { Component } from 'react'
import BeerList from '../BeerList/BeerList'

import './brewBrowser.less'

export default class BrewBrowser extends Component {
  constructor () {
    super()

    this.state = {
      beers: [],
      sortType: 'name'
    }

    this.changeSortType = this.changeSortType.bind(this)
  }

  componentDidMount () {
    this.fetchBeers()
      .then(beers => this.setState({beers}, this.sortBeers))
  }

  async fetchBeers () {
    const beers = await window.fetch('https://api.punkapi.com/v2/beers/')
    return beers.json()
  }

  sortBeers () {
    const { sortType } = this.state
    const beers = this.state.beers.sort((a, b) => {
      if (sortType === 'name') {
        return String(a[sortType]).localeCompare(b[sortType])
      } else if (sortType === 'abv') {
        return a[sortType] - b[sortType]
      }
    })

    this.setState({beers})
  }

  changeSortType () {
    this.setState(previousState => {
      const sortType = previousState.sortType === 'name' ? 'abv' : 'name'
      return {sortType}
    }, this.sortBeers)
  }

  renderBeers () {
    return (
      <div className="brew-browser">
        <div className="side-bar">
          <h1 className="title">Brew Browser</h1>
          <div>
            Sort by:
            <button onClick={this.changeSortType}>
              {this.state.sortType}
            </button>
          </div>
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
