import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import UserProvider from './hooks/useUser'
import createStore from './store/createStore'
import { Provider } from 'react-redux'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
