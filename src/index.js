import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import { BrowserRouter } from 'react-router-dom'
import css from './styles/typography.css'
import style from './styles/style.styl'
import {Provider} from 'react-redux'
import Store from './redux/store'


ReactDOM.render(<Provider store={Store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
