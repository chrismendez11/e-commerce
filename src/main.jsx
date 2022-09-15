import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
    <HashRouter>
      <App /> 
    </HashRouter>
    </Provider>
  // </React.StrictMode> 
  // Because of StrictMode my component named 'Cart.jsx' is render twice which make my state 'totalPrice' duplicate its value in the function 'handleTotalPrice' :(
)
