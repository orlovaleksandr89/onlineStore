import React, { useState } from 'react'
import { Col, Image, Row, Button } from 'react-bootstrap'
import { useItems } from '../../hooks/useItems'
import AdminDeleteModal from './admin_modals/AdmitDeleteModal'
import ItemModal from './admin_modals/ItemModal'

function AdminItem({ i, item }) {
  const [showModal, setShowModal] = useState(false)
  const [showItemModal, setShowItemModal] = useState(false)
  const { _id, price, imgURL, quantity, title, itemType } = item
  const { updateItemInDB, loading } = useItems()

  const defaultItemData = {
    ...item,
    price: String(item.price),
    quantity: String(item.quantity)
  }

  const updateHandler = async (data) => {
    try {
      const response = await updateItemInDB(_id, data)
      return response
    } catch (error) {
      console.log(error.response)
    }
  }
  return (
    <Row
      key={_id}
      className='border my-2 mx-3 align-items-center justify-content-center'>
      <Col
        md={1}
        className='d-flex align-items-center justify-content-center mt-4 mt-md-0'>
        {i + 1}
      </Col>
      <Col
        md={2}
        className='d-flex align-items-center justify-content-center fw-bold'>
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
        sm={5}
        xs={8}
        className='d-flex align-items-center justify-content-center '>
        <Image src={imgURL} fluid alt={title} />
      </Col>
      <Col
        md={2}
        className='d-flex align-items-center justify-content-center p-0 m-md-0 mb-4'>
        <div className='d-flex flex-row flex-md-column justify-content-center'>
          <Button
            variant={'warning'}
            className='m-1'
            onClick={() => setShowItemModal(true)}>
            Update item
          </Button>
          <Button
            variant={'danger'}
            className='m-1'
            onClick={() => setShowModal(true)}>
            Delete item
          </Button>
        </div>
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
      {showItemModal && (
        <ItemModal
          show={showItemModal}
          onHide={() => {
            setShowItemModal(false)
          }}
          title={'Update item'}
          cancelButtonText={'Cancel'}
          confirmButtonText={'Update'}
          defaultData={defaultItemData}
          sumbitHandler={updateHandler}
          loading={loading}
        />
      )}
    </Row>
  )
}

export default React.memo(AdminItem)
