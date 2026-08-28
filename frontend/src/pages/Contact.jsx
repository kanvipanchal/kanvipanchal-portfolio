import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, Mail, Clock } from 'lucide-react'
import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Input from '@components/ui/Input.jsx'
import Button from '@components/ui/Button.jsx'
import Card from '@components/ui/Card.jsx'
import { personalInfo } from '@data/personalInfo.js'
import { nameRule, emailRule, messageRule, phoneRule } from '@utils/validators.js'
import { submitInquiry } from '@services/contactService.js'

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const onSubmit = async (formData) => {
    setStatus(null)
    try {
      await submitInquiry(formData)
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section className="pt-16">
      <Heading eyebrow="Get In Touch" size="display" as="h1" className="mb-4 max-w-xl">
        Let's talk about your project.
      </Heading>
      <p className="mb-12 max-w-xl text-[var(--text-secondary)]">
        Fill out the form and I'll get back to you — {personalInfo.availability.responseTime.toLowerCase()}.
      </p>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          <Card className="flex items-center gap-3">
            <Mail size={18} className="text-[var(--accent)]" />
            <div>
              <p className="text-xs text-[var(--text-muted)]">Email</p>
              <p className="text-sm text-[var(--text-primary)]">{personalInfo.email}</p>
            </div>
          </Card>
          <Card className="flex items-center gap-3">
            <Clock size={18} className="text-[var(--accent)]" />
            <div>
              <p className="text-xs text-[var(--text-muted)]">Response Time</p>
              <p className="text-sm text-[var(--text-primary)]">{personalInfo.availability.responseTime}</p>
            </div>
          </Card>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Input label="Name" placeholder="Your name" error={errors.name?.message} {...register('name', nameRule)} />
            <Input label="Email" type="email" placeholder="you@company.com" error={errors.email?.message} {...register('email', emailRule)} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Input label="Company" placeholder="Optional" {...register('company')} />
            <Input label="Phone" placeholder="Optional" error={errors.phone?.message} {...register('phone', phoneRule)} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Input label="Budget" placeholder="e.g. $1,000–$5,000" {...register('budget')} />
            <Input label="Timeline" placeholder="e.g. 4–6 weeks" {...register('timeline')} />
          </div>
          <Input label="Project Type" placeholder="e.g. E-commerce website" {...register('projectType')} />
          <Input
            as="textarea"
            label="Message"
            placeholder="Tell me about your project..."
            error={errors.message?.message}
            {...register('message', messageRule)}
          />

          <Button type="submit" icon={Send} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </Button>

          {status === 'success' && (
            <p className="text-sm text-emerald-500">Thanks — your inquiry has been sent. I'll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-500">
              Couldn't send your message right now (backend not connected in this preview). Please email {personalInfo.email} directly.
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}
