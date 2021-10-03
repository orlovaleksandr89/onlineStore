import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

function Total({ totlaPrice }) {
  const getTax = (totlaPrice) => Math.fround(totlaPrice * 0.08375).toFixed(2)
  const getTotalPrice = (totlaPrice) => {
    return (totlaPrice + Number(getTax(totlaPrice))).toFixed(2)
  }

  return (
    <Card>
      <Container>
        <Row>
          <Col md={12}>
            <h1>Your total</h1>
            <h5>Cart total {totlaPrice} $</h5>
            <h5>Tax: {getTax(totlaPrice)} $</h5>

            <h4>Your total is {getTotalPrice(totlaPrice)} $</h4>
          </Col>
        </Row>
      </Container>
    </Card>
  )
}

export default Total
