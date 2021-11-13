import React, { useContext } from 'react'
import { Col, Row, Card, Container } from 'react-bootstrap'
import PaypalExpressBtn from './CheckoutButton'
import StoreContext from '../store/store'
import { currencyFormat } from '../utils/consts'

function Total({ totlaPrice, history }) {
  const getTax = (totlaPrice) => Math.fround(totlaPrice * 0.08375).toFixed(2)
  const getTotalPrice = (totlaPrice) => {
    return (totlaPrice + Number(getTax(totlaPrice))).toFixed(2)
  }
  const total = Number(getTotalPrice(totlaPrice))
  const storeCtx = useContext(StoreContext)

  return (
    <Card className='shadow d-flex justify-content-center align-items-center'>
      <Container className='m-0 p-2'>
        <Row>
          <Col md={6} sm={6} className='m-0 p-0'>
            <p className='text-secondary m-0 p-0'>Your total</p>
          </Col>
          <Col md={6} sm={6}>
            <p className='fw-bold m-0 p-0'>
              {totlaPrice} {currencyFormat}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={6}>
            <p className='text-secondary m-0 p-0'>VAT</p>
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
            <p>Subtotal </p>
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
            clearCart={storeCtx.clearCart}
            className='my-3'
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
