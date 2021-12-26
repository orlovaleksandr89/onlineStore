import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { TypeModal } from './admin_modals'

function CreateType() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Button variant={'success'} onClick={() => setShowModal(true)}>
        Create Type
      </Button>
      {showModal && (
        <TypeModal
          show={showModal}
          onHide={() => {
            setShowModal(false)
          }}
          title={'Create a new type in store'}
          cancelButtonText={'Cancel'}
          confirmButtonText={'Create!'}
        />
      )}
    </div>
  )
}

export default CreateType
