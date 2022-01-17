import { FILTER_SEARCH_TODO, FILTER_STATUS_TODO, FILTER_PRIORITY_TODO } from './constants';

const initState = {
    search: '',
    status: 'All',
    priority: [],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FILTER_SEARCH_TODO:
            return {
                ...state,
                search: action.payload,
            };
        case FILTER_STATUS_TODO:
            return {
                ...state,
                status: action.payload,
            };
        case FILTER_PRIORITY_TODO:
            return {
                ...state,
                priority: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
