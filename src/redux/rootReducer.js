import {combineReducers} from 'redux';
import DetailReducer from '../components/card/detailReducer';

export default combineReducers({
    movie_detail: DetailReducer
});