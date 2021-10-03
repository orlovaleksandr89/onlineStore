import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../components/typeBar'
import ItemsList from '../components/itemsList'
import SearchBar from '../components/SearchBar'

const Main = () => {
  const [type, setType] = useState(undefined)
  const [search, setSearch] = useState('')
  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar setType={(type) => setType(type)} />
        </Col>
        <Col md={9}>
          <SearchBar setSearch={setSearch} search={search} />
          <ItemsList type={type} search={search} />
        </Col>
      </Row>
    </Container>
  )
}

export default Main
