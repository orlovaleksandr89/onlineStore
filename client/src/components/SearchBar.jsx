import React from 'react'
import { Form, Row, Button, Container } from 'react-bootstrap'

function SearchBar({ setSearch, search }) {
  return (
    <Container>
      <Row className='d-flex justify-content-center align-items-center'>
        <Form className='my-3  position-relative  d-flex flex-row'>
          <Form.Control
            type='text'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}></Form.Control>
          <Button
            className='btn position-absolute top-50 end-0 translate-middle-y me-3 p-0'
            variant={'outline'}
            onClick={() => setSearch('')}>
            <h2 className='m-0 p-0'>
              <i className='  bi bi-x'></i>
            </h2>
          </Button>
        </Form>
      </Row>
    </Container>
  )
}

export default SearchBar
