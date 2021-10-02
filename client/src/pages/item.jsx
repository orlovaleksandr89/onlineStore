import React, { useContext, useState } from 'react'
import { Container, Button, Row, Col, Image, Card } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import ModalWindow from '../components/Modal'
import StoreContext from '../store/store'

const ItemPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const storeCtx = useContext(StoreContext)
  const [inCart, setInCart] = useState(false)
  const [itemAddedToCart, setItemAddedToCart] = useState(false)

  const item = storeCtx.items.find((item) => {
    return item.id === Number(id)
  })

  const addToCartHandle = (item) => {
    if (storeCtx.cart.includes(item)) {
      return setInCart(true)
    } else {
      storeCtx.addItemToCart(item)
      setItemAddedToCart(true)
    }
  }

  return (
    <Container>
      <Card className='mt-4 p-2'>
        <Row>
          <Col md={1}>
            <Button
              variant={'outline-warning'}
              onClick={() => {
                history.goBack()
              }}
            >
              <i className='bi bi-arrow-left'></i>
            </Button>
          </Col>
          <Col
            md={4}
            className='d-flex   justify-content-center align-items-center'
          >
            <Image src={item.imgUrl} fluid />
          </Col>
          <Col
            md={5}
            className='d-flex flex-column my-2 justify-content-center align-items-center'
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <h3>{item.price}$</h3>
          </Col>
          <Col
            md={2}
            className='d-flex flex-column mt-4 justify-content-center align-items-center'
          >
            <Button
              variant={'outline-warning'}
              className='text-dark'
              onClick={() => {
                storeCtx.isAuth ? addToCartHandle(item) : history.push('/login')
              }}
            >
              Add to cart
            </Button>
          </Col>
        </Row>
      </Card>

      {inCart && (
        <ModalWindow
          show={inCart}
          onHide={() => {
            setInCart(false)
          }}
          title={'Ooops...'}
          body={'This item already in cart. Do you wish to continue shopping?'}
          cancelButtonText={'Keep shopping'}
          confirmButtonText={'Go to cart!'}
          redirect={() => {
            history.push('/cart')
          }}
        />
      )}
      {itemAddedToCart && (
        <ModalWindow
          show={itemAddedToCart}
          onHide={() => {
            setItemAddedToCart(false)
          }}
          title={'Success!'}
          body={'You added item to cart. Do you wish to continue shopping?'}
          cancelButtonText={'Keep shopping'}
          confirmButtonText={'Go to cart!'}
          redirect={() => {
            history.push('/cart')
          }}
        />
      )}
    </Container>
  )
}

export default ItemPage
