import { createStore } from 'redux';
import rootReducer from './reducers/characters';

const store = createStore(rootReducer);

export default store;