import React from 'react'

import NavBar from '../components/navbar'

const Layout = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  )
}

export default Layout
