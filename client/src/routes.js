import Admin from './pages/admin'
import Cart from './pages/cart'
import Auth from './pages/auth'
import ItemPage from './pages/item'
import ShopPage from './pages/ShopPage'
import ThankYouPage from './pages/ThankyouPage'

import {
  ADMIN_ROUTE,
  CART_ROUTE,
  ERROR_ROUTE,
  ITEM_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  THANKYOU_ROUTE
} from './utils/consts'
import ErrorPage from './pages/ErrorPage'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: CART_ROUTE,
    Component: Cart
  },
  {
    path: THANKYOU_ROUTE,
    Component: ThankYouPage
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
