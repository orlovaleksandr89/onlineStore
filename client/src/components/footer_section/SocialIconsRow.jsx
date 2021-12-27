import React from 'react'
import { Col, Row } from 'react-bootstrap'

function SocialIconsRow() {
  return (
    <Row className='text-center p-2'>
      <Col sm={4}>
        <a
          href='https://github.com/orlovaleksandr89/onlineStore'
          target='blank'>
          <h5>
            <i class='bi bi-github'></i>
          </h5>
        </a>{' '}
        See code example on GitHub
      </Col>
      <Col sm={4}></Col>
      <Col sm={4}></Col>
    </Row>
  )
}

export default SocialIconsRow
