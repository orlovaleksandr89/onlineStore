import React from 'react'
import { Col, Row } from 'react-bootstrap'

function IconsRow() {
  return (
    <Row className='text-center'>
      <Col sm={3}>
        <h5>
          <i className='bi bi-truck'></i>
        </h5>
        Free shipping
      </Col>
      <Col sm={3}>
        <h5>
          <i className='bi bi-headset'></i>
        </h5>
        24/7 Costumer Support
      </Col>
      <Col sm={3}>
        <h5>
          <i className='bi bi-stack'></i>
        </h5>
        MERN Stack
      </Col>
      <Col sm={3}>
        <a
          href='https://github.com/orlovaleksandr89/onlineStore'
          target='blank'
          className='link-dark'>
          <h5>
            <i className='bi bi-github'></i>
          </h5>
        </a>{' '}
        Code example
      </Col>
    </Row>
  )
}

export default IconsRow
