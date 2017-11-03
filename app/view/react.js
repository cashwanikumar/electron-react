import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './stores/configureStore.js';
import { Provider } from 'react-redux';
import GroceryItemList from './components/GroceryItemList.js';
import {loadGroceryItems} from './actions/groceryItemsActions.js';
//import './styles.css';
//import './../bower_components/skeleton/css/normalize.css';
//import './../bower_components/skeleton/css/skeleton.css';

const store = configureStore();
store.dispatch(loadGroceryItems());

render(
    <Provider store={store}>
        <GroceryItemList />
    </Provider>, app
);
