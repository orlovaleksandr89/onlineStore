import Admin from './pages/admin'
import Cart from './pages/cart'
import Auth from './pages/auth'
import Main from './pages/main'
import ItemPage from './pages/item'

import {
  ADMIN_ROUTE,
  CART_ROUTE,
  ITEM_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE
} from './utils/consts'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: CART_ROUTE,
    Component: Cart
  }
]
export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: MAIN_ROUTE,
    Component: Main
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: ITEM_ROUTE,
    Component: ItemPage
  }
]
