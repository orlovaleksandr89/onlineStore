import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

function AdminItem({ _id, price, imgURL, quantity, title, itemType, i }) {
  return (
    <Row key={_id} className='border my-2'>
      <Col md={1} className='d-flex align-items-center justify-content-center'>
        {i + 1}
      </Col>
      <Col md={2} className='d-flex align-items-center justify-content-center'>
        {title}
      </Col>
      <Col md={2} className='d-flex align-items-center justify-content-center'>
        {itemType}
      </Col>
      <Col md={2} className='d-flex align-items-center justify-content-center'>
        {price}
      </Col>
      <Col md={1} className='d-flex align-items-center justify-content-center'>
        {quantity}
      </Col>
      <Col md={2} className='d-flex align-items-center justify-content-center '>
        <Image src={imgURL} fluid alt={title} />
      </Col>
      <Col md={2} className='d-flex align-items-center justify-content-center'>
        Actions
      </Col>
    </Row>
  )
}

export default AdminItem
