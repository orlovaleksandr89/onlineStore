import React from 'react'

function OrderListPayments({ userOrders, setSelected, selected }) {
  return (
    <div>
      {userOrders.map((order) => {
        return (
          <li
            key={order._id}
            role='button'
            onClick={() => {
              setSelected(order._id)
            }}
            className={
              selected === order._id
                ? 'list-group-item active'
                : 'list-group-item'
            }>
            {order.paymentId}
          </li>
        )
      })}
    </div>
  )
}

export default OrderListPayments
