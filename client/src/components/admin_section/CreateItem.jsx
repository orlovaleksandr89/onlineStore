import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHttp } from '../../hooks/httpHook'
import ItemModal from './admin_modals/ItemModal'

function CreateItem() {
  const { request } = useHttp()
  const [showModal, setShowModal] = useState(false)
  const createTypeInDB = async (item) => {
    try {
      const token = localStorage.getItem('token')
      const data = await request(
        '/auth/createitem',
        'POST',
        { ...item },
        {
          Authorization: `Bearer ${token}`
        }
      )
      alert(data.message)

      console.log(data)
    } catch (error) {
      alert(error)
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
          title={'Create a new item in store'}
          cancelButtonText={'Cancel'}
          confirmButtonText={'Create!'}
          createTypeInDB={createTypeInDB}
        />
      )}
    </div>
  )
}

export default CreateItem
