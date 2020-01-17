import React from 'react';
import './card.styles.css'
import {movieDetailAction} from './action';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';



const Card = (props) => {



    const getDetailFunc = (imdbID) =>{
      //console.log(imdbID);
     props.actions.movieDetailAction(imdbID);
   
    }

    return(
      <div>
        {/* MODAL BOX */}
        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  <table className="table table-striped table-dark">
                    <tbody>
                      <tr>
                        <td>Title</td>
                        <td>{props.moviedata.Title}</td>
                      </tr>
                      <tr>
                        <td>Year</td>
                        <td>{props.moviedata.Year}</td>
                      </tr>
                      <tr>
                        <td>Rated:</td>
                        <td>{props.moviedata.Rated}</td>
                      </tr>
                      <tr>
                        <td>Run Time:</td>
                        <td>{props.moviedata.Runtime}</td>
                      </tr>
                      <tr>
                        <td>Genre:</td>
                        <td>{props.moviedata.Genre}</td>
                      </tr>
                        <tr>
                          <td>Director:</td>
                        <td>{props.moviedata.Director}</td>
                        </tr>
                    </tbody>
                  </table>
                    <span>Title:{props.moviedata.Title}</span>
                    <span>Year:{props.moviedata.Year}</span>
                    <span>Rated:{props.moviedata.Rated}</span>
                    <span>RunTime:{props.moviedata.Runtime}</span>
                    <span>Genre:{props.moviedata.Genre}</span>
                  {/* {
                    props.moviedata.map(data =>
                    <td key={data.imdbID}>{data.Title}</td>
                    )} */}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  
                  </div>
                </div>
              </div>
            </div>
        {/* MODAL BOX     */}
      
    <div className="card-container">
        <img alt="Title" className='poster' src={props.movie.Poster}/>
        <div>
        <h6>{props.movie.Title}</h6>
        </div>
        <div className='card-footer'>
          <h6>{props.movie.Type}</h6>
          <div>
             <button type="button" onClick={()=>getDetailFunc(props.movie.imdbID)} className="btn btn-danger button" data-toggle="modal" data-target="#exampleModalLong">
            More Detail
             </button> 
        {/* <!-- Modal --> */}
            
            </div>
          <h6>{props.movie.Year}</h6>
        </div>
        {/* <h6>{props.movie.imdbID}</h6> */}

        {/* <!-- Modal --> */}

    </div>
    </div>
  );
  }
  
    const mapStateToProps = (state) => {
      return {
        moviedata: state.detailreducer.movie_Data_Array
      };
    
    };
    
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


export default connect(mapStateToProps, mapDispatchtoProps)(Card);