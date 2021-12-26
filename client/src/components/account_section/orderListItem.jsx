import React from 'react'

function OrderListItems({ orderItems }) {
  return (
    <div>
      {orderItems.map((item) => {
        return (
          <div
            key={item.productId}
            className='d-flex flex-column justify-content-center align-items-center p-3 m-0 border'>
            <div>
              <span className='fw-bold'>{item.title}</span>
            </div>
            <div>
              Quantity:
              <span className='fw-bold'> {item.quantity}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default OrderListItems
