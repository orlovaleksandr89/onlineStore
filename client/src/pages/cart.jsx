import React, { useContext, useState, useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import Total from '../components/Total'
import StoreContext from '../store/store'

const Cart = () => {
  const storeCtx = useContext(StoreContext)
  const { cart } = storeCtx

  const [cartItems, setCartItems] = useState(cart)

  const deleteHandler = (id) => {
    storeCtx.deleteFromCart(id)
  }

  useEffect(() => {
    setCartItems(cart)
    return () => {
      setCartItems([])
    }
  }, [cart])

  const totlaPrice = cartItems
    .map((item) => item.qty * item.price)
    .reduce((a, b) => a + b, 0)

  return (
    <Container className='text-center mt-4'>
      {cartItems.length === 0 ? (
        <h2>
          Your cart is empty. Go to <Link to='/'>main page!</Link>
        </h2>
      ) : (
        <Row>
          <Col md={9}>
            {cartItems.map((item) => {
              return (
                <Card key={item.id} className='mt-2'>
                  <CartItem
                    key={item.id}
                    {...item}
                    deleteHandler={deleteHandler}
                    incrementQty={storeCtx.incrementQty}
                    decrementQty={storeCtx.decrementQty}
                  />
                </Card>
              )
            })}
          </Col>
          <Col md={3}>
            {' '}
            {totlaPrice === 0 ? (
              <h2>Nothing to pay yet</h2>
            ) : (
              <Total totlaPrice={totlaPrice} />
            )}{' '}
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default Cart
