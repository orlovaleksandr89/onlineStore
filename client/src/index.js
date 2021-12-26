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
import CartProvider from './hooks/useCart'

ReactDOM.render(
  <BrowserRouter>
    <StoreContextProvider>
      <UserProvider>
        <TypesProvider>
          <ItemsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ItemsProvider>
        </TypesProvider>
      </UserProvider>
    </StoreContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()
