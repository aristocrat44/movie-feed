import { ActionTypes } from "./actionType";


export function movieDetailAction(imdbID) {
  console.log('action', imdbID);
    return {
      type: ActionTypes.MOVIE_DETAIL_REQUEST,
      imdbID,
      loading: true
    };
  }