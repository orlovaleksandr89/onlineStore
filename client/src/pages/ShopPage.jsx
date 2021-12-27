import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  ItemsList,
  ParallaxCover,
  SearchBar,
  TypeBar
} from '../components/shopPage_section'

import StoreContext from '../store/store'
import { useItems } from '../hooks/useItems'
import Loader from '../components/common/Loader'

function ShopPage() {
  const [type, setType] = useState(undefined)
  const storeCtx = useContext(StoreContext)
  const { loading } = useItems()

  if (loading) {
    return <Loader />
  }

  return (
    <div className='shop_page'>
      <ParallaxCover />

      <Row className='m-0 mt-3 p-2 align-items-center justify-content-center d-flex'>
        <Col md={12}>
          <TypeBar setType={(type) => setType(type)} />
        </Col>
        <Col md={12}>
          <div className='d-md-none'>
            <SearchBar />
          </div>
          <ItemsList type={type} search={storeCtx.search} />
        </Col>
      </Row>
    </div>
  )
}

export default ShopPage
