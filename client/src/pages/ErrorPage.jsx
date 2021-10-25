import React, { useContext } from 'react'
import StoreContext from '../store/store'

function ErrorPage() {
  const storeCtx = useContext(StoreContext)
  console.log(storeCtx.error.message)

  return (
    <div
      className='d-flex justify-content-center align-items-center fw-bolt fs-3'
      style={{ minHeight: 'calc(100vh - 68px)' }}>
      Oooops.... {storeCtx.error.message}
    </div>
  )
}

export default ErrorPage
