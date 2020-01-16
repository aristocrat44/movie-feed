import { ActionTypes } from "./actionType";

const INITIAL_STATE = {
  movieDetail: [],
  loading: false,
  success: "",
  error: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.MOVIE_LIST_REQUEST:
      return { ...state, loading: true };

    case ActionTypes.MOVIE_LIST_SUCCESS:
      return {
        ...state,
       movieDetails: action.resulta,
        success: action.success,
        loading: false
      };

    default:
      return INITIAL_STATE;
  }
}
