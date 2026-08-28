import api from './api.js'

/**
 * Submits a project inquiry. Backend persists it in MongoDB and sends an
 * email notification to the admin (see backend/controllers/contactController.js).
 */
export async function submitInquiry(payload) {
  const { data } = await api.post('/contact', payload)
  return data
}
