import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useItems } from '../../../hooks/useItems'
import { debounce } from '../../../utils/debounceFunction'
import styles from './Dropdown.module.css'

function DropdownList() {
  const [search, setSearch] = useState('')

  const [focus, setFocus] = useState(false)
  let { items } = useItems()
  const inputRef = useRef(null)

  const toggleFocus = () => {
    setFocus(true)
  }
  const handleChange = (text) => {
    setSearch(text)
  }
  const getSearchResult = (search) => {
    const result = items.filter((item) =>
      item.title
        .toLowerCase()
        .replaceAll(' ', '')
        .includes(search.toLowerCase())
    )
    return result
  }
  const fileterdItems = getSearchResult(search)

  useEffect(() => {
    getSearchResult(search)
    return () => {
      setSearch('')
    }
  }, [])

  const optimizedFn = useCallback(debounce(handleChange, 500), [])

  const clearInput = () => {
    setSearch('')
    return (inputRef.current.value = '')
  }
  const closeList = (e) => {
    setFocus(e && e.target === inputRef.current)
  }

  useEffect(() => {
    document.addEventListener('click', closeList)
    return () => {
      document.removeEventListener('click', closeList)
    }
  }, [])

  return (
    <div className={styles.dropdown}>
      <Form className=' my-0 w-100  position-relative  d-flex flex-row'>
        <Form.Control
          type='text'
          placeholder='Search'
          ref={inputRef}
          onClick={() => {
            toggleFocus()
          }}
          onChange={(e) => optimizedFn(e.target.value)}
        />
        <Button
          className='btn position-absolute top-50 end-0 translate-middle-y me-1 p-0'
          variant={'outline'}
          onClick={() => {
            clearInput()
          }}>
          <h2 className='m-0 p-0'>
            <i className='  bi bi-x'></i>
          </h2>
        </Button>
      </Form>
      {focus && (
        <div
          className={
            focus ? `${styles.active} ${styles.options}` : styles.options
          }>
          {fileterdItems.length > 0 ? (
            fileterdItems.map((item) => {
              return (
                <Link
                  key={item._id}
                  to={`/item/${item._id}`}
                  onClick={() => {
                    clearInput()
                  }}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    overflowX: 'hidden'
                  }}>
                  <Row className=' d-flex justify-content-center align-items-center w-100 m-0'>
                    <Col md={4} className=''>
                      <img
                        src={item.imgURL}
                        className='img-fluid '
                        alt={item.title}
                      />
                    </Col>
                    <Col md={8} className=''>
                      <div className={styles.option}>{item.title}</div>
                    </Col>
                  </Row>
                </Link>
              )
            })
          ) : (
            <Row className=' d-flex justify-content-center align-items-center w-100'>
              <Col md={12}>
                <div className={styles.option}>No items found...</div>
              </Col>
            </Row>
          )}
        </div>
      )}
    </div>
  )
}

export default React.memo(DropdownList)
