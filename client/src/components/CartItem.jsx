import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'

function CartItem({ id, price, imgUrl, title, deleteHandler, setQty }) {
  const [value, setValue] = useState(1)
  const [itemPrice, setPrice] = useState(price)
  useEffect(() => {
    setQty(Number(value))
    return () => {
      setQty(0)
    }
  }, [setQty, value])

  return (
    <Container className='p-3'>
      <Row className='d-flex align-items-center justify-content-center text-bold'>
        <Col md={3}>
          <Image src={imgUrl} fluid />
        </Col>
        <Col md={3}>
          {title}
          <br />
          {`${price} $`}
        </Col>
        <Col md={3}>
          <div className='d-flex align-items-center justify-content-center'>
            Quantity
            <Form className='ms-3'>
              <Form.Control
                className='mt-2'
                type='number'
                value={value}
                onChange={(e) => {
                  if (Number(value) > 0) {
                    setValue(e.target.value)
                    return setPrice(e.target.value * price)
                  }
                  return setValue(1)
                }}
              />
            </Form>
          </div>
        </Col>
        <Col md={2}>Total {itemPrice} $</Col>
        <Col
          md={1}
          className='d-flex align-items-center justify-content-center'
        >
          <Button
            onClick={() => {
              deleteHandler(id)
            }}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default CartItem
