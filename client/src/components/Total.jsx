import React, { useContext } from 'react'
import { Col, Row, Card, Container } from 'react-bootstrap'
import PaypalExpressBtn from './CheckoutButton'
import StoreContext from '../store/store'

function Total({ totlaPrice, history }) {
  const getTax = (totlaPrice) => Math.fround(totlaPrice * 0.08375).toFixed(2)
  const getTotalPrice = (totlaPrice) => {
    return (totlaPrice + Number(getTax(totlaPrice))).toFixed(2)
  }
  const total = Number(getTotalPrice(totlaPrice))
  const storeCtx = useContext(StoreContext)

  return (
    <Card className='shadow'>
      <Container className='m-0 p-2'>
        <Row>
          <Col md={6} sm={6} className='m-0 p-0'>
            <p className='text-secondary m-0 p-0'>Your total</p>
          </Col>
          <Col md={6} sm={6}>
            <p className='fw-bold m-0 p-0'>{totlaPrice} $</p>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={6}>
            <p className='text-secondary m-0 p-0'>VAT</p>
          </Col>
          <Col md={6} sm={6}>
            <p className='fw-bold m-0 p-0'>{getTax(totlaPrice)} $</p>
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
            <p className='fw-bold m-0 p-0'>{total} $</p>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center '>
          <PaypalExpressBtn
            total={total}
            history={history}
            clearCart={storeCtx.clearCart}
            className='my-3'
          />
        </Row>
      </Container>
    </Card>
  )
}

export default Total
/*Af31UX4r1rHO6tCzQy7QoqHj8nWxRw-JmgIRbb7TbVJrNs5hCKBcL_c9m66bcwdfbZsuWOxv_GEu-j6o */
