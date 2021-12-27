import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { AdminItemsList, CreateBar } from '../components/admin_section'

const Admin = () => {
  return (
    <Row className='p-2 m-0'>
      <Col md={12} className=' p-0 m-0'>
        <CreateBar />
      </Col>
      <Col md={12}>
        <AdminItemsList />
      </Col>
    </Row>
  )
}

export default Admin
