import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import list from './list';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['list']
}

const rootReducer = combineReducers({
    list
})  

export default persistReducer(persistConfig, rootReducer);