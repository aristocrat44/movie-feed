import React from 'react';
import './movie-card.styles.css';
import Card from '../card/card.component';


export const MovieCard = (props) =>{
    //console.log('props: ', props);
   return <div className="movie-card">
     
     {
     props.movies.map(movie =>
      <Card key={movie.imdbID} movie={movie}/>
     )}
    </div>
};