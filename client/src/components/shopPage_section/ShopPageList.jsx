import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ItemsList } from '.'

import DropdownList from '../common/dropdown/Dropdown'

const ShopPageList = () => {
  return (
    <Row className='m-0 mt-3 p-2 align-items-center justify-content-center d-flex w-100'>
      <Col xs={10} className='d-md-none d-block'>
        <DropdownList />
      </Col>
      <Col md={12}>
        <ItemsList />
      </Col>
    </Row>
  )
}

export default ShopPageList
