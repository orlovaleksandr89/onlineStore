import React from 'react'
import AdminItem from './AdminItem'
import AdminHeader from './AdminHeader'
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
        return <AdminItem key={item._id} i={i} {...item} />
      })}
    </div>
  )
}

export default AdminItemsList
