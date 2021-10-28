import React from 'react'
import { Col, Row } from 'react-bootstrap'

function AdminHeader() {
  return (
    <Row className='border'>
      <Col md={1} className='d-flex justify-content-center '>
        id
      </Col>
      <Col md={2} className='d-flex align-items-center justify-content-center'>
        Title
      </Col>
      <Col md={2} className='d-flex align-items-center justify-content-center'>
        Type
      </Col>
      <Col md={2} className='d-flex align-items-center justify-content-center'>
        Price
      </Col>
      <Col md={1} className='d-flex align-items-center justify-content-center'>
        Quantity
      </Col>
      <Col md={2} className='d-flex align-items-center justify-content-center'>
        ImageUrl
      </Col>
      <Col md={2} className='d-flex align-items-center justify-content-center'>
        Actions
      </Col>
    </Row>
  )
}

export default AdminHeader
