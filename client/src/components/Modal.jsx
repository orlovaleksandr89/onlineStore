import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModalWindow({
  show,
  onHide,
  title,
  body,
  cancelButtonText,
  confirmButtonText,
  redirect = null
}) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{body}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='outline-warning'
          className='text-dark'
          onClick={onHide}
        >
          {cancelButtonText}
        </Button>
        <Button
          variant='outline-primary'
          className='text-dark'
          onClick={() => {
            onHide()
            redirect()
          }}
        >
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalWindow
