import React, { useState } from 'react'
import { Col, Image, Row, Button } from 'react-bootstrap'
import AdminDeleteModal from './admin_modals/AdmitDeleteModal'

function AdminItem({ _id, price, imgURL, quantity, title, itemType, i }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <Row
      key={_id}
      className='border my-2 mx-3 align-items-center justify-content-center'>
      <Col
        md={1}
        className='d-flex align-items-center justify-content-center mt-4 mt-md-0'>
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
      <Col
        md={2}
        sm={8}
        className='d-flex align-items-center justify-content-center '>
        <Image src={imgURL} fluid alt={title} />
      </Col>
      <Col
        md={2}
        className='d-flex align-items-center justify-content-center p-0 m-md-0 mb-4'>
        <Button variant={'danger'} onClick={() => setShowModal(true)}>
          Delete item
        </Button>
      </Col>
      {showModal && (
        <AdminDeleteModal
          show={showModal}
          title={`Please confirm action`}
          body={`Are you sure you want to delete ${title}?`}
          onHide={() => setShowModal(false)}
          cancelButtonText='Cancel'
          confirmButtonText='Delete item'
          id={_id}
        />
      )}
    </Row>
  )
}

export default AdminItem
