import { combineReducers } from 'redux';

import todoReducer, * as fromTodos from './todo';
import filterReducer from './filter';

export default function reducer(state = {}, action) {
    return {
        todos: todoReducer(state.todos, action),
        filter: filterReducer(state.filter, action)
    };
}

export function getFilteredTodos(state) {
    return fromTodos.getFilteredTodos(state.todos, state.filter)
}