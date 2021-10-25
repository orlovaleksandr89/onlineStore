import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { ERROR_ROUTE } from '../utils/consts'
import StoreContext from '../store/store'
import ErrorPage from '../pages/ErrorPage'

const AppRouter = ({ error }) => {
  const storeCtx = useContext(StoreContext)
  const isAuth = storeCtx.isAuth
  return (
    <Switch>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}

      <Redirect
        to={{
          pathname: ERROR_ROUTE,
          component: ErrorPage
        }}
      />
    </Switch>
  )
}

export default AppRouter
