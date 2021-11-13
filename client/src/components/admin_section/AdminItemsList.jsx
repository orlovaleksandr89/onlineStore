import React, { useEffect, useState } from 'react'
import { useHttp } from '../../hooks/httpHook'
import AdminItem from './AdminItem'
import AdminHeader from './AdminHeader'

function AdminItemsList() {
  const [items, setItems] = useState([])
  const { request } = useHttp()

  useEffect(() => {
    const getItemsFromDB = async () => {
      const data = await request('/items')
      setItems(data)
    }
    getItemsFromDB()
  }, [request])

  return (
    <div className=''>
      <AdminHeader />
      {items.map((item, i) => {
        return <AdminItem key={item._id} i={i} {...item} />
      })}
    </div>
  )
}

export default AdminItemsList
