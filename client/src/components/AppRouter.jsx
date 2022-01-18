import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes, authRoutes, publicRoutes } from '../routes'
import { ERROR_ROUTE } from '../utils/consts'
import ErrorPage from '../pages/ErrorPage'
import { useSelector } from 'react-redux'
import { getIsAdmin, getUserIsLoggedIn } from '../store/user'
import Loader from './common/Loader'

const AppRouter = () => {
  const isLoggedIn = useSelector(getUserIsLoggedIn())
  const isAdmin = useSelector(getIsAdmin())
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {isLoggedIn &&
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

        {isLoggedIn &&
          isAdmin &&
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
    </Suspense>
  )
}

export default AppRouter
