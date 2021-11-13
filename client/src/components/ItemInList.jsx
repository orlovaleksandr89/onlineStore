import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { currencyFormat } from '../utils/consts'

function ItemInList({ title, price, imgURL, _id }) {
  const history = useHistory()
  return (
    <Card
      className='d-flex justify-content-between h-100 align-items-center shadow border border-2'
      style={{ minHeight: '250px', borderRadius: 15 }}>
      <Col md={12} className='d-flex p-1 my-2'>
        <Image
          src={imgURL}
          fluid
          role='button'
          className='p-1 '
          onClick={() => {
            history.push(`/item/${_id}`)
          }}
        />
      </Col>

      <Col
        md={8}
        className='d-flex flex-column justify-content-between align-items-center text-center'>
        <h5>{title}</h5>
        <p> {`Price  ${price}${currencyFormat}`}</p>
      </Col>
    </Card>
  )
}

export default ItemInList
