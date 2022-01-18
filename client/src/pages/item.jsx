import React, { useState } from 'react'
import { Container, Button, Row, Col, Image, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import history from '../utils/history'
import { getItemById, getItemsLoadingStatus } from '../store/items'
import ModalWindow from '../components/common/Modal'

import { CART_ROUTE, currencyFormat, LOGIN_ROUTE } from '../utils/consts'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/common/Loader'
import {
  addItemToCart,
  getCartItems,
  getCartLoadingStatus
} from '../store/cart'
import { getUser, getUserIsLoggedIn } from '../store/user'

const ItemPage = () => {
  const dispatch = useDispatch()
  const cartLoadingStatus = useSelector(getCartLoadingStatus())
  const cartItems = useSelector(getCartItems())
  const user = useSelector(getUser())
  const isLoggedIn = useSelector(getUserIsLoggedIn())
  const { id } = useParams()

  const [inCart, setInCart] = useState(false)
  const [itemAddedToCart, setItemAddedToCart] = useState(false)

  const item = useSelector(getItemById(id))
  const itemLoadingStatus = useSelector(getItemsLoadingStatus())

  const addToCartHandle = (item) => {
    if (cartItems.find((i) => i._id === item._id)) {
      return setInCart(true)
    }
    dispatch(addItemToCart(user.id, item))
    setItemAddedToCart(true)
  }

  if (itemLoadingStatus) {
    return <Loader />
  }

  return (
    <Container className='p-4'>
      <Card className=' shadow d-flex flex-column justify-content-center align-items-center'>
        <Row style={{ minHeight: '50vh' }} className='p-3 w-100'>
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
            md={5}
            className='d-flex justify-content-center align-items-center mx-auto'>
            <Image src={item.imgURL} fluid />
          </Col>
        </Row>

        <Row className='text-center w-100'>
          <Col
            md={6}
            className='d-flex flex-column  justify-content-center my-1 align-items-center '>
            <h2>{item.title}</h2>
          </Col>
          <Col
            md={6}
            className='d-flex flex-column  justify-content-center my-1 align-items-center '>
            <h2>
              Price : {item.price}
              {currencyFormat}
            </h2>
          </Col>
        </Row>
        <Row style={{ textAlign: 'justify' }}>
          <Col
            md={12}
            className='d-flex flex-column p-3 justify-content-center w-100 align-items-center '>
            <p className='p-3'>{item.description}</p>
          </Col>
        </Row>
        <Row className=' px-5 py-2 w-100 d-flex  justify-content-center align-items-center'>
          <Col
            md={4}
            className='d-flex  justify-content-center align-items-center'>
            <Button
              variant={'outline-warning'}
              className='text-dark w-100 mb-3'
              disabled={cartLoadingStatus}
              onClick={() => {
                isLoggedIn ? addToCartHandle(item) : history.push(LOGIN_ROUTE)
              }}>
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
            history.push(CART_ROUTE)
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
            history.push(CART_ROUTE)
          }}
        />
      )}
    </Container>
  )
}

export default ItemPage
