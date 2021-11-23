import React, { useEffect, useState, useCallback } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { validatorConfig } from '../../../utils/validatorConfig'
import { validator } from '../../../utils/validator'
import TextField from '../../common/form/TextField'
import TextArea from '../../common/form/TextArea'
import SelectField from '../../common/form/SelectField'
import { useTypes } from '../../../hooks/useTypes'
import { useItems } from '../../../hooks/useItems'

function ItemModal({
  show,
  onHide,
  title,
  cancelButtonText,
  confirmButtonText
}) {
  const [data, setData] = useState({
    title: '',
    type: '',
    price: '',
    quantity: '',
    imgURL: '',
    description: ''
  })
  const [errors, setErrors] = useState({})
  const { types } = useTypes()
  const { createItemInDB, loading } = useItems()

  const onChangeHandle = ({ name, value }) => {
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

  const createItemInDBHandler = async (item) => {
    try {
      const response = await createItemInDB(item)
      if (response.status === 201) {
        setData({
          title: '',
          type: '',
          price: '',
          quantity: '',
          imgURL: '',
          description: ''
        })
        setTimeout(() => onHide(), 700)
      }
    } catch (error) {}
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
        />
        <SelectField
          label='Type'
          options={types}
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
            createItemInDBHandler(data)
          }}>
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ItemModal
