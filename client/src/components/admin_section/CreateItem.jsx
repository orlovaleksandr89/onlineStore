import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import ItemModal from './admin_modals/ItemModal'

function CreateItem() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Button variant={'success'} onClick={() => setShowModal(true)}>
        Create Item
      </Button>
      {showModal && (
        <ItemModal
          show={showModal}
          onHide={() => {
            setShowModal(false)
          }}
          title={'Create a new item in store'}
          cancelButtonText={'Cancel'}
          confirmButtonText={'Create!'}
        />
      )}
    </div>
  )
}

export default CreateItem
