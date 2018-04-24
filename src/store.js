import projectShopping from './reducers/index';
import { createStore } from 'redux';

const store = createStore(
    projectShopping, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log('INIT', store.getState());
export default store;