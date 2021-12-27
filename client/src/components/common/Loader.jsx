import React from 'react'
import loader from '../../assets/loader.gif'

function Loader() {
  return (
    <div
      className='d-flex align-items-center justify-content-center w-100'
      style={{ height: 'calc(100vh - 76px - 72px)' }}>
      <img src={loader} alt='loader' className='h-25' />
    </div>
  )
}

export default Loader
