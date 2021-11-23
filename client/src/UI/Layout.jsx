import React from 'react'

import AppNavBar from '../components/navbar'

const Layout = (props) => {
  return (
    <div>
      <AppNavBar />
      {props.children}
    </div>
  )
}

export default Layout
