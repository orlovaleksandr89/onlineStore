import React from 'react'
import PropTypes from 'prop-types'

function SelectField({
  defaultOption,
  onChangeHandle,
  options,
  label,
  value,
  error,
  name,
  ...rest
}) {
  const getInputClasses = () => {
    return `${error ? 'form-select is-invalid' : 'form-select'} `
  }

  const optionsArr =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((optionName) => ({
          name: optionName,
          value: options[optionName].value,
          key: options[optionName]._id
        }))
      : options.map((item) => ({
          name: item.value,
          id: item._id,
          key: item._id
        }))
  const handleChange = ({ target }) => {
    onChangeHandle({ name: target.name, value: target.value })
  }

  if (typeof value === 'object') {
    value = value._id
  }
  return (
    <div className='d-flex flex-column mt-3'>
      <label htmlFor='validationCustom04' className='form-label'>
        {label}
      </label>
      <select
        className={getInputClasses()}
        id='validationCustom04'
        value={value}
        onChange={handleChange}
        name={name}
        {...rest}>
        <option disabled value=''>
          {defaultOption}
        </option>
        {optionsArr &&
          optionsArr.map((option) => {
            return (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            )
          })}
      </select>
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )
}
SelectField.defaultOption = { error: `Please select something` }

SelectField.propTypes = {
  defaultOption: PropTypes.string,
  onChangeHandle: PropTypes.func,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  error: PropTypes.string,
  name: PropTypes.string,
  loading: PropTypes.bool
}

export default SelectField
