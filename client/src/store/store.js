import { createContext, useState } from 'react'

const StoreContext = createContext({
  isAuth: undefined,
  setAuth: (bool) => {},

  items: [],
  setItems: () => {},

  user: { email: '', password: '', role: undefined, id: undefined },
  setUser: (user) => {},

  types: [],
  setTypes: (arr) => {},

  cart: [],
  addItemToCart: (item) => {},
  deleteFromCart: (item) => {},
  clearCart: () => {},
  incrementQty: (id) => {},
  decrementQty: (id) => {},

  error: '',
  setError: (text) => {},

  search: '',
  setSearch: (text) => {}
})

export function StoreContextProvider(props) {
  const [user, setUser] = useState({})
  const [types, setTypes] = useState([])
  const [cartItems, setCartItem] = useState([])
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')

  const [items, setItems] = useState([])
  const [isAuth, setIsAuth] = useState(false)

  function setItemsHandler(arr) {
    setItems(arr)
  }
  function setErrorHandler(text) {
    setError(text)
  }

  function deleteItemHandler(itemId) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== itemId)
    })
  }

  function setSearchHandler(text) {
    setSearch(text)
  }

  function setAuthHandler(bool) {
    return setIsAuth(bool)
  }
  function setUserHandler(user) {
    setUser(user)
  }

  function setTypesHandler(arr) {
    setTypes(arr.map((item) => ({ id: item._id, type: item.value })))
  }
  function addItemToCartHandler(id) {
    if (cartItems.find((item) => item._id === id)) {
      return cartItems
    } else {
      const newCart = items.map((item) => {
        if (item._id === id) {
          return { ...item, qty: 1 }
        }
        return item
      })
      const item = newCart.find((item) => item._id === id)
      setCartItem((prev) => [...prev, item])
    }
  }
  function deleteFromCartHandler(id) {
    setCartItem([...cartItems.filter((item) => item._id !== id)])
  }
  function incrementQtyHandler(id) {
    const newCart = [...cartItems]
    const item = newCart.find((item) => item._id === id)

    item.qty += 1

    setCartItem(newCart)
  }

  function decrementQtyHandler(id) {
    const newCart = [...cartItems]
    const item = newCart.find((item) => item._id === id)

    if (item.qty > 0) {
      item.qty -= 1
    }

    setCartItem(newCart)
  }

  function clearCartHandle() {
    setCartItem([])
  }

  const context = {
    isAuth: isAuth,

    items: items,
    setItems: setItemsHandler,
    deleteItem: deleteItemHandler,
    setAuth: setAuthHandler,

    user: user,
    setUser: setUserHandler,

    types: types,
    setTypes: setTypesHandler,
    addItemToCart: addItemToCartHandler,
    deleteFromCart: deleteFromCartHandler,

    cart: cartItems,
    incrementQty: incrementQtyHandler,
    decrementQty: decrementQtyHandler,
    clearCart: clearCartHandle,

    error: error,
    setError: setErrorHandler,

    search: search,
    setSearch: setSearchHandler
  }

  return (
    <StoreContext.Provider value={context}>
      {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContext
