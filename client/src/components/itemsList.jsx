import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import StoreContext from '../store/store'
import ItemInList from './ItemInList'

function ItemsList({ type }) {
  const { items } = useContext(StoreContext)
  let fileterdItems
  type
    ? (fileterdItems = items.filter(
        (item) => item.type.toLowerCase() === type.toLowerCase()
      ))
    : (fileterdItems = items)
  return (
    <Container>
      {fileterdItems.map((item) => {
        return <ItemInList {...item} key={item.id} />
      })}
    </Container>
  )
}

export default ItemsList
