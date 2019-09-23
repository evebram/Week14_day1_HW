import React, { Component } from 'react';
import Film from './Film.js';

class FilmList extends Component {
  render() {
    const filmNodes = this.props.films.map((film) => {
      return (
        <ul><a href={film.url}><Film key={film.id}>{film.name}</Film></a></ul>
      );
    });

    return(
      <>
      {filmNodes}
      </>
    );
  }
}

export default FilmList;
