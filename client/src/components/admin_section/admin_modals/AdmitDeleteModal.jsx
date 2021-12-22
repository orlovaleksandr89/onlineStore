import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useItems } from '../../../hooks/useItems'
function ItemModal({
  show,
  onHide,
  title,
  body,
  cancelButtonText,
  confirmButtonText,
  id
}) {
  const { loading, deleteItemFromDB } = useItems()

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
          disabled={loading}
          onClick={() => {
            deleteItemFromDB(id)
            onHide()
          }}>
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ItemModal
