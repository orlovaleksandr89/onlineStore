import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useTypes } from '../../hooks/useTypes'
import { getItemsList, getItemsLoadingStatus } from '../../store/items'
import Loader from '../common/Loader'
import { ItemInList } from './index'

function ItemsList() {
  const items = useSelector(getItemsList())
  const loading = useSelector(getItemsLoadingStatus())
  const { selectedType } = useTypes()

  if (loading) {
    return <Loader />
  }
  return (
    <Container className='d-flex flex-column '>
      <Row>
        {selectedType
          ? items
              .filter((item) =>
                item.itemType.toLowerCase().includes(selectedType.toLowerCase())
              )
              .map((item) => {
                return (
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    xs={6}
                    key={item._id}
                    className='py-3'>
                    <ItemInList {...item} key={item._id} />
                  </Col>
                )
              })
          : items.map((item) => {
              return (
                <Col
                  lg={3}
                  md={4}
                  sm={6}
                  xs={6}
                  key={item._id}
                  className='py-3'>
                  <ItemInList {...item} key={item._id} />
                </Col>
              )
            })}
      </Row>
    </Container>
  )
}

export default ItemsList
