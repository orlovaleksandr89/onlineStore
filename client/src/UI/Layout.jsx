import React from 'react'
import NewNavBar from '../components/navbar/NewNavBar'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <div>
      <NewNavBar />
      <div
        className='d-flex w-100'
        style={{ minHeight: 'calc(100vh - 76px - 72px)' }}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
