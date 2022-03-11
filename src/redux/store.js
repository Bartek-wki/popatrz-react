import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import articlesReducer from './articlesRedux';
import howWeLookReducer from './howWeLookRedux';
import aboutReducer from './aboutRedux';

const subreducers = {
  articles: articlesReducer,
  howWeLook: howWeLookReducer,
  about: aboutReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;