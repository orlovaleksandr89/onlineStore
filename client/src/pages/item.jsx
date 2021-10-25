import React, { useContext, useState } from 'react'
import { Container, Button, Row, Col, Image, Card } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import ModalWindow from '../components/Modal'
import StoreContext from '../store/store'

const ItemPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const storeCtx = useContext(StoreContext)
  const { cart } = storeCtx
  const [inCart, setInCart] = useState(false)
  const [itemAddedToCart, setItemAddedToCart] = useState(false)

  const item = storeCtx.items.find((item) => {
    return item.id === Number(id)
  })

  const addToCartHandle = (item) => {
    if (cart.find((cartItem) => cartItem.id === item.id)) {
      return setInCart(true)
    } else {
      storeCtx.addItemToCart(item.id)
      setItemAddedToCart(true)
    }
  }

  return (
    <Container style={{ minHeight: 'calc(100vh - 65px)' }} className='p-4'>
      <Card className=' shadow d-flex flex-column justify-content-center'>
        <Row style={{ minHeight: '50vh' }} className='p-3'>
          <Col md={1}>
            <Button
              variant={'outline-secondary'}
              className='rounded rounded-circle  '
              onClick={() => {
                history.goBack()
              }}>
              <i className='bi bi-chevron-left'></i>
            </Button>
          </Col>
          <Col
            md={6}
            className='d-flex justify-content-center align-items-center mx-auto'>
            <Image src={item.imgUrl} fluid />
          </Col>
        </Row>

        <Row className='text-center p-2'>
          <Col
            md={6}
            className='d-flex flex-column  justify-content-center  align-items-center '>
            <h2>{item.title}</h2>
          </Col>
          <Col
            md={6}
            className='d-flex flex-column  justify-content-center  align-items-center '>
            <h2>Price : {item.price}$</h2>
          </Col>
        </Row>
        <Row className='text-center p-2'>
          <Col
            md={12}
            className='d-flex flex-column  justify-content-center w-100 align-items-center '>
            <p>{item.description}</p>
          </Col>
        </Row>
        <Row className=' px-5 py-2 w-100 d-flex  justify-content-center'>
          <Button
            variant={'outline-warning'}
            className='text-dark w-25'
            onClick={() => {
              storeCtx.isAuth ? addToCartHandle(item) : history.push('/login')
            }}>
            Add to cart
          </Button>
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
