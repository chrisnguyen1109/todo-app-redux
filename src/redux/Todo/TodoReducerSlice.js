import { ADD_TODO, TOGGLE_STATUS_TODO } from './constants';

const initState = [];

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case TOGGLE_STATUS_TODO:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }

                return todo;
            });
        default:
            return state;
    }
};

export default reducer;
