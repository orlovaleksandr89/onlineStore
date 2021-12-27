import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MAIN_ROUTE } from '../utils/consts'

function ErrorPage() {
  return (
    <Container
      className='d-flex align-items-center justify-content-center fw-bolt fs-3'
      style={{ minHeight: 'calc(100vh - 76px - 56px)' }}>
      <p>
        Oooops.... Something went wrong. Go to{' '}
        <Link to={MAIN_ROUTE}>Home page</Link>{' '}
      </p>
    </Container>
  )
}

export default ErrorPage
