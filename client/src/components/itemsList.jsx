import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import StoreContext from '../store/store'
import ItemInList from './ItemInList'

function ItemsList() {
  const { items } = useContext(StoreContext)

  return (
    <Container>
      {items.map((item) => {
        return <ItemInList {...item} key={item.id} />
      })}
    </Container>
  )
}

export default ItemsList
