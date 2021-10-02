import { createContext, useState } from 'react'

const StoreContext = createContext({
  isAuth: undefined,
  items: [],
  addItem: (newItem) => {},
  deleteItem: (itemId) => {},
  setAuth: (bool) => {},
  user: { email: '', password: '', role: undefined, id: undefined },
  setUser: (user) => {},
  setRole: (role) => {},
  types: [],
  setTypes: (type) => {},
  cart: [],
  addItemToCart: (item) => {},
  deleteFromCart: (item) => {}
})

export function StoreContextProvider(props) {
  const [user, setUser] = useState({
    email: 'admin@mail.com',
    password: 'admin',
    role: 'USER',
    id: '1234123'
  })
  const [types, setTypes] = useState([
    'Ipad',
    'Iphone',
    'AppleWatch',
    'MacBook'
  ])
  const [cartItems, setCartItem] = useState([])

  const [items, setItems] = useState([
    {
      id: 1,
      title: 'iphone 13',
      price: 999,
      description:
        'New iphone 13 mini. Ceramic Shield front. Glass back and aluminum design. Weight: 4.97 ounces (141 grams).The iPhone 13 mini display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.42 inches diagonally (actual viewable area is less). HDR display. Wide color (P3). Haptic Touch. 2,000,000:1 contrast ratio (typical). 2,000,000:1 contrast ratio (typical). Fingerprint-resistant oleophobic coating. Support for display of multiple languages and characters simultaneously. Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529 ',
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000',
      type: 'iphone'
    },
    {
      id: 2,
      title: 'iphone SE',
      price: 699,
      description:
        'New iphone SE. Ceramic Shield front. Glass back and aluminum design. Weight: 5.22 ounces (148 grams).The iPhone SE display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 4.7 inches diagonally (actual viewable area is less). HDR display. Wide color (P3). Haptic Touch. 2,000,000:1 contrast ratio (typical). 2,000,000:1 contrast ratio (typical). Fingerprint-resistant oleophobic coating. Support for display of multiple languages and characters simultaneously. Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529',
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-green-select-2020?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604343706000',
      type: 'iphone'
    },
    {
      id: 3,
      title: 'ipad mini',
      price: 399,
      description:
        'Ipad mini. Ceramic Shield front. Glass back and aluminum design. Weight: 0.65 pound (293 grams).The iPhone SE display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 8.3-inch (diagonal) LED-backlit Multi-Touch display with IPS technology. HDR display. Wide color (P3). Haptic Touch. 2,000,000:1 contrast ratio (typical). 2,000,000:1 contrast ratio (typical). Fingerprint-resistant oleophobic coating. Support for display of multiple languages and characters simultaneously. Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529',
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-202109_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1631751019000',
      type: 'ipad'
    },
    {
      id: 4,
      title: 'Apple Watch',
      price: 199,
      description:
        'Capable. Colorful. In captivating combinations. Track all your daily activity. Measure your favorite workouts. And take your training even further with Apple Fitness+. With GPS + Cellular models, you can call and stream without an iPhone.footnote² And you can use Family Setup to pair watches for family members who don’t have an iPhone. Heart health notifications, Emergency SOS,footnote⁴ and fall detection provide peace of mind and body.',
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKUY3_VW_34FR+watch-44-alum-silver-nc-se_VW_34FR_WF_CO?wid=375&hei=356&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1630526292000%2C1630708651000',
      type: 'applewatch'
    },
    {
      id: 5,
      title: 'MacBook Pro',
      price: 1199,
      description:
        'The Apple M1 chip gives the 13‑inch MacBook Pro speed and power beyond belief. With up to 2.8x CPU performance. Up to 5x the graphics speed. Our most advanced Neural Engine for up to 11x faster machine learning. And up to 20 hours of battery life — the longest of any Mac ever. It’s our most popular pro notebook, taken to a whole new level.',
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-202005?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1587460552755',
      type: 'macbook'
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
  function setUserHandler(user) {
    const { email, password, role, id } = user
    setUser((prevUser) => {
      return { ...prevUser, email, password, role, id }
    })
  }
  function setRoleHandler(role) {
    setUser((user) => {
      return { ...user, role: role }
    })
  }
  function setTypesHandler(type) {
    setTypes((prevTypes) => {
      return [...prevTypes, type]
    })
  }
  function addItemToCartHandler(item) {
    if (cartItems.includes(item)) {
      return cartItems
    } else {
      setCartItem((prevItems) => {
        return [...prevItems, item]
      })
    }
  }
  function deleteFromCartHandler(id) {
    setCartItem([...cartItems.filter((item) => item.id !== id)])
  }

  const context = {
    isAuth: isAuth,
    items: items,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
    setAuth: setAuthHandler,
    user: user,
    setUser: setUserHandler,
    setRole: setRoleHandler,
    types: types,
    setTypes: setTypesHandler,
    addItemToCart: addItemToCartHandler,
    deleteFromCart: deleteFromCartHandler,
    cart: cartItems
  }

  return (
    <StoreContext.Provider value={context}>
      {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContext
