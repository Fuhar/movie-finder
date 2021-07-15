import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA, receiveApiData } from "./actions"

{/*     FETCHING DATA   */}
const getMovieRequest = async () =>{
  try{
    const url = `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=Jack+Reacher
`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  catch (e) {
    console.log(e);
  }
}


{/*     CALLING API USING SAGA      */}
function* getApiData(action) {
  try{
    const data = yield call(getMovieRequest);
    yield put(receiveApiData(data));
  }

  catch (e) {
    console.log(e);
  }
}


export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData)
}
