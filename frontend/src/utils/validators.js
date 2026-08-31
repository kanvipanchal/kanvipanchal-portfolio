/**
 * Reusable React Hook Form validation rule sets. Import into any form
 * (contact, inquiry, admin login) to keep validation consistent.
 */
export const nameRule = {
  required: 'Name is required',
  minLength: { value: 2, message: 'Name must be at least 2 characters' },
}

export const emailRule = {
  required: 'Email is required',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Enter a valid email address',
  },
}

export const messageRule = {
  required: 'Message is required',
  minLength: { value: 20, message: 'Please provide a bit more detail (min 20 characters)' },
}

export const phoneRule = {
  pattern: {
    value: /^[0-9+\-\s()]{7,15}$/,
    message: 'Enter a valid phone number',
  },
}
