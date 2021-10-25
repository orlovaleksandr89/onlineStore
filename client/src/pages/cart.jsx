import React, { useContext, useState, useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import CartItem from '../components/CartItem'
import Total from '../components/Total'
import StoreContext from '../store/store'

const Cart = () => {
  const history = useHistory()
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
    <Container className=' text-center mt-4'>
      {cartItems.length === 0 ? (
        <h2>
          Your cart is empty. Go to <Link to='/'>main page!</Link>
        </h2>
      ) : (
        <Row className=' p-0 m-0 w-100'>
          <Col md={8} classname='p-0'>
            {cartItems.map((item) => {
              return (
                <Card key={item.id} className='mb-3'>
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
          <Col md={4}>
            {totlaPrice === 0 ? (
              <h2>Nothing to pay yet</h2>
            ) : (
              <Total totlaPrice={totlaPrice} history={history} />
            )}
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default Cart
