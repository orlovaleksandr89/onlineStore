import React from 'react'

import AppNavBar from '../components/navbar'

const Layout = (props) => {
  return (
    <div>
      <AppNavBar />
      <div style={{ minHeight: 'calc(100vh - 76px' }}>{props.children}</div>
    </div>
  )
}

export default Layout
