import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { currencyFormat } from '../../utils/consts'

function ItemInList({ title, price, imgURL, _id }) {
  const history = useHistory()
  return (
    <Card
      className='d-flex h-100 w-100  justify-content-center align-items-center shadow border border-2 item_in_list'
      style={{ minHeight: '250px', borderRadius: 15 }}
      role='button'
      onClick={() => {
        history.push(`/item/${_id}`)
      }}>
      <Row className='p-3 justify-content-center align-items-center w-100 h-100'>
        <Col md={8} sm={8} xs={12} className='d-flex p-1 my-2'>
          <Image src={imgURL} fluid className='p-1 ' />
        </Col>

        <Col
          md={12}
          sm={12}
          xs={12}
          className='d-flex flex-column justify-content-between align-items-center text-center'>
          <p className='fw-bold m-0 p-0'>{title}</p>
          <p>
            {' '}
            Price{' '}
            <span className='fw-bold'>
              {price}
              {currencyFormat}
            </span>
          </p>
        </Col>
      </Row>
    </Card>
  )
}

export default ItemInList
