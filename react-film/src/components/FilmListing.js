import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  state = {
    filter: 'all'
  }

  handleFilterClick = filter => {
    //console.log(`Setting filter to ${filter}`);
    this.setState({ filter })
  }

  render() {
    const allFilms = this.props.films.map( (film) => {
      return (
        <FilmRow 
          key={ film.id } 
          film={ film } 
          isFave={ this.props.faves.includes(film) }
          onFaveToggle={ () => this.props.onFaveToggle(film) }
          onDetailClick={ () => this.props.onDetailClick(film) }
        />
      )
    });

    const favesFilms = this.props.faves.map( (film) => {
      return (
        <FilmRow 
          key={ film.id } 
          film={ film } 
          isFave={ this.props.faves.includes(film) }
          onFaveToggle={ () => this.props.onFaveToggle(film) }
          onDetailClick={ () => this.props.onDetailClick(film) }
        />
      )
    });

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={"film-list-filter " + (this.state.filter === "all" ? "is-active" : "")} onClick={() => this.handleFilterClick('all')}>
            ALL
      <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={"film-list-filter " + (this.state.filter === "faves" ? "is-active" : "")} onClick={() => this.handleFilterClick('faves')}>
            FAVES
      <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>

        { this.state.filter === "all" ? allFilms : favesFilms }
      </div>
    )
  }
}

export default FilmListing;