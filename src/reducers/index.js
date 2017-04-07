import { combineReducers } from 'redux';

import todos, * as fromTodos from './todo';
import filter from './filter';
import fetching from './fetching';


// function reducer(state = {}, action) {
//     return {
//         todos: todos(state.todos, action),
//         filter: filter(state.filter, action),
//         fetching: fetching(state.fetching, action)
//     };
// }

const reducer = combineReducers({
    todos,
    filter,
    fetching
});

export default reducer;

export function getFilteredTodos(state) {
    return fromTodos.getFilteredTodos(state.todos, state.filter);
}