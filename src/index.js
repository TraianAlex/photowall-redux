import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import { BrowserRouter } from 'react-router-dom'
import css from './styles/typography.css'
import style from './styles/style.styl'
import {Provider} from 'react-redux'
import { createStore, combineReducers,applyMiddleware } from 'redux';
import rootReducer from './redux/reducer';
import comments from './data/comments';
import posts from './data/posts';

const store = createStore(rootReducer)




ReactDOM.render(<Provider store={store}>
    <ConnectedRouter>
    <App/>
    </ConnectedRouter>
    </Provider>,
     document.getElementById('root'));
