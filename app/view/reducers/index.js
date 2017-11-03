import {combineReducers} from 'redux';
import groceryItems from './groceryItemsReducer.js';

const rootReducer = combineReducers({
    groceryItems
});

export default rootReducer;