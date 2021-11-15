import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { validatorConfig } from '../../../utils/validatorConfig'
import { validator } from '../../../utils/validator'
import TextField from '../../common/form/TextField'
import { useHttp } from '../../../hooks/httpHook'
import StoreContext from '../../../store/store'

function TypeModal({
  show,
  onHide,
  title,
  cancelButtonText,
  confirmButtonText
}) {
  const [data, setData] = useState({ type: '' })
  const [errors, setErrors] = useState({})
  const { request, loading } = useHttp()
  const [httperror, setHttperror] = useState({})
  const [successMessage, setSuccessMessage] = useState({})
  const storeCtx = useContext(StoreContext)

  const createTypeInDB = async (text) => {
    try {
      const token = localStorage.getItem('token')
      const data = await request(
        '/auth/createtype',
        'POST',
        {
          type: text.trim()
        },
        {
          Authorization: `Bearer ${token}`
        }
      )
      setSuccessMessage(data)
      const types = await request('/types')
      storeCtx.setTypes(types)
      setTimeout(() => onHide(), 1000)
    } catch (error) {
      setHttperror(error)
    }
  }

  const onChangeHandle = ({ name, value }) => {
    setHttperror({})
    setSuccessMessage({})
    setData((prev) => ({ ...prev, [name]: value }))
  }
  const validate = useCallback((data) => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)

    return Object.keys(errors).length === 0
  }, [])

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
          httperror={httperror.message}
          success={successMessage.message}
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
          onClick={() => createTypeInDB(data.type)}>
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TypeModal
