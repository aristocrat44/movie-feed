import React,{useState, useEffect} from 'react';
import './card.styles.css'
import {movieDetailAction} from './action';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

const Card = (props) => {
    console.log('props',props);

    const getDetailFunc = () =>{
     props.actions.movieDetailAction(props.movie.imdbID);
    }
  
    return(
    <div className="card-container">
        <img alt="Title" src={props.movie.Poster} onClick={getDetailFunc}/>
        <h6>{props.movie.Title}</h6>
        <h6>{props.movie.Year}</h6>
        {/* <h6>{props.movie.imdbID}</h6> */}
    </div>
  );
  }
  
    // const mapStateToProps = (state) => {
    //   return {
    //     movie_data: state.movie_detail.getMovieDetail,
        
    //   };
    // };
    
    function mapDispatchtoProps(dispatch) {
      return {
        actions: bindActionCreators(
          {
           movieDetailAction
          },
          dispatch
        )
      };
    }


export default connect(null, mapDispatchtoProps)(Card);