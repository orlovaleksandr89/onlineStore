import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import history from '../utils/history'
import { CartItem, Total } from '../components/cart_section'
import {
  clearCart,
  deleteItemFromCart,
  getCartItems,
  getCartLoadingStatus
} from '../store/cart'
import { getUser } from '../store/user'

import { MAIN_ROUTE } from '../utils/consts'

const Cart = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUser())
  const cartItems = useSelector(getCartItems())
  const cartLoadingStatus = useSelector(getCartLoadingStatus())

  const deleteHandler = (id) => {
    dispatch(deleteItemFromCart(user.id, id))
  }

  const clearCartHandler = () => {
    dispatch(clearCart(user.id))
  }

  const totlaPrice = cartItems
    .map((item) => item.quantity * item.price)
    .reduce((a, b) => a + b, 0)

  return (
    <div className='w-100 text-center h-100'>
      {cartItems.length === 0 ? (
        <div className=' pt-5'>
          <h2>
            Your cart is empty. Go to <Link to={MAIN_ROUTE}>main page!</Link>
          </h2>
        </div>
      ) : (
        <>
          <Row className='p-0 pt-3 m-0 d-flex justifu-content-center align-items-center'>
            <Col md={12}>
              <Button
                className='w-100 mb-3 p-0 text-dark'
                variant={'warning'}
                onClick={clearCartHandler}
                disabled={cartLoadingStatus}>
                Clear Cart
              </Button>
            </Col>
          </Row>
          <Row className='p-0 m-0 w-100'>
            <Col md={8} className='p-0'>
              {cartItems.map((item) => {
                return (
                  <Card key={item._id} className='mb-3'>
                    <CartItem
                      key={item._id}
                      {...item}
                      deleteHandler={deleteHandler}
                      userId={user.id}
                      loading={cartLoadingStatus}
                    />
                  </Card>
                )
              })}
            </Col>
            <Col md={4} className='mb-3'>
              {totlaPrice === 0 ? (
                <h2>Nothing to pay yet</h2>
              ) : (
                <Total totlaPrice={totlaPrice} history={history} />
              )}
            </Col>
          </Row>
        </>
      )}
    </div>
  )
}

export default Cart
