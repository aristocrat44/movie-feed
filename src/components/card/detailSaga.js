import { take, call, put } from "redux-saga/effects";
import { ActionTypes } from "./actionType";

export function* getMovieDetail(){
    try{
    const url =(`http://www.omdbapi.com/?apikey=b2ae1b09&i=tt0147746&plot=full`);
    const data = yield fetch(url);

    console.log('saga',data.json());
    } catch (e) {
        console.log(e);
    }
}