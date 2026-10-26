'use client'

import { MotionConfig, motion, type TargetAndTransition } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'up' | 'up-sm' | 'left' | 'zoom' | 'zoom-sm' | 'fade'

const hiddenStates: Record<Variant, TargetAndTransition> = {
  up: { opacity: 0, y: 50 },
  'up-sm': { opacity: 0, y: 20 },
  left: { opacity: 0, x: -50 },
  zoom: { opacity: 0, scale: 0.9 },
  'zoom-sm': { opacity: 0, scale: 0.95 },
  fade: { opacity: 0 },
}

const visibleState: TargetAndTransition = { opacity: 1, x: 0, y: 0, scale: 1 }

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  variant?: Variant
  onMount?: boolean
  as?: 'div' | 'li'
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  variant = 'up',
  onMount = false,
  as = 'div',
}: RevealProps) {
  const Component = as === 'li' ? motion.li : motion.div
  const transition = { duration, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] as const }

  // reducedMotion="user" keeps server and client markup identical (avoiding hydration
  // mismatches) while still disabling transform animations for reduced-motion users.
  return (
    <MotionConfig reducedMotion="user">
      <Component
        className={className}
        initial={hiddenStates[variant]}
        {...(onMount
          ? { animate: visibleState }
          : { whileInView: visibleState, viewport: { once: true, amount: 0.3 } })}
        transition={transition}
      >
        {children}
      </Component>
    </MotionConfig>
  )
}
