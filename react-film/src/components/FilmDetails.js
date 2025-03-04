import React from 'react';

const FilmDetails = (props) => {
  const { films } = props;

  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${films.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w780/${films.poster_path}`;

  let details;
  if( 'id' in films ){
    details = (
      <div className="film-detail is-hydrated">
        <figure className="film-backdrop">
          <img src={backdropUrl} alt={films.title} />
          <h1 className="film-title">{films.title}</h1>
        </figure>

        <div className="film-meta">
          <h2 className="film-tagline">{films.tagline}</h2>
          <p className="film-detail-overview">
            <img src={posterUrl} className="film-detail-poster" alt={films.title} />
            {films.overview}
          </p>
        </div>
      </div>
    );

  } else {
    details = (
      <div className="film-detail">
        <p>
          <i className="material-icons">subscriptions</i>
          <span>No film selected</span>
        </p>
      </div>
    );
  }

  return (
    <div className="film-details">
      <h1 className="section-title">Details</h1>
      {details}
    </div>
  )
}

export default FilmDetails;