import React, { useEffect, useState, useContext, useCallback } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { validatorConfig } from '../../../utils/validatorConfig'
import { validator } from '../../../utils/validator'
import StoreContext from '../../../store/store'
import TextField from '../../common/form/TextField'
import TextArea from '../../common/form/TextArea'
import SelectField from '../../common/form/SelectField'
import { useHttp } from '../../../hooks/httpHook'

function ItemModal({
  show,
  onHide,
  title,
  cancelButtonText,
  confirmButtonText
}) {
  const storeCtx = useContext(StoreContext)

  const [data, setData] = useState({
    title: '',
    type: '',
    price: '',
    quantity: '',
    imgURL: '',
    description: ''
  })
  const [errors, setErrors] = useState({})
  const { request, loading } = useHttp()
  const [httperror, setHttperror] = useState({})
  const [successMessage, setSuccessMessage] = useState({})

  const onChangeHandle = ({ name, value }) => {
    setHttperror({})
    setSuccessMessage({})
    if (name === 'price' || name === 'quantity') {
      if (value <= 0) return 1
    }
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

  const createItemInDB = async (item) => {
    try {
      const token = localStorage.getItem('token')
      const data = await request(
        '/auth/createitem',
        'POST',
        { ...item },
        {
          Authorization: `Bearer ${token}`
        }
      )
      setSuccessMessage(data)

      const items = await request('/items')
      storeCtx.setItems(items)

      setTimeout(() => onHide(), 1000)
    } catch (error) {
      setHttperror(error)
    }
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TextField
          label='Title'
          name='title'
          onChange={onChangeHandle}
          value={data.title}
          error={errors.title}
          httperror={httperror.message}
          success={successMessage.message}
        />
        <SelectField
          label='Type'
          options={storeCtx.types}
          defaultOption='Choose type...'
          value={data.type}
          error={errors.type}
          onChangeHandle={onChangeHandle}
          name='type'
        />
        <TextArea
          label='Description'
          name='description'
          onChange={onChangeHandle}
          value={data.description}
          error={errors.description}
        />
        <TextField
          label='Price'
          name='price'
          onChange={onChangeHandle}
          value={data.price}
          error={errors.price}
          type='number'
        />
        <TextField
          label='Quantity'
          name='quantity'
          onChange={onChangeHandle}
          value={data.quantity}
          error={errors.quantity}
          type='number'
        />
        <TextField
          label='Image URL'
          name='imgURL'
          onChange={onChangeHandle}
          value={data.imgURL}
          error={errors.imgURL}
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
          onClick={() => {
            createItemInDB(data)
          }}>
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ItemModal
