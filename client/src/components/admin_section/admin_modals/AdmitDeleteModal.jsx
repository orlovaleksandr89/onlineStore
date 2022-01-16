import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemInDb, getAdminLoadingStatus } from '../../../store/items'

function ItemModal({
  show,
  onHide,
  title,
  body,
  cancelButtonText,
  confirmButtonText,
  id
}) {
  const dispatch = useDispatch()
  const adminLoadingStatus = useSelector(getAdminLoadingStatus())

  const deleteHandler = () => {
    dispatch(deleteItemInDb(id))
    onHide()
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
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
          disabled={adminLoadingStatus}
          onClick={deleteHandler}>
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ItemModal
