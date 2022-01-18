const TOKEN_KEY = 'jwt_token'

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const removeAuthData = () => localStorage.removeItem(TOKEN_KEY)

export const localStorageServise = { setToken, getToken, removeAuthData }
