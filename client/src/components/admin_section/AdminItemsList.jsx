import React from 'react'
import { AdminItem, AdminHeader } from './index'

import Loader from '../common/Loader'
import { useItems } from '../../hooks/useItems'

function AdminItemsList() {
  const { items, loading } = useItems()

  if (loading) {
    return <Loader />
  }
  return (
    <div>
      <AdminHeader />
      {items.map((item, i) => {
        return <AdminItem key={item._id} i={i} item={item} />
      })}
    </div>
  )
}

export default AdminItemsList
