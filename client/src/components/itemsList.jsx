import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import StoreContext from '../store/store'
import ItemInList from './ItemInList'

function ItemsList({ type, search }) {
  const { items } = useContext(StoreContext)

  const getSearchResult = (search) => {
    const result = items.filter((item) =>
      item.title
        .toLowerCase()
        .replaceAll(' ', '')
        .includes(search.toLowerCase())
    )
    return result
  }

  const fileterdItems = getSearchResult(search)

  return (
    <Container>
      {fileterdItems.length === 0 ? (
        <h2>'No items found'</h2>
      ) : type ? (
        fileterdItems
          .filter((item) => item.type.toLowerCase() === type.toLowerCase())
          .map((item) => {
            return <ItemInList {...item} key={item.id} />
          })
      ) : (
        fileterdItems.map((item) => {
          return <ItemInList {...item} key={item.id} />
        })
      )}
    </Container>
  )
}

export default ItemsList
