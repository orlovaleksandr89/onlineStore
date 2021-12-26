import { createContext, useState } from 'react'

const StoreContext = createContext({
  search: '',
  setSearch: (text) => {}
})

export function StoreContextProvider({ children }) {
  const [search, setSearch] = useState('')

  function setSearchHandler(text) {
    setSearch(text)
  }

  const context = {
    search: search,
    setSearch: setSearchHandler
  }

  return (
    <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
  )
}
export default StoreContext
