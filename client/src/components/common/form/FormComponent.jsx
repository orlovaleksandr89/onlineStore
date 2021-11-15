import React, { useState, useEffect, useCallback } from 'react'
import { validator } from '../../../utils/validator'
import { validatorConfig } from '../../../utils/validatorConfig'

function FormComponent({ children, onSubmit, setHttperror }) {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})

  const handleChange = useCallback(
    (target) => {
      setData((prevState) => ({ ...prevState, [target.name]: target.value }))
      setHttperror({})
    },
    [setHttperror]
  )

  const validate = useCallback(
    (data) => {
      const errors = validator(data, validatorConfig)
      setErrors(errors)
      return Object.keys(errors).length === 0
    },
    [setErrors]
  )

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = validate()

    if (!isValid) {
      return
    }

    onSubmit(data)
  }

  useEffect(() => {
    if (Object.keys(data).length > 0) validate(data)
  }, [data, validate])

  const isValid = Object.keys(errors).length === 0

  const clonedFormElements = React.Children.map(children, (child) => {
    const childType = typeof child.type
    let config = {}

    if (childType === 'object') {
      if (!child.props.name) {
        throw new Error('Name is required', child)
      }

      config = {
        ...child.props,
        onChange: handleChange,
        value: data[child.props.name] || '',
        error: errors[child.props.name]
      }
    }
    if (childType === 'string') {
      if (child.type === 'button') {
        if (child.props.type === 'submit' || child.props.type === undefined) {
          config = { ...child.props, disabled: !isValid }
        }
      }
    }
    return React.cloneElement(child, config)
  })

  return <form onSubmit={handleSubmit}>{clonedFormElements}</form>
}

export default FormComponent
