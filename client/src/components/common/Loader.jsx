import React from 'react'
import loader from '../../assets/loader.gif'

function Loader() {
  return (
    <div
      className='d-flex align-items-center justify-content-center'
      style={{ height: 'calc(100vh - 68px)' }}>
      <img src={loader} alt='loader' className='h-25' />
    </div>
  )
}

export default Loader
