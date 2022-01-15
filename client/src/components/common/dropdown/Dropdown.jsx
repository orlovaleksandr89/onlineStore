import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Select from 'react-select'
import { getItemsList, getItemsLoadingStatus } from '../../../store/items'

function DropdownList() {
  const items = useSelector(getItemsList())
  const [options, setOptions] = useState([])
  const itemsLoadingStatus = useSelector(getItemsLoadingStatus())
  const history = useHistory()

  useEffect(() => {
    if (!itemsLoadingStatus) {
      setOptions((prevState) => [
        ...prevState,
        ...items.map((item) => ({
          value: item._id,
          label: item.title,
          img: item.imgURL
        }))
      ])
    }
  }, [itemsLoadingStatus, items])

  const changeHandle = (value) => {
    if (value) {
      history.push(`/item/${value.value}`)
    }
  }

  return (
    <Select
      name='items'
      options={options}
      menuShouldBlockScroll
      classNamePrefix='select'
      placeholder={'Search...'}
      onChange={changeHandle}
      formatOptionLabel={(option) => {
        return (
          <Link
            className='text-decoration-none text-dark '
            role='button'
            to={`/item/${option.value}`}>
            <div>
              <img
                src={option.img}
                alt={option.label}
                style={{ height: '30px', width: '30px', marginRight: '30px' }}
              />
              {option.label}
            </div>
          </Link>
        )
      }}
      isClearable
    />
  )
}

export default DropdownList
