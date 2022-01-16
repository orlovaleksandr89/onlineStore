import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { CheckField } from '../common/form/'
import {
  getTypesList,
  getTypesLoadingStatus,
  selectType,
  getSelectedType
} from '../../store/types'

function TypeBar() {
  const dispatch = useDispatch()
  const types = useSelector(getTypesList())
  const typesLoading = useSelector(getTypesLoadingStatus())
  const selectedType = useSelector(getSelectedType())
  const handleOnChange = (target) => {
    dispatch(selectType(target.name))
  }

  if (typesLoading) {
    return <p>loading</p>
  }

  return (
    <Container className='px-2 text-center mt-5'>
      <Row className='w-100 d-flex justify-content-center align-items-center m-0'>
        <h3>Filter by type</h3>
        <Col md={12} className='d-flex justify-content-start  text-start '>
          <form>
            {types.map((type) => {
              return (
                <CheckField
                  key={type._id}
                  name={type.value}
                  onChange={handleOnChange}
                  data-bs-toggle='offcanvas'
                  value={selectedType === type.value ? true : false}>
                  {type.value}
                </CheckField>
              )
            })}
          </form>
        </Col>
      </Row>

      <Row className='w-100 d-flex justify-content-center align-items-center m-0'>
        <Col md={12}>
          <div className='d-flex flex-column my-2'>
            <Button
              variant={'outline-warning'}
              onClick={() => dispatch(selectType(null))}
              data-bs-toggle='offcanvas'
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
