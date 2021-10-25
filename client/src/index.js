import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StoreContextProvider } from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <StoreContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContextProvider>,
  document.getElementById('root')
)

reportWebVitals()
