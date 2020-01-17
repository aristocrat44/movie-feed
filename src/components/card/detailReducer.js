import { ActionTypes } from "./actionType";

const INITIAL_STATE = {
  movie_Data_Array: [],
  loading: false,
  success: "",
  error: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.MOVIE_DETAIL_REQUEST:
      return { ...state, loading: true };

    case ActionTypes.MOVIE_DETAIL_SUCCESS:
      console.log('reducer', action.results);
      return {
        ...state,
        movie_Data_Array: action.results,
        success: action.success,
        loading: false
      };

    default:
      return INITIAL_STATE;
  }
}
