import React from 'react'
import PropTypes from 'prop-types'

function CheckField({ name, value, onChange, children, error, ...rest }) {
  const handleChange = ({ target }) => {
    onChange({ name: target.id, value: !target.value })
  }
  const getInputClasses = () => {
    return `${error ? 'form-check-label is-invalid' : 'form-check-label'} `
  }

  return (
    <div className='form-check my-3'>
      <input
        className='form-check-input'
        type='checkbox'
        value=''
        checked={value}
        id={name}
        onChange={handleChange}
        {...rest}
      />
      <label className={getInputClasses()} htmlFor={name}>
        {children}
      </label>

      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )
}
CheckField.propTypes = {
  name: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.bool,
  onChangeHandle: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default CheckField
