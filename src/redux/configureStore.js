import {createStore} from 'redux';

import modules from './modules';

window.__REDUX_DEVTOOLS_EXTENSION__ = undefined;
const configureStore = (initialState) => {
  return createStore(modules, window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default configureStore;