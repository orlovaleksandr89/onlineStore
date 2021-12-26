import React, { useCallback, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { validatorConfig } from '../../../utils/validatorConfig'
import { validator } from '../../../utils/validator'
import TextField from '../../common/form/TextField'
import { useTypes } from '../../../hooks/useTypes'

function TypeModal({
  show,
  onHide,
  title,
  cancelButtonText,
  confirmButtonText
}) {
  const [data, setData] = useState({ type: '' })
  const [errors, setErrors] = useState({})

  const { loading, createTypeInDB } = useTypes()

  const onChangeHandle = useCallback((target) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }))
  }, [])
  const validate = useCallback((data) => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)

    return Object.keys(errors).length === 0
  }, [])
  const createTypeHandle = async (data) => {
    const response = await createTypeInDB(data)
    if (response.status === 201) {
      setTimeout(() => {
        onHide()
      }, 700)
    }
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
          onClick={() => createTypeHandle(data.type)}>
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TypeModal
