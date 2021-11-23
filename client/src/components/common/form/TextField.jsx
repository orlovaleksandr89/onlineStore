import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

function TextField({
  label,
  name,
  onChange,
  value,
  type,
  error,

  ...rest
}) {
  const getInputClasses = () => {
    return `${error ? 'form-control is-invalid' : 'form-control'} `
  }
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = useCallback(
    ({ target }) => {
      onChange({ name: target.name, value: target.value })
    },
    [onChange]
  )

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
          {...rest}
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
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.string
}

export default React.memo(TextField)
