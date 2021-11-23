import React, { useState } from 'react'
import { Button, Container, Row, Col, ListGroup } from 'react-bootstrap'
import { useTypes } from '../hooks/useTypes'

function TypeBar({ setType }) {
  const [selectedType, setSelectedType] = useState()
  const { types } = useTypes()

  return (
    <Container className='px-2'>
      <Row className='w-100 d-flex justify-content-center align-items-center m-0'>
        <Col md={9} className='d-flex justify-content-between  text-center '>
          <ListGroup horizontal={'md'} className='w-100'>
            {types.map((type) => {
              return (
                <ListGroup.Item
                  role='button'
                  action
                  variant='light'
                  className={selectedType === type.value ? 'active' : ''}
                  onClick={() => {
                    setSelectedType(type.value)
                    setType(type.value)
                  }}
                  key={type._id}>
                  {type.value}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Col>
        <Col md={3}>
          <div className='d-flex flex-column my-2'>
            <Button
              variant={'outline-warning'}
              onClick={() => {
                setSelectedType(undefined)
                setType(undefined)
              }}
              className='text-dark w-100'>
              Reset
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default React.memo(TypeBar)
