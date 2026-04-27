import { useState, useCallback } from 'react'

export const useApi = (apiFunc) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const request = useCallback(
    async (...args) => {
      setLoading(true)
      setError(null)
      try {
        const result = await apiFunc(...args)

        if (result.error) {
          setError(result.error.message)
          return { success: false, error: result.error.message }
        }

        setData(result.data)
        return { success: true, data: result.data }
      } catch (err) {
        const msg = err.message || 'Something went wrong'
        setError(msg)
        return { success: false, error: msg }
      } finally {
        setLoading(false)
      }
    },
    [apiFunc],
  )

  return { data, error, loading, request }
}
