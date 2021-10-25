import React from 'react'
import PropTypes from 'prop-types'

function RadioField({
  options,
  name,
  onChangeHandle,
  value,
  label = 'Выбирите пол'
}) {
  const handleChange = ({ target }) => {
    onChangeHandle({ name: target.name, value: target.value })
  }

  return (
    <div className="mt-3 mb-3">
      <label className="form-label me-3">{label}</label>
      <div>
        {options &&
          options.map((option, i) => {
            return (
              <div key={i} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name={name}
                  id={option.name + '_' + option.value}
                  value={option.value}
                  checked={option.value === value}
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor={option.name + '_' + option.value}
                >
                  {option.name}
                </label>
              </div>
            )
          })}
      </div>
    </div>
  )
}

RadioField.propTypes = {
  options: PropTypes.PropTypes.array,
  name: PropTypes.string,
  onChangeHandle: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string
}

export default RadioField
