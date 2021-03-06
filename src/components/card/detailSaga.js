import { take, put } from "redux-saga/effects";
import { ActionTypes } from "./actionType";

export function* getMovieDetail(){
   // console.log('YOU are here in saga');
  while(true)
  {
    try{
        const {imdbID} = yield take(ActionTypes.MOVIE_DETAIL_REQUEST);
        console.log('saga params', imdbID);
        const url =(`http://www.omdbapi.com/?apikey=b2ae1b09&i=${imdbID}&plot=full`); // fetching movie details using imdbID param
        const data = yield fetch(url);
        const jsonData= yield data.json();
        yield put({
            type: ActionTypes.MOVIE_DETAIL_SUCCESS,
            results: jsonData,  // results is the array var inside of reducer (movieDetails: actions.results)
            success: data.message
        });
    } catch (e) {
        console.log(e);
    }
  }
}
