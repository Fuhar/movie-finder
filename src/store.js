import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import combineReducers from "./reducers/ind";
import mySaga from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default createStore(combineReducers, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);
