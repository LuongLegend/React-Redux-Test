import { GET_LIST, NEW_LIST } from "../constants/actionTypes";

export const getList = (list) => {
    return {
        type: GET_LIST,
        list
    }
}

export const generateNewList = (newList) => {
    return {
        type: NEW_LIST,
        newList: newList
    }
}