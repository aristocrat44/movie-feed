import {getMovieDetail} from '../components/card/detailSaga';
import {fork, all} from 'redux-saga/effects'; 

function* RootSaga(){
    yield all([
        fork(getMovieDetail)
    ])
}

export default RootSaga;