import { createStore, compose } from "redux";

import initial from "./initial";
import reducer from "./reducers";

const reduxDevTools =
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__) || compose;

const store = createStore(reducer, initial, reduxDevTools());

export default store;