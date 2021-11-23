import React from 'react'
import { Link } from 'react-router-dom'
import { MAIN_ROUTE } from '../utils/consts'

function ErrorPage() {
  return (
    <div
      className='d-flex justify-content-center align-items-center fw-bolt fs-3'
      style={{ minHeight: 'calc(100vh - 68px)' }}>
      <p>
        Oooops.... Something went wrong. Go to{' '}
        <Link to={MAIN_ROUTE}>Home page</Link>{' '}
      </p>
    </div>
  )
}

export default ErrorPage
