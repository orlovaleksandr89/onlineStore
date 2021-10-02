import React from 'react'
import { Card, Row, Col, Image, Container, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function ItemInList({ title, price, imgUrl, id }) {
  const history = useHistory()
  return (
    <Card className='my-2'>
      <Container>
        <Row>
          <Col md={4} className='d-flex align-items-center'>
            <Image
              className='ms-2'
              src={imgUrl}
              fluid
              role='button'
              onClick={() => {
                history.push(`/item/${id}`)
              }}
            />
          </Col>
          <Col
            md={8}
            className='d-flex flex-column justify-content-between py-5 align-items-center'
          >
            <h3>{title}</h3>
            <h4> {`Price  ${price}$`}</h4>

            <Button
              variant={'outline-warning'}
              className='text-dark'
              onClick={() => {
                history.push(`/item/${id}`)
              }}
            >
              Check details
            </Button>
          </Col>
        </Row>
      </Container>
    </Card>
  )
}

export default ItemInList
