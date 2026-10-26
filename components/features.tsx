import Image from 'next/image'
import { BackgroundVideo } from '@/components/background-video'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type Feature = {
  title: string
  description: string
  image: string
  video?: string
  alt: string
  align: 'center' | 'left'
}

const features: Feature[] = [
  {
    title: 'Vulcan M134',
    description: '6,000 rounds per minute. Unrivaled suppression.',
    image: '/images/vulcan-cannon.png',
    video: '/videos/vulcan-cannon.mp4',
    alt: 'Close-up of the Vulcan M134 rotary cannon under a spotlight',
    align: 'center',
  },
  {
    title: 'Silent Flight',
    description: 'Dual-rotor system. Acoustic signature reduced by 60%.',
    image: '/images/rotor-assembly.png',
    video: '/videos/rotor-assembly.mp4',
    alt: 'The drone hovering in a dark hangar',
    align: 'center',
  },
  {
    title: 'All-Seeing',
    description: 'Multi-spectral imaging meets edge AI.',
    image: '/images/sensor-eye.png',
    video: '/videos/eye.mp4',
    alt: 'Drone camera gimbal lens with a red indicator light',
    align: 'center',
  },
  {
    title: 'Aerial Dominance',
    description: 'Complete situational awareness from any altitude.',
    image: '/images/top-view.png',
    video: '/videos/top-view.mp4',
    alt: 'Top-down view of the drone flying above a city at night',
    align: 'center',
  },
  {
    title: 'Precision Engineering',
    description: 'Advanced propulsion. Silent. Deadly. Efficient.',
    image: '/images/propeller.png',
    alt: 'Carbon fiber propeller and brushless motor',
    align: 'left',
  },
]

export function Intro() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center border-b border-border px-4 py-24 text-center">
      <Reveal>
        <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-signal">Engineering Mastery</p>
        <h2 className="mt-6 text-5xl font-bold leading-tight text-foreground md:text-7xl">
          Forged from titanium.
          <br />
          <span className="text-muted-foreground">Powered by intelligence.</span>
        </h2>
      </Reveal>
    </section>
  )
}

function FeatureSection({ feature }: { feature: Feature }) {
  const isLeft = feature.align === 'left'
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        {feature.video ? (
          <BackgroundVideo src={feature.video} poster={feature.image} className="opacity-50" />
        ) : (
          <Image
            src={feature.image || '/placeholder.svg'}
            alt={feature.alt}
            fill
            sizes="100vw"
            className="animate-ken-burns object-cover opacity-50"
          />
        )}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" aria-hidden="true" />
      </div>
      <Reveal
        className={cn(
          'relative z-10 w-full px-6 md:px-24',
          isLeft ? 'text-left' : 'mx-auto max-w-5xl text-center',
        )}
      >
        <h3 className="text-chrome font-mono text-6xl font-bold uppercase leading-[0.95] tracking-tight text-balance md:text-8xl lg:text-9xl">
          {feature.title}
        </h3>
        <p className={cn('mt-6 text-xl text-white/80 md:text-3xl', !isLeft && 'mx-auto')}>{feature.description}</p>
      </Reveal>
    </section>
  )
}

export function Features() {
  return (
    <>
      {features.map((feature) => (
        <FeatureSection key={feature.title} feature={feature} />
      ))}
    </>
  )
}

export function DeployCta() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 border-b border-border px-4 py-32 text-center">
      <Reveal variant="zoom-sm">
        <h2 className="text-chrome text-5xl font-bold md:text-7xl">Ready to deploy.</h2>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-full bg-foreground px-10 py-4 font-mono text-sm font-bold uppercase tracking-widest text-background transition-transform hover:scale-105"
        >
          Order Now
        </a>
      </Reveal>
    </section>
  )
}
