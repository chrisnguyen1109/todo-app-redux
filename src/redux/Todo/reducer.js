import { combineReducers } from 'redux';

import FiltersReducerSlice from './FiltersReducerSlice';
import TodoReducerSlice from './TodoReducerSlice';

const reducer = combineReducers({
    filters: FiltersReducerSlice,
    todoList: TodoReducerSlice,
});

export default reducer;
