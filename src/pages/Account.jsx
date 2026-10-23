import { useState } from 'react'
import PageHeader from '../components/PageHeader'

// Authentication isn't connected in this build; the form validates input and says so plainly.
export default function Account() {
  const [mode, setMode] = useState('signin')
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const next = {}
    if (mode === 'register' && !String(data.get('name') ?? '').trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(data.get('email') ?? '').trim())) next.email = 'Please enter a valid email address.'
    if (String(data.get('password') ?? '').length < 8) next.password = 'Password must be at least 8 characters.'
    setErrors(next)
    setNotice(
      Object.keys(next).length
        ? ''
        : 'Customer accounts aren’t connected in this demo yet, so you haven’t been signed in and nothing was saved.',
    )
  }

  const field = (name, label, type, autoComplete) => (
    <div className="field">
      <label htmlFor={`acc-${name}`}>{label}</label>
      <input
        id={`acc-${name}`}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(errors[name])}
        aria-describedby={errors[name] ? `acc-${name}-error` : undefined}
      />
      {errors[name] && (
        <p id={`acc-${name}-error`} className="field__error">
          {errors[name]}
        </p>
      )}
    </div>
  )

  return (
    <>
      <PageHeader eyebrow="Welcome" title="My Account" crumbs={[{ label: 'Account' }]} />
      <div className="container page-body">
        <div className="auth-card">
          <div className="tabs" role="tablist" aria-label="Account">
            {[
              ['signin', 'Sign In'],
              ['register', 'Create Account'],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={mode === value}
                className={mode === value ? 'is-active' : ''}
                onClick={() => {
                  setMode(value)
                  setErrors({})
                  setNotice('')
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <form noValidate onSubmit={onSubmit} className="auth-form">
            {mode === 'register' && field('name', 'Full name', 'text', 'name')}
            {field('email', 'Email address', 'email', 'email')}
            {field('password', 'Password', 'password', mode === 'register' ? 'new-password' : 'current-password')}
            <button type="submit" className="btn btn--primary btn--block">
              {mode === 'register' ? 'Create Account' : 'Sign In'}
            </button>
            {notice && (
              <p className="form-note form-note--info" role="status">
                {notice}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  )
}
