import React from 'react'

import AppNavBar from '../components/navbar'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <div>
      <AppNavBar />
      <div
        className='d-flex'
        style={{ minHeight: 'calc(100vh - 76px - 72px)' }}>
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
