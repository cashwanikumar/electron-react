import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './stores/configureStore.js';
import { Provider } from 'react-redux';
import GroceryItemList from './components/GroceryItemList.js';
import {loadGroceryItems} from './actions/groceryItemsActions.js';
import './styles.css';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; // webpack can import CSS files too!

const store = configureStore();
store.dispatch(loadGroceryItems());

render(
    <Provider store={store}>
        <GroceryItemList />
    </Provider>, app
);
