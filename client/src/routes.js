import {
  ADMIN_ROUTE,
  CART_ROUTE,
  ERROR_ROUTE,
  ITEM_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  THANKYOU_ROUTE,
  USER_ORDER_ROUTE
} from './utils/consts'
import React from 'react'
// import ShopPage from './pages/ShopPage'
// import Admin from './pages/admin'
const Admin = React.lazy(() => import('./pages/admin'))
// import Cart from './pages/cart'
const Cart = React.lazy(() => import('./pages/cart'))

// import Auth from './pages/auth'
const Auth = React.lazy(() => import('./pages/auth'))

// import ItemPage from './pages/item'
const ItemPage = React.lazy(() => import('./pages/item'))

const ShopPage = React.lazy(() => import('./pages/ShopPage'))

// import ThankYouPage from './pages/ThankyouPage'
const ThankYouPage = React.lazy(() => import('./pages/ThankyouPage'))
// import ErrorPage from './pages/ErrorPage'
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'))
// import UserOrder from './pages/userOrder'
const UserOrder = React.lazy(() => import('./pages/userOrder'))

export const authRoutes = [
  {
    path: CART_ROUTE,
    Component: Cart
  },
  {
    path: THANKYOU_ROUTE,
    Component: ThankYouPage
  },
  {
    path: USER_ORDER_ROUTE,
    Component: UserOrder
  }
]
export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  }
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },

  {
    path: MAIN_ROUTE,
    Component: ShopPage
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: ITEM_ROUTE,
    Component: ItemPage
  },
  {
    path: ERROR_ROUTE,
    Component: ErrorPage
  }
]
