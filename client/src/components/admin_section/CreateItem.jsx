import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createItemInDB, getAdminLoadingStatus } from '../../store/items'
import { ItemModal } from './admin_modals'

function CreateItem() {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const adminLoadingStatus = useSelector(getAdminLoadingStatus())

  const createItemInDBHandler = (item) => {
    dispatch(createItemInDB(item))
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
          loading={adminLoadingStatus}
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
