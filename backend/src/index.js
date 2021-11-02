import React from 'react'
import ReactDOM from 'react-dom'
// import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/index'
import randomId from './libs/randomId'

if(localStorage.getItem('cartId')){
  localStorage.setItem('cartId' , randomId(32))
}

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);