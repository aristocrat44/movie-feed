import React from 'react';
import './card.styles.css'

export const Card =  (props) => {
    //console.log(props.mon);
  return(
    <div className="card-container">
        <img alt="Title" src={props.movie.Poster}/>
        <h6>{props.movie.Title}</h6>
        <h6>{props.movie.Year}</h6>
    </div>
  )
}