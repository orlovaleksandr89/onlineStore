import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../../hooks/httpHook'
import AdminItem from './AdminItem'
import AdminHeader from './AdminHeader'
import StoreContext from '../../store/store'
import Loader from '../common/Loader'

function AdminItemsList() {
  const [items, setItems] = useState([])
  const { request, loading } = useHttp()
  const storeCtx = useContext(StoreContext)

  const getItemsFromDB = async () => {
    const data = await request('/items')
    setItems(data)
  }
  useEffect(() => {
    getItemsFromDB()
  }, [storeCtx.items])
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
