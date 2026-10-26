'use client'

import { useState, type FormEvent } from 'react'
import { Reveal } from '@/components/reveal'

const fieldClass =
  'w-full border border-white/10 bg-black/60 px-4 py-4 text-foreground uppercase placeholder:text-muted-foreground/70 focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal'

function Corner({ className }: { className: string }) {
  return <span className={`pointer-events-none absolute size-8 border-signal-strong ${className}`} aria-hidden="true" />
}

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-32">
      <div
        className="pointer-events-none absolute -right-40 top-0 size-[40rem] rounded-full bg-signal-strong/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 size-[30rem] rounded-full bg-signal-strong/5 blur-3xl"
        aria-hidden="true"
      />
      <Reveal className="relative text-center">
        <h2 className="text-signal-gradient font-mono text-5xl font-bold uppercase md:text-7xl">Secure Channel</h2>
        <p className="mt-4 text-lg uppercase tracking-wide text-muted-foreground">
          Initiate Encrypted Transmission // Inquiries & Acquisitions
        </p>
      </Reveal>

      <Reveal className="relative mx-auto mt-16 max-w-4xl">
        <div className="relative border border-white/10 bg-card/50 p-6 backdrop-blur md:p-12">
          <Corner className="-left-px -top-px border-l-2 border-t-2" />
          <Corner className="-right-px -top-px border-r-2 border-t-2" />
          <Corner className="-bottom-px -left-px border-b-2 border-l-2" />
          <Corner className="-bottom-px -right-px border-b-2 border-r-2" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <label htmlFor="identity" className="font-mono text-xs font-bold uppercase tracking-widest text-signal">
                  Identity
                </label>
                <input id="identity" name="identity" required placeholder="Full Name / Rank" className={fieldClass} />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="comms" className="font-mono text-xs font-bold uppercase tracking-widest text-signal">
                  Comms ID
                </label>
                <input
                  id="comms"
                  name="comms"
                  type="email"
                  required
                  placeholder="Secure Email Address"
                  className={fieldClass}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="message" className="font-mono text-xs font-bold uppercase tracking-widest text-signal">
                Transmission Data
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder="Enter classified inquiry details..."
                className={`${fieldClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="bg-signal-strong py-5 font-mono text-sm font-bold uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-signal"
            >
              Transmit Message {'→'}
            </button>
            <p role="status" className="min-h-5 text-center font-mono text-xs uppercase tracking-widest text-online">
              {sent ? 'Transmission received // Stand by for response' : ''}
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  )
}
