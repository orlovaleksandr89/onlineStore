import React, { useContext } from 'react'
import { Col, Row, Card } from 'react-bootstrap'
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
    <Card>
      <Row>
        <Col>
          <h4>Your total</h4>
          <p>Cart total: {totlaPrice} $</p>
          <p>Tax: {getTax(totlaPrice)} $</p>

          <h4>Total is {total} $</h4>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
        <PaypalExpressBtn
          total={total}
          history={history}
          clearCart={storeCtx.clearCart}
          className='my-3'
        />
      </Row>
    </Card>
  )
}

export default Total
/*Af31UX4r1rHO6tCzQy7QoqHj8nWxRw-JmgIRbb7TbVJrNs5hCKBcL_c9m66bcwdfbZsuWOxv_GEu-j6o */
