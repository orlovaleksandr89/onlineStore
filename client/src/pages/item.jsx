import React from 'react'
import { useParams } from 'react-router'

const ItemPage = () => {
  const { id } = useParams()
  return <div>{id ? `Item id = ${id}` : 'items'}</div>
}

export default ItemPage
