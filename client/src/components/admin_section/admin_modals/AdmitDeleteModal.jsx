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

  const deleteItemHandler = async (id) => {
    const response = await deleteItemFromDB(id)
    if (response.status === 200) {
      setTimeout(() => onHide(), 1000)
    }
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
