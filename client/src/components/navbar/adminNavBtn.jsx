import React from 'react'
import { ADMIN_ROUTE } from '../../utils/consts'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function AdminNav() {
  return (
    <NavLink
      to={ADMIN_ROUTE}
      style={{ color: '#FFC107', textDecoration: 'none' }}>
      <Button className='btn m-2' variant={'outline-warning'}>
        Admin
      </Button>
    </NavLink>
  )
}

export default React.memo(AdminNav)
