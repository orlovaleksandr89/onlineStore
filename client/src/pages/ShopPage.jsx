import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ItemsList from '../components/itemsList'
import SearchBar from '../components/SearchBar'
import TypeBar from '../components/typeBar'
import { Parallax } from 'react-parallax'
import macImg from '../assets/mac.jpg'
import StoreContext from '../store/store'
import { useItems } from '../hooks/useItems'
import Loader from '../components/common/Loader'

function ShopPage() {
  const [type, setType] = useState(undefined)
  const [showMessage, setShowMessage] = useState(false)
  const storeCtx = useContext(StoreContext)
  const { loading } = useItems()

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true)
    }, 500)
  })
  if (loading) {
    return <Loader />
  }

  return (
    <div className='shop_page'>
      <div className='d-none d-lg-block'>
        <Parallax bgImage={macImg} bgImageAlt='mac' strength={200}>
          <div className={!showMessage ? 'parallax' : 'parallax hide'}>
            The power of Mac
          </div>
          <div style={{ minHeight: '50vh', width: '100wv' }} />
        </Parallax>
      </div>

      <Row className='m-0 mt-3 p-2'>
        <Col md={12}>
          <TypeBar setType={(type) => setType(type)} />
        </Col>
        <Col md={12} style={{ minHeight: '100vh' }}>
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
