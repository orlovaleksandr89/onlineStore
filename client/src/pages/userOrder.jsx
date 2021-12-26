import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import dateFormatter from '../utils/dateFormatter'
import Loader from '../components/common/Loader'
import { currencyFormat } from '../utils/consts'
import {
  OrderListItems,
  OrderListPayments
} from '../components/account_section'
import { useCart } from '../hooks/useCart'
import { useUser } from '../hooks/useUser'

function UserOrder() {
  const [selected, setSelected] = useState('')
  const { getUserOrder, userOrders, loading } = useCart()
  const { user } = useUser()

  useEffect(() => {
    getUserOrder()
  }, [])

  useEffect(() => {
    setSelected(userOrders[0]._id)
    return () => {
      setSelected(null)
    }
  }, [userOrders])

  if (loading) {
    return <Loader />
  }
  const filteredOrderArray = userOrders.filter(
    (order) => order._id === selected
  )

  return (
    <Container className=' justify-content-center align-items-center p-4  text-center '>
      {user?.name && <h3 className='p-3'>Welcome {user.name}</h3>}
      <Row className=''>
        <Col md={5}>
          <h4>Past orders</h4>
          <ul className='list-group'>
            {userOrders.length > 0 && (
              <OrderListPayments
                userOrders={userOrders}
                selected={selected}
                setSelected={setSelected}
              />
            )}
          </ul>
        </Col>
        <Col md={7}>
          <h4>Order details</h4>
          {filteredOrderArray.map((order) => {
            return (
              <div key={order._id}>
                <OrderListItems orderItems={order.orderItems} />
                <p>
                  Total Price{' '}
                  <span className='fw-bold'>
                    {order.totalPrice} {currencyFormat}
                  </span>
                </p>
                <p>
                  Paid on{' '}
                  <span className='fw-bold'>{dateFormatter(order.paidAt)}</span>
                </p>
              </div>
            )
          })}
        </Col>
      </Row>
      {userOrders.length === 0 && <h4>Nothing to display</h4>}
    </Container>
  )
}

export default UserOrder
