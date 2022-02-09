const TOKEN_KEY = 'jwt_token'
const USER_KEY = 'jwt_user'
const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}
const setUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}
const getToken = () => localStorage.getItem(TOKEN_KEY)
const getUser = () => localStorage.getItem(USER_KEY)

const removeAuthData = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}

export const localStorageServise = {
  setToken,
  getToken,
  removeAuthData,
  setUser,
  getUser
}
