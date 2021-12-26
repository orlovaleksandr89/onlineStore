import React from 'react'
import { Col, Row, Card, Container } from 'react-bootstrap'
import PaypalExpressBtn from './CheckoutButton'
import { currencyFormat } from '../utils/consts'
import { useUser } from '../hooks/useUser'
import orderServise from '../services/order.service'

function Total({ totlaPrice, history }) {
  const getTax = (totlaPrice) => Math.fround(totlaPrice * 0.08375).toFixed(2)
  const getTotalPrice = (totlaPrice) => {
    return (totlaPrice + Number(getTax(totlaPrice))).toFixed(2)
  }
  const total = Number(getTotalPrice(totlaPrice))

  const { clearCart, user, cartItems } = useUser()

  const clearCartHandler = () => {
    clearCart(user.id)
  }
  const orderItems = cartItems.map((item) => {
    return { productId: item._id, quantity: item.quantity, title: item.title }
  })
  const createOrderHandle = async (paymentId, totalPrice) => {
    try {
      await orderServise.create(user.id, orderItems, paymentId, totalPrice)
    } catch (error) {
      console.log(error.response.message)
    }
  }

  return (
    <Card className='shadow d-flex justify-content-center align-items-center'>
      <Container className='m-0 p-2'>
        <Row>
          <Col md={6} sm={6} className='m-0 p-0'>
            <p className='text-secondary m-0 p-0'>Sub Total</p>
          </Col>
          <Col md={6} sm={6}>
            <p className='fw-bold m-0 p-0'>
              {totlaPrice.toFixed(2)} {currencyFormat}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={6}>
            <p className='text-secondary m-0 p-0'>Tax</p>
          </Col>
          <Col md={6} sm={6}>
            <p className='fw-bold m-0 p-0'>
              {getTax(totlaPrice)} {currencyFormat}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={6}>
            <p className='text-secondary m-0 p-0'>Delivery</p>
          </Col>
          <Col md={6} sm={6}>
            <p className='fw-bold m-0 p-0'>FREE</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6} sm={6}>
            <p className='fw-bold'>Total </p>
          </Col>
          <Col md={6} sm={6}>
            <p className='fw-bold m-0 p-0'>
              {total} {currencyFormat}
            </p>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center mt-3'>
          <PaypalExpressBtn
            total={total}
            history={history}
            clearCart={clearCartHandler}
            className='my-3'
            createOrder={createOrderHandle}
          />
        </Row>

        <Row className='mt-2'>
          <p>* for Paypal checkout use credentials</p>
          <Col md={12} className='fw-bold'>
            username : costumer111@gmail.com
          </Col>
          <Col md={12} className='fw-bold'>
            password : 1234567890
          </Col>
        </Row>
      </Container>
    </Card>
  )
}

export default Total
/*Af31UX4r1rHO6tCzQy7QoqHj8nWxRw-JmgIRbb7TbVJrNs5hCKBcL_c9m66bcwdfbZsuWOxv_GEu-j6o */
