import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ItemsList, SearchBar } from '.'
import StoreContext from '../../store/store'

const ShopPageList = () => {
  const storeCtx = useContext(StoreContext)
  return (
    <Row className='m-0 mt-3 p-2 align-items-center justify-content-center d-flex w-100'>
      <Col md={12}>
        <div className='d-md-none'>
          <SearchBar />
        </div>
        <ItemsList search={storeCtx.search} />
      </Col>
    </Row>
  )
}

export default ShopPageList
