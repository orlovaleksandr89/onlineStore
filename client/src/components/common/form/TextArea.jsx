import React from 'react'
import PropTypes from 'prop-types'

function TextArea({
  label,
  placeholder,
  name,
  onChangeHandle,
  value,
  rows = 3,
  error
}) {
  const getInputClasses = () => {
    return `${error ? 'form-control p-1 is-invalid' : 'form-control p-1'} `
  }
  const handleChange = ({ target }) => {
    onChangeHandle({ name: target.id, value: target.value })
  }
  return (
    <div className="my-3">
      <label htmlFor={name} className="mb-3">
        {label}
      </label>

      <div className="form-floating ">
        <textarea
          className={getInputClasses()}
          placeholder={placeholder}
          id={name}
          style={{ height: rows * 24 + 'px' }}
          value={value}
          onChange={handleChange}
        ></textarea>
        {error && <div className="invalid-feedback text-danger">{error}</div>}
      </div>
    </div>
  )
}
TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChangeHandle: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  rows: PropTypes.number
}
export default TextArea
