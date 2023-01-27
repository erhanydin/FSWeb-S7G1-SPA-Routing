import React from 'react';
import { Link } from 'react-router-dom';

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link className='home-button' to="/">Anasayfa</Link>
      {/* <div className="home-button">Anasayfa</div> */}
    </div>
  );
}
