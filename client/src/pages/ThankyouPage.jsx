import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MAIN_ROUTE } from '../utils/consts'

function ThankyouPage() {
  return (
    <Container>
      <Row style={{ height: 'calc(100vh - 78px' }}>
        <Col
          md={12}
          className='d-flex flex-column align-items-center justify-content-center text-center'>
          <h2>Thank you</h2>
          <p>
            We appreciate your purchase of our products. You will receive your
            goods in a matter of time. Hope you will enjoy it. Your{' '}
            <b>RedFox-online</b> team
          </p>
          <p>
            Go to <Link to={MAIN_ROUTE}>Main Page</Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default ThankyouPage
