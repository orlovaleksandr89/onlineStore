import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useItems } from '../../hooks/useItems'

import ItemModal from './admin_modals/ItemModal'

function CreateItem() {
  const [showModal, setShowModal] = useState(false)
  const { createItemInDB, loading } = useItems()

  const createItemInDBHandler = async (item) => {
    try {
      const response = await createItemInDB(item)
      return response
    } catch (error) {
      console.log(error)
    }
  }

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
          loading={loading}
          sumbitHandler={createItemInDBHandler}
          title={'Create a new item in store'}
          cancelButtonText={'Cancel'}
          confirmButtonText={'Create!'}
        />
      )}
    </div>
  )
}

export default CreateItem
