import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowUpRight, Mail, Phone, Send } from 'lucide-react'
import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Input from '@components/ui/Input.jsx'
import Button from '@components/ui/Button.jsx'
import Card from '@components/ui/Card.jsx'
import { LinkedinIcon } from '@components/ui/icons/BrandIcons.jsx'
import { personalInfo } from '@data/personalInfo.js'
import { nameRule, emailRule, messageRule, phoneRule } from '@utils/validators.js'
import { submitGoogleInquiry } from '@services/googleContactService.js'

const googleScriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL?.trim()
const isConfigured = googleScriptUrl
  && !googleScriptUrl.includes('PASTE_YOUR_ACTUAL_EXEC_URL_HERE')
  && /^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(googleScriptUrl)

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [status, setStatus] = useState(null)
  const [waitingForConfirmation, setWaitingForConfirmation] = useState(false)

  const onSubmit = async (formData) => {
    if (isSubmitting) return
    setStatus(null)

    if (!isConfigured) {
      setStatus({
        type: 'error',
        message: 'The contact form is not configured yet. Please try again later or email me directly.',
      })
      return
    }

    const fields = {
      name: formData.name,
      email: formData.email,
      company: formData.company || '',
      phone: formData.phone || '',
      budget: formData.budget || '',
      timeline: formData.timeline || '',
      projectType: formData.projectType || '',
      message: formData.message,
      website: formData.website || '',
    }
    setWaitingForConfirmation(false)
    const waitingId = window.setTimeout(() => setWaitingForConfirmation(true), 4_000)

    try {
      const result = await submitGoogleInquiry(googleScriptUrl, fields)

      if (result.ok) {
        reset()
        setStatus({ type: 'success', message: result.message || 'Thanks - your inquiry has been sent.' })
        return
      }

      setStatus({
        type: 'error',
        message: result?.message || 'Your inquiry could not be sent. Please review the form and try again.',
      })
    } catch {
      setStatus({
        type: 'warning',
        message: 'Confirmation is taking longer than expected. Your inquiry may already be saved. Please avoid sending it again; your details are kept here if you need them.',
      })
    } finally {
      window.clearTimeout(waitingId)
      setWaitingForConfirmation(false)
    }
  }

  return (
    <Section className="pt-16">
      <Heading eyebrow="Get In Touch" size="display" as="h1" className="max-w-2xl">
        Let's build something useful together.
      </Heading>
      <p className="mt-5 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
        Have a project in mind, need help improving an existing product, or just want to connect? Tell me a little about it and I'll get back to you {personalInfo.availability.responseTime.toLowerCase()}.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <aside className="order-2 space-y-5 lg:order-1">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">Contact details</p>
            <h2 className="mt-3 font-display text-2xl font-semibold">A simple way to start.</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
              Prefer email? Reach out directly, or use the form and include as much context as you can.
            </p>
          </div>

          <Card className="!h-auto space-y-1.5 p-5 shadow-[var(--shadow-soft)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
              <Mail size={18} aria-hidden="true" />
            </div>
            <p className="pt-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">Email</p>
            <a href={`mailto:${personalInfo.email}`} className="break-all text-base font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]">
              {personalInfo.email}
            </a>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Card className="!h-auto p-5">
              <Phone size={18} className="text-[var(--accent)]" aria-hidden="true" />
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">Phone</p>
              <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="mt-1 text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]">{personalInfo.phone}</a>
            </Card>
            <Card className="!h-auto p-5">
              <LinkedinIcon size={18} className="text-[var(--accent)]" />
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">LinkedIn</p>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]">
                Connect with me <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </Card>
          </div>

          <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--accent-soft)] p-5">
            <p className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              Currently available for new projects
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
              Freelance, contract, and full-time opportunities are welcome.
            </p>
          </div>
        </aside>

        <Card as="form" onSubmit={handleSubmit(onSubmit)} className="order-1 p-5 sm:p-8 lg:order-2" noValidate>
          <div className="flex flex-col gap-3 border-b border-[var(--border-subtle)] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">Project inquiry</p>
              <h2 className="mt-2 font-display text-2xl font-semibold">Tell me about your idea.</h2>
            </div>
            <ArrowUpRight size={22} className="hidden text-[var(--accent)] sm:block" aria-hidden="true" />
          </div>

          <div className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Name" placeholder="Your name" maxLength={150} error={errors.name?.message} {...register('name', nameRule)} />
              <Input label="Email" type="email" placeholder="you@company.com" maxLength={254} error={errors.email?.message} {...register('email', emailRule)} />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Company" placeholder="Optional" maxLength={200} {...register('company')} />
              <Input label="Phone" placeholder="Optional" maxLength={40} error={errors.phone?.message} {...register('phone', phoneRule)} />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Budget" placeholder="e.g. $1,000-$5,000" maxLength={100} {...register('budget')} />
              <Input label="Timeline" placeholder="e.g. 4-6 weeks" maxLength={100} {...register('timeline')} />
            </div>
            <Input label="Project Type" placeholder="e.g. E-commerce website" maxLength={250} {...register('projectType', { maxLength: { value: 250, message: 'Project type must be 250 characters or fewer' } })} error={errors.projectType?.message} />
            <Input
              as="textarea"
              label="Message"
              placeholder="What are you looking to build or improve?"
              maxLength={5000}
              error={errors.message?.message}
              {...register('message', messageRule)}
            />
            <div aria-hidden="true" className="absolute h-px w-px overflow-hidden [clip:rect(0,0,0,0)] [-webkit-clip-path:inset(50%)]">
              <label htmlFor="website">Website</label>
              <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
            </div>

            <Button type="submit" size="lg" icon={Send} disabled={isSubmitting} aria-busy={isSubmitting}>
              {isSubmitting ? (waitingForConfirmation ? 'Waiting for confirmation...' : 'Sending...') : 'Send Inquiry'}
            </Button>

            {status?.type === 'success' && (
              <p role="status" aria-live="polite" className="rounded-[var(--radius-sm)] bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{status.message}</p>
            )}
            {status?.type === 'error' && (
              <p role="alert" aria-live="assertive" className="rounded-[var(--radius-sm)] bg-red-50 px-4 py-3 text-sm text-red-700">{status.message}</p>
            )}
            {status?.type === 'warning' && (
              <p role="status" aria-live="polite" className="rounded-[var(--radius-sm)] bg-amber-50 px-4 py-3 text-sm text-amber-900">{status.message}</p>
            )}
          </div>
        </Card>
      </div>
    </Section>
  )
}
