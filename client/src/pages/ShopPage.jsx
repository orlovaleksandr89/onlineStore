import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ItemsList from '../components/itemsList'
import SearchBar from '../components/SearchBar'
import TypeBar from '../components/typeBar'
import { Parallax } from 'react-parallax'
import macImg from '../assets/mac.jpg'
import StoreContext from '../store/store'

function ShopPage() {
  const [type, setType] = useState(undefined)
  const storeCtx = useContext(StoreContext)

  const inlineStyle = {
    position: 'absolute',
    left: ' 50%',
    top: ' 50%',
    background: 'transparent',
    padding: '15px',
    color: '#FFFF',
    fontSize: '3.5rem',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Sanserif'
  }
  return (
    <div className='shop_page'>
      <div className='d-none d-lg-block page'>
        <Parallax bgImage={macImg} bgImageAlt='mac' strength={200}>
          <div style={inlineStyle}>The power of Mac</div>
          <div style={{ minHeight: '50vh', width: '100wv' }} />
        </Parallax>
      </div>
      <div className='page'>
        <Row className='m-0 mt-3 p-2'>
          <Col md={3}>
            <TypeBar setType={(type) => setType(type)} />
          </Col>
          <Col md={9} style={{ minHeight: '100vh' }}>
            <div className='d-md-none'>
              <SearchBar />
            </div>
            <ItemsList type={type} search={storeCtx.search} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ShopPage
