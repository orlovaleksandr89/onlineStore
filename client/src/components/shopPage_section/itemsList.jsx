import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useItems } from '../../hooks/useItems'
import { useTypes } from '../../hooks/useTypes'
import { ItemInList } from './index'

function ItemsList({ search }) {
  const { items } = useItems()
  const { selectedType } = useTypes()

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
        ) : selectedType ? (
          fileterdItems
            .filter((item) =>
              item.itemType.toLowerCase().includes(selectedType.toLowerCase())
            )
            .map((item) => {
              return (
                <Col lg={3} md={4} sm={6} key={item._id} className='py-3'>
                  <ItemInList {...item} key={item._id} />
                </Col>
              )
            })
        ) : (
          fileterdItems.map((item) => {
            return (
              <Col lg={3} md={4} sm={6} key={item._id} className='py-3'>
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
