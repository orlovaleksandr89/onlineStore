import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import StoreContext from '../store/store'
import { MAIN_ROUTE } from '../utils/consts'

function ErrorPage() {
  const storeCtx = useContext(StoreContext)
  console.log(storeCtx.error.message)

  return (
    <div
      className='d-flex justify-content-center align-items-center fw-bolt fs-3'
      style={{ minHeight: 'calc(100vh - 68px)' }}>
      <p>
        Oooops.... {storeCtx.error.message} Go to{' '}
        <Link to={MAIN_ROUTE}>Home page</Link>{' '}
      </p>
    </div>
  )
}

export default ErrorPage
