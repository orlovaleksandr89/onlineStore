import React, { useState } from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import ModalWindow from './Modal'

function CartItem({
  id,
  price,
  imgUrl,
  title,
  deleteHandler,
  qty,
  decrementQty,
  incrementQty
}) {
  const [showModal, setShowModal] = useState(false)

  return (
    <Container className='p-3'>
      <Row className='d-flex align-items-center justify-content-center text-bold'>
        <Col md={3}>
          <Image src={imgUrl} fluid />
        </Col>
        <Col md={2}>
          {title}
          <br />
          {`${price} $`}
        </Col>
        <Col
          md={5}
          className='d-flex flex-column text-center justifu-content-center align-items-center mt-3'
        >
          Quantity
          <div className='d-flex align-items-center justify-content-center text-center  w-75'>
            <Button
              onClick={() => {
                decrementQty(id)
              }}
              className='mx-1 btn'
            >
              -
            </Button>
            <Form.Control value={qty} onChange={() => {}} />
            <Button
              onClick={() => {
                incrementQty(id)
              }}
              className='mx-1'
            >
              +
            </Button>
          </div>
        </Col>

        <Col
          md={2}
          className='d-flex align-items-center justify-content-center'
        >
          Remove
          <i
            className='bi bi-x-circle ms-1'
            onClick={() => {
              setShowModal(true)
            }}
          ></i>
        </Col>
      </Row>
      {showModal && (
        <ModalWindow
          show={showModal}
          onHide={() => {
            setShowModal(false)
          }}
          title={'You deleting item from cart!'}
          body={'Are you shure?'}
          cancelButtonText={'Keep item'}
          confirmButtonText={'Delete!'}
          redirect={() => deleteHandler(id)}
        />
      )}
    </Container>
  )
}

export default CartItem
