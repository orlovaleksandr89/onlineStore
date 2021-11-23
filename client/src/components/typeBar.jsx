import React, { useState } from 'react'
import {
  Button,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton
} from 'react-bootstrap'
import { useTypes } from '../hooks/useTypes'

function TypeBar({ setType }) {
  const [, setSelectedType] = useState()
  const { types } = useTypes()

  return (
    <Container className='p-2'>
      <Row className='w-100'>
        <Col className='d-flex justify-content-center'>
          <DropdownButton
            id='dropdown-basic-button'
            title='Types'
            variant='warning'
            className='mx-2 '>
            {types.map((type) => {
              return (
                <Dropdown.Item
                  onClick={() => {
                    setSelectedType(type.value)
                    setType(type.value)
                  }}
                  key={type._id}>
                  {type.value}
                </Dropdown.Item>
              )
            })}
          </DropdownButton>
        </Col>
        <Col>
          <div className='d-flex flex-column w-100'>
            <Button
              variant={'outline-warning'}
              onClick={() => {
                setSelectedType(undefined)
                setType(undefined)
              }}
              className='text-dark'>
              Reset
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default React.memo(TypeBar)
