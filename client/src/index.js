import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StoreContextProvider } from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import UserProvider from './hooks/useUser'
import ItemsProvider from './hooks/useItems'
import TypesProvider from './hooks/useTypes'

ReactDOM.render(
  <BrowserRouter>
    <StoreContextProvider>
      <UserProvider>
        <TypesProvider>
          <ItemsProvider>
            <App />
          </ItemsProvider>
        </TypesProvider>
      </UserProvider>
    </StoreContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()
