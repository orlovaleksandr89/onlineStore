import React from 'react'
import { Card, Row, Col, Image, Container } from 'react-bootstrap'

function ItemInList({ title, price, id, description, imgUrl }) {
  return (
    <Card className='my-2' role='button'>
      <Container>
        <Row>
          <Col md={4}>
            <Image
              className='ms-2'
              src={imgUrl}
              style={{ width: 3000 }}
              fluid
              role='button'
            />
          </Col>
          <Col
            md={8}
            className='d-flex flex-column justify-content-center align-items-center'
          >
            <h4>{title}</h4>
            {`Description : ${description}`}
            <h4> {`Price  ${price}$`}</h4>
            {`Item Id ${id}`}
          </Col>
        </Row>
      </Container>
    </Card>
  )
}

export default ItemInList
