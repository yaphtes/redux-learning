import { createStore } from 'redux';
import reducer from '../reducers';
import initiallState from './state';

const store = createStore(reducer, initiallState);

export default store;