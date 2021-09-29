import { createContext, useState } from 'react'

const StoreContext = createContext({
  isAuth: undefined,
  items: [],
  addItem: (newItem) => {},
  deleteItem: (itemId) => {},
  setAuth: (bool) => {},
  role: undefined
})

export function StoreContextProvider(props) {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'iphone 13',
      price: 999,
      description: 'New iphone 13',
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000'
    },
    {
      id: 2,
      title: 'iphone 12 mini',
      price: 699,
      description: 'New iphone 12 mini',
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-green-select-2020?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604343706000'
    },
    {
      id: 3,
      title: 'ipad mini',
      price: 399,
      description: 'ipad mini',
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-202109_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1631751019000'
    }
  ])
  const [isAuth, setIsAuth] = useState(false)

  function addItemHandler(newItem) {
    setItems((prevItems) => {
      return [...prevItems, newItem]
    })
  }

  function deleteItemHandler(itemId) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== itemId)
    })
  }

  function setAuthHandler(bool) {
    return setIsAuth(bool)
  }

  const context = {
    isAuth: isAuth,
    items: items,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
    setAuth: setAuthHandler,
    role: 'USER'
  }

  return (
    <StoreContext.Provider value={context}>
      {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContext
