import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
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
    <Container className='d-flex flex-column '>
      <Row>
        {fileterdItems.length === 0 ? (
          <h2>'No items found'</h2>
        ) : type ? (
          fileterdItems
            .filter((item) =>
              item.itemType.toLowerCase().includes(type.toLowerCase())
            )
            .map((item) => {
              return (
                <Col md={4} key={item._id} className='py-3'>
                  <ItemInList {...item} key={item._id} />
                </Col>
              )
            })
        ) : (
          fileterdItems.map((item) => {
            return (
              <Col md={4} key={item._id} className='py-3'>
                <ItemInList {...item} key={item._id} />
              </Col>
            )
          })
        )}
      </Row>
    </Container>
  )
}

export default ItemsList
