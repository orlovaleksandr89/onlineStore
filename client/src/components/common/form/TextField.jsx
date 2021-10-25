import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TextField({ label, name, onChangeHandle, value, type, error }) {
  const getInputClasses = () => {
    return `${error ? 'form-control is-invalid' : 'form-control'} `
  }
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = ({ target }) => {
    onChangeHandle({ name: target.name, value: target.value })
  }

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className='d-flex flex-column mt-3'>
      <label htmlFor={name} className='mb-2'>
        {label}
      </label>
      <div className='input-group has-validation'>
        <input
          type={showPassword ? 'text' : type}
          id={name}
          value={value}
          name={name}
          onChange={handleChange}
          className={getInputClasses()}
        />
        {type === 'password' && (
          <span
            className='btn btn-outline-secondary '
            type='button'
            onClick={toggleShowPassword}>
            <i className={showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}></i>
          </span>
        )}

        {error && <div className='invalid-feedback text-danger'>{error}</div>}
      </div>
    </div>
  )
}
TextField.defaultProps = { type: 'text' }
TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChangeHandle: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string
}

export default TextField
