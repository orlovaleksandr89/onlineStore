import { useState, useCallback } from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [responce, setResponce] = useState(null)

  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setLoading(true)
      try {
        if (body) {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
        }
        const response = await fetch(url, {
          method,
          body,
          headers
        })
        setResponce(response)
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'чтото пошло не так')
        }

        setLoading(false)
        return data
      } catch (error) {
        setLoading(false)
        setError(error.message)
        throw error
      }
    },
    []
  )
  const clearError = () => {
    setError(null)
  }
  return { loading, request, error, clearError, responce }
}
