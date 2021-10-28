import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CreateItem from './CreateItem'
import CreateType from './CreateType'

function CreateBar() {
  return (
    <Row className='m-2 p-0 m-sm-2 m-xs-2'>
      <Col
        md={6}
        sm={6}
        xs={6}
        className='d-flex align-items-center justify-content-center my-sm-2'>
        <CreateType />
      </Col>
      <Col
        md={6}
        sm={6}
        xs={6}
        className='d-flex align-items-center justify-content-center  my-sm-2'>
        <CreateItem />
      </Col>
    </Row>
  )
}

export default CreateBar
