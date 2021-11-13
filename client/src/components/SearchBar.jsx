import React, { useCallback, useContext } from 'react'
import { Form, Row, Button, Container } from 'react-bootstrap'
import StoreContext from '../store/store'

function SearchBar() {
  const storeCtx = useContext(StoreContext)
  const handleChange = useCallback(
    (e) => {
      storeCtx.setSearch(e.target.value)
    },
    [storeCtx]
  )

  return (
    <Container className='px-2'>
      <Row className='d-flex justify-content-center align-items-center p-0'>
        <Form className=' my-2  position-relative  d-flex flex-row'>
          <Form.Control
            type='text'
            placeholder='Search'
            value={storeCtx.search}
            onChange={handleChange}
          />
          <Button
            className='btn position-absolute top-50 end-0 translate-middle-y me-3 p-0'
            variant={'outline'}
            onClick={() => storeCtx.setSearch('')}>
            <h2 className='m-0 p-0'>
              <i className='  bi bi-x'></i>
            </h2>
          </Button>
        </Form>
      </Row>
    </Container>
  )
}

export default React.memo(SearchBar)
