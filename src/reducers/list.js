import {
    GET_LIST,
    NEW_LIST
}
    from '../constants/actionTypes'

const initialState = [];

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST: 
            return [...action.list]
        case NEW_LIST:
            return [...action.newList]
        default:
            return state;
    }
}

export default listReducer;