import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHttp } from '../../hooks/httpHook'
import TypeModal from './admin_modals/TypeModal'

function CreateType() {
  const { request } = useHttp()
  const [showModal, setShowModal] = useState(false)
  const createTypeInDB = async (text) => {
    try {
      const token = localStorage.getItem('token')
      const data = await request(
        '/auth/createtype',
        'POST',
        {
          type: text.trim()
        },
        {
          Authorization: `Bearer ${token}`
        }
      )
      alert(data.message)
    } catch (error) {
      alert(error)
    }
  }

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
          createTypeInDB={createTypeInDB}
        />
      )}
    </div>
  )
}

export default CreateType
