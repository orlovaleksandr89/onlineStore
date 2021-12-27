import React, { useContext, useRef } from 'react'
import { Form, Row, Button, Container } from 'react-bootstrap'
import StoreContext from '../../store/store'
import { debounce } from '../../utils/debounceFunction'

function SearchBar() {
  const storeCtx = useContext(StoreContext)
  const inputRef = useRef()

  const handleChange = (text) => {
    storeCtx.setSearch(text)
  }

  const optimizedFn = debounce(handleChange, 500)

  return (
    <>
      <Container className='px-2 position-relative'>
        <Row className='d-flex justify-content-center align-items-center p-0'>
          <Form className=' my-2  position-relative  d-flex flex-row'>
            <Form.Control
              type='text'
              placeholder='Search'
              onChange={(e) => optimizedFn(e.target.value)}
              ref={inputRef}
            />
            <Button
              className='btn position-absolute top-50 end-0 translate-middle-y me-3 p-0'
              variant={'outline'}
              onClick={() => {
                storeCtx.setSearch('')
                inputRef.current.value = ''
              }}>
              <h2 className='m-0 p-0'>
                <i className='  bi bi-x'></i>
              </h2>
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  )
}

export default SearchBar
