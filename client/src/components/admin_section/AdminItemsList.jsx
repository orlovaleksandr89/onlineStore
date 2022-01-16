import React from 'react'
import { AdminItem, AdminHeader } from './index'

import Loader from '../common/Loader'
import { getItemsList, getItemsLoadingStatus } from '../../store/items'
import { useSelector } from 'react-redux'

function AdminItemsList() {
  const items = useSelector(getItemsList())
  const itemsLoadingStatus = useSelector(getItemsLoadingStatus())

  if (itemsLoadingStatus) {
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
