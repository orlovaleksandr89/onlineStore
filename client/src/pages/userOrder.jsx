import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useUser } from '../hooks/useUser'
import orderServise from '../services/order.service'
import Loader from '../components/common/Loader'
import { currencyFormat } from '../utils/consts'
import OrderListItems from '../components/account_section/orderListItem'
import OrderListPayments from '../components/account_section/OrderListPayments'
import moment from 'moment'

function UserOrder() {
  const [userOrders, setUserOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState('')
  const { user } = useUser()

  const getOrdersHandler = async () => {
    try {
      setLoading(true)
      const { data } = await orderServise.get(user.id)
      setUserOrders(data.userOrders)
      setSelected(data.userOrders[0]._id)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    getOrdersHandler()

    return () => {
      setLoading(false)
    }
  }, [])

  const getOerderDateHandler = (date) => {
    return moment(date).format('dddd, MMMM Do YYYY, HH:mm')
  }

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
                  <span className='fw-bold'>
                    {getOerderDateHandler(order.paidAt)}
                  </span>
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
