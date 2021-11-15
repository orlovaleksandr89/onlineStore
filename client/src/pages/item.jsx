import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Container, Button, Row, Col, Image, Card } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import Loader from '../components/common/Loader'
import ModalWindow from '../components/Modal'
import { useHttp } from '../hooks/httpHook'
import StoreContext from '../store/store'
import { currencyFormat } from '../utils/consts'

const ItemPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const storeCtx = useContext(StoreContext)
  const { cart } = storeCtx
  const [inCart, setInCart] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [item, setItem] = useState({})
  const [itemAddedToCart, setItemAddedToCart] = useState(false)

  const { request } = useHttp()

  const getItemFromDB = useCallback(
    async (id) => {
      try {
        setIsLoading(true)
        const item = await request(`/singleitem/${id}`, 'GET')
        setItem(item)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    },
    [request]
  )
  useEffect(() => {
    getItemFromDB(id)
  }, [getItemFromDB, id])

  const addToCartHandle = (item) => {
    if (cart.find((cartItem) => cartItem._id === item._id)) {
      return setInCart(true)
    } else {
      storeCtx.addItemToCart(item._id)
      setItemAddedToCart(true)
    }
  }

  if (isLoading) {
    return <Loader />
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
            md={5}
            className='d-flex justify-content-center align-items-center mx-auto'>
            <Image src={item.imgURL} fluid />
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
            <h2>
              Price : {item.price}
              {currencyFormat}
            </h2>
          </Col>
        </Row>
        <Row className='text-center p-2'>
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
                storeCtx.isAuth ? addToCartHandle(item) : history.push('/login')
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
