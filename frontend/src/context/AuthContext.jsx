import { createContext, useState, useCallback } from 'react'
import api from '@services/api.js'

export const AuthContext = createContext(null)

const TOKEN_KEY = 'portfolio-admin-token'

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY))

  const login = useCallback(async (credentials) => {
    const { data } = await api.post('/auth/login', credentials)
    localStorage.setItem(TOKEN_KEY, data.token)
    setToken(data.token)
    return data
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY)
    setToken(null)
  }, [])

  return (
    <AuthContext.Provider value={{ token, isAuthenticated: Boolean(token), login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
