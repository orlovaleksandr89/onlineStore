import React, { useContext, useState, useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import CartItem from '../components/CartItem'
import StoreContext from '../store/store'

const Cart = () => {
  const storeCtx = useContext(StoreContext)
  const { cart } = storeCtx

  const [cartItems, setCartItems] = useState(cart)
  const [qty, setQty] = useState()

  const deleteHandler = (id) => {
    storeCtx.deleteFromCart(id)
  }

  useEffect(() => {
    setCartItems(cart)
    return () => {
      setCartItems([])
    }
  }, [cart])
  console.log(cartItems, qty)
  return (
    <Container className='text-center mt-4'>
      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <Row>
          <Col md={9}>
            {cartItems.map((item) => {
              return (
                <Card key={item.id} className='mt-2'>
                  <CartItem
                    key={item.id}
                    {...item}
                    setQty={(value) => setQty(value)}
                    deleteHandler={deleteHandler}
                  />
                </Card>
              )
            })}
          </Col>
          <Col md={3}>Total price </Col>
        </Row>
      )}
    </Container>
  )
}

export default Cart
