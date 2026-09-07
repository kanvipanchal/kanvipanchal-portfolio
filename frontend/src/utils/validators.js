/**
 * Reusable React Hook Form validation rule sets. Import into any form
 * (contact, inquiry, admin login) to keep validation consistent.
 */
export const nameRule = {
  required: 'Name is required',
  minLength: { value: 2, message: 'Name must be at least 2 characters' },
  maxLength: { value: 150, message: 'Name must be 150 characters or fewer' },
}

export const emailRule = {
  required: 'Email is required',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Enter a valid email address',
  },
  maxLength: { value: 254, message: 'Email must be 254 characters or fewer' },
}

export const messageRule = {
  required: 'Message is required',
  minLength: { value: 20, message: 'Please provide a bit more detail (min 20 characters)' },
  maxLength: { value: 5000, message: 'Message must be 5,000 characters or fewer' },
}

export const phoneRule = {
  maxLength: { value: 40, message: 'Phone must be 40 characters or fewer' },
  pattern: {
    value: /^[0-9+\-\s()]{7,40}$/,
    message: 'Enter a valid phone number',
  },
}
