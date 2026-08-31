import axios from 'axios'

/**
 * Central Axios instance. All service modules (contactService, blogService,
 * projectService, etc.) import this instead of calling axios directly, so
 * base URL, headers, and interceptors only need to be configured once.
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'Something went wrong. Please try again.'
    return Promise.reject(new Error(message))
  },
)

export default api
