import {
    ADD_TODO,
    TOGGLE_STATUS_TODO,
    FILTER_SEARCH_TODO,
    FILTER_STATUS_TODO,
    FILTER_PRIORITY_TODO,
} from './constants';

export const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload,
    };
};

export const toggleStatusTodo = payload => {
    return {
        type: TOGGLE_STATUS_TODO,
        payload,
    };
};

export const filterSearchTodo = payload => {
    return {
        type: FILTER_SEARCH_TODO,
        payload,
    };
};

export const filterStatusTodo = payload => {
    return {
        type: FILTER_STATUS_TODO,
        payload,
    };
};

export const filterPriorityTodo = payload => {
    return {
        type: FILTER_PRIORITY_TODO,
        payload,
    };
};
