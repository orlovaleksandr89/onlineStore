import React, { useContext, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useHttp } from '../../../hooks/httpHook'
import StoreContext from '../../../store/store'
import Loader from '../../common/Loader'

function ItemModal({
  show,
  onHide,
  title,
  body,
  cancelButtonText,
  confirmButtonText,
  id
}) {
  const { request, loading } = useHttp()
  const [httperror, setHttperror] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const storeCtx = useContext(StoreContext)

  const deleteItemHandler = async (id) => {
    try {
      const token = localStorage.getItem('token')
      const data = await request(
        '/auth/deleteitem',
        'POST',
        {
          id: id
        },
        {
          Authorization: `Bearer ${token}`
        }
      )
      setSuccessMessage(data.message)
      const items = await request('/items')
      storeCtx.setItems(items)

      setTimeout(() => onHide(), 1000)
    } catch (error) {
      setHttperror(error.message)
    }
  }
  if (loading) {
    return <Loader />
  }
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {body}
        {httperror && <div className='text-danger'>{httperror}</div>}
        {successMessage && <div className='text-success'>{successMessage}</div>}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='outline-warning'
          className='text-dark'
          onClick={onHide}>
          {cancelButtonText}
        </Button>
        <Button
          variant='outline-danger'
          className='text-dark'
          disabled={loading}
          onClick={() => {
            deleteItemHandler(id)
          }}>
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ItemModal
