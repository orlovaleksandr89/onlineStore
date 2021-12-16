import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes, authRoutes, publicRoutes } from '../routes'
import { ERROR_ROUTE } from '../utils/consts'
import ErrorPage from '../pages/ErrorPage'
import { useUser } from '../hooks/useUser'

const AppRouter = () => {
  const { isAuth, user } = useUser()
  return (
    <Switch>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} exact>
            <Component />
          </Route>
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} exact>
          <Component />
        </Route>
      ))}

      {isAuth &&
        user.role === 'ADMIN' &&
        adminRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} exact>
            <Component />
          </Route>
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
