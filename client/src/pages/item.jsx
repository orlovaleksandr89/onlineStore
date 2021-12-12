import React, { useEffect, useState } from 'react'
import { Container, Button, Row, Col, Image, Card } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import Loader from '../components/common/Loader'
import ModalWindow from '../components/common/Modal'
import { useItems } from '../hooks/useItems'
import { useUser } from '../hooks/useUser'

import itemsService from '../services/items.service'
import { CART_ROUTE, currencyFormat, LOGIN_ROUTE } from '../utils/consts'

const ItemPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const [inCart, setInCart] = useState(false)
  const [itemAddedToCart, setItemAddedToCart] = useState(false)
  const [loading, setLoading] = useState(false)

  const { isAuth } = useUser()
  const { cartItems, addItemToCart } = useItems()
  const [item, setItem] = useState({})

  useEffect(() => {
    setLoading(true)
    itemsService.getItemById(id).then((item) => {
      setItem(item)
      setLoading(false)
    })

    return () => setLoading(false)
  }, [id])

  const addToCartHandle = (item) => {
    console.log(cartItems)
    if (cartItems.find((cartItem) => cartItem._id === item._id)) {
      return setInCart(true)
    } else {
      addItemToCart(item)
      setItemAddedToCart(true)
    }
  }

  if (loading) {
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
              onClick={() => {
                isAuth ? addToCartHandle(item) : history.push(LOGIN_ROUTE)
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
