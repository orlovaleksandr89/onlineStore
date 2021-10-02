import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../components/typeBar'
import ItemsList from '../components/itemsList'

const Main = () => {
  const [type, setType] = useState(undefined)

  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar setType={(type) => setType(type)} />
        </Col>
        <Col md={9}>
          <ItemsList type={type} />
        </Col>
      </Row>
    </Container>
  )
}

export default Main
