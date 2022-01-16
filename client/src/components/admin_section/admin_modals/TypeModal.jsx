import React, { useCallback, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { validatorConfig } from '../../../utils/validatorConfig'
import { validator } from '../../../utils/validator'
import TextField from '../../common/form/TextField'
import { useDispatch, useSelector } from 'react-redux'
import { createTypeInDb, getTypesLoadingStatus } from '../../../store/types'

function TypeModal({
  show,
  onHide,
  title,
  cancelButtonText,
  confirmButtonText
}) {
  const [data, setData] = useState({ type: '' })
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const loading = useSelector(getTypesLoadingStatus())

  const onChangeHandle = useCallback((target) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }))
  }, [])

  const validate = useCallback((data) => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)

    return Object.keys(errors).length === 0
  }, [])

  const submitHandler = (data) => {
    const type = data.trim()
    dispatch(createTypeInDb(type))
    onHide()
  }

  useEffect(() => {
    validate(data)
  }, [data, validate])

  const isValid = Object.keys(errors).length === 0
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TextField
          name='type'
          onChange={onChangeHandle}
          value={data.type}
          error={errors.type}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='outline-warning'
          className='text-dark'
          onClick={onHide}>
          {cancelButtonText}
        </Button>
        <Button
          variant='outline-success'
          className='text-dark'
          disabled={!isValid || loading}
          onClick={() => submitHandler(data.type)}>
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TypeModal
