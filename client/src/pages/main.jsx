import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ItemsList from '../components/itemsList'
import TypeBar from '../components/typeBar'

const Main = () => {
  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <ItemsList />
        </Col>
      </Row>
    </Container>
  )
}

export default Main
