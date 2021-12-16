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
  THANKYOU_ROUTE,
  USER_SETTINGS_ROUTE
} from './utils/consts'
import ErrorPage from './pages/ErrorPage'
import UserSettings from './pages/userSettings'

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
    path: USER_SETTINGS_ROUTE,
    Component: UserSettings
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
