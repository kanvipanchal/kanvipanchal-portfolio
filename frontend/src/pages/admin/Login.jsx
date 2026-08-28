import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Input from '@components/ui/Input.jsx'
import Button from '@components/ui/Button.jsx'
import Card from '@components/ui/Card.jsx'
import { emailRule } from '@utils/validators.js'
import { useAuth } from '@hooks/useAuth.js'

export default function AdminLogin() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const onSubmit = async (data) => {
    setError('')
    try {
      await login(data)
      navigate('/admin')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-canvas)] px-4">
      <Card className="w-full max-w-sm">
        <h1 className="font-display text-xl font-semibold text-[var(--text-primary)]">Admin Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <Input label="Email" type="email" error={errors.email?.message} {...register('email', emailRule)} />
          <Input label="Password" type="password" error={errors.password?.message} {...register('password', { required: 'Password is required' })} />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </Card>
    </div>
  )
}
