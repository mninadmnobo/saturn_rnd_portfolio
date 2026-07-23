import type { ChangeEvent } from 'react'
import { cn } from '@/lib/utils'

type SharedProps = {
  label: string
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
  className?: string
}

export type FormFieldProps =
  | (SharedProps & { as?: 'input'; type?: 'text' | 'email' | 'tel' })
  | (SharedProps & { as: 'textarea'; rows?: number })

/**
 * A labeled text input or textarea styled to match the site's form inputs
 * (used by the Contact page). Reach for this instead of hand-rolling a new
 * `<label>` + `<input>` pair so every form on the site looks and behaves
 * the same.
 *
 * @example
 * <FormField label="Full Name" name="name" value={form.name} onChange={handleChange} required />
 * <FormField as="textarea" label="Message" name="message" value={form.message} onChange={handleChange} rows={5} required />
 */
export function FormField(props: FormFieldProps) {
  const { label, name, value, onChange, placeholder, required, className } = props
  const inputClasses = cn(
    'w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-secondary focus:outline-none transition-colors',
    className
  )

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      {props.as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={props.rows ?? 5}
          className={cn(inputClasses, 'resize-none')}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={props.type ?? 'text'}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}
