import React, { useContext, useState } from 'react'
import { ListGroup, Button, Container } from 'react-bootstrap'
import StoreContext from '../store/store'

function TypeBar({ setType }) {
  const storeCtx = useContext(StoreContext)
  const [selectedType, setSelectedType] = useState()
  if (storeCtx.types.length === 0) {
    return <p>Loading....</p>
  }
  return (
    <Container className='p-2'>
      <ListGroup>
        {storeCtx.types.map((type) => {
          return (
            <ListGroup.Item
              key={type.id}
              role='button'
              onClick={() => {
                setSelectedType(type.type)
                setType(type.type)
              }}
              className={
                type.type === selectedType ? 'list-group-item-dark' : ''
              }>
              {type.type}
            </ListGroup.Item>
          )
        })}
      </ListGroup>
      <div className='d-flex flex-column  mt-3'>
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
    </Container>
  )
}

export default TypeBar
