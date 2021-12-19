import React, { useState } from 'react'
import { Row, Col, Image, Form, Button } from 'react-bootstrap'
import { currencyFormat } from '../utils/consts'
import ModalWindow from './common/Modal'

function CartItem({
  _id,
  price,
  imgURL,
  title,
  deleteHandler,
  quantity,
  decrementCartItemQuantity,
  incrementCartItemQuantity,
  loading,
  userId
}) {
  const [showModal, setShowModal] = useState(false)
  const [cartItemQuantity, setCartItemQuantity] = useState(quantity)

  const quantityDecrementChangeHandler = (userId, itemId, quantity) => {
    if (cartItemQuantity > 1) {
      setCartItemQuantity((prev) => prev - 1)
      decrementCartItemQuantity(userId, itemId, quantity)
    } else {
      return setShowModal(true)
    }
  }
  const quantityIncrementChangeHandler = async (userId, itemId, quantity) => {
    setCartItemQuantity((prev) => prev + 1)
    incrementCartItemQuantity(userId, itemId, quantity)
  }

  return (
    <div className='p-3 shadow'>
      <Row className='d-flex align-items-center justify-content-center'>
        <Col xs={6} sm={4} lg={2}>
          <Image src={imgURL} fluid />
        </Col>
        <Col xs={12} sm={7}>
          <Row>
            <Col xs={12}>
              {title}
              <br />
              {`${price} ${currencyFormat}`}
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              className='d-flex flex-column text-center justifu-content-center align-items-center mt-3 p-0'>
              Quantity
              <div className='d-flex align-items-center justify-content-between p-2'>
                <Button
                  onClick={() =>
                    quantityDecrementChangeHandler(userId, _id, quantity - 1)
                  }
                  className='btn btn-secondary'
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                  disabled={loading}>
                  <i className='bi bi-dash'></i>
                </Button>
                <Form.Control
                  className='text-center w-50'
                  value={cartItemQuantity}
                  readOnly
                />
                <Button
                  onClick={() =>
                    quantityIncrementChangeHandler(userId, _id, quantity + 1)
                  }
                  className=' btn btn-secondary '
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                  disabled={loading}>
                  <i className='bi bi-plus'></i>
                </Button>
              </div>
            </Col>
          </Row>
        </Col>

        <Col
          xs={12}
          sm={1}
          className='d-flex align-items-center justify-content-center text-center text-danger'>
          <h3>
            <i
              className='bi bi-trash '
              role='button'
              onClick={() => {
                setShowModal(true)
              }}></i>
          </h3>
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
          redirect={() => deleteHandler(_id)}
        />
      )}
    </div>
  )
}

export default CartItem
