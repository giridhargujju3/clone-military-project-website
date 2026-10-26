import Image from 'next/image'
import { UserRound } from 'lucide-react'

function HeadingWidget() {
  return (
    <div className="hidden w-80 items-center justify-between rounded-3xl border border-white/10 bg-black/80 p-8 backdrop-blur-md md:flex">
      <div className="relative size-24 rounded-full border border-white/15" aria-hidden="true">
        <div className="absolute inset-0 animate-radar rounded-full border-2 border-transparent border-t-white/70 border-r-white/30" />
        <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground" />
      </div>
      <div className="text-right">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Heading</p>
        <p className="font-mono text-5xl font-bold leading-tight text-foreground">182°</p>
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-signal">Locked</p>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="overview" className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-drone.png"
          alt="The Executioner drone firing its rotary cannon over clouds at sunset"
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover"
        />
        <div className="absolute inset-0 animate-flicker bg-orange-200/20 mix-blend-overlay" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex items-start justify-between px-4 pt-24 md:px-12 md:pt-28">
        <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-3 backdrop-blur-md">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-online opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-online" />
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-foreground">Live Feed</span>
        </div>
        <div className="hidden items-center gap-4 rounded-full border border-white/10 bg-black/50 py-2 pl-5 pr-2 backdrop-blur-md sm:flex">
          <div className="text-right">
            <p className="font-mono text-xs font-bold text-foreground">CPT. Noah</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Command</p>
          </div>
          <span className="flex size-10 items-center justify-center rounded-full bg-white/10">
            <UserRound className="size-5 text-foreground" aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute left-[20%] top-[40%] z-10 hidden flex-col items-center lg:flex" aria-hidden="true">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-4 py-2 backdrop-blur">
          <span className="size-1.5 rounded-full bg-signal" />
          <span className="font-mono text-[11px] font-bold uppercase text-foreground">Vulcan M134 Rotary</span>
        </div>
        <span className="h-24 border-l border-dashed border-white/60" />
      </div>

      <div className="relative z-10 mt-auto flex flex-col gap-8 px-4 pb-12 md:flex-row md:items-end md:justify-between md:px-12 md:pb-12">
        <div>
          <h1 className="text-chrome text-7xl font-bold uppercase leading-[0.85] tracking-tight sm:text-8xl md:text-9xl lg:text-[9.5rem]">
            The
            <br />
            Executioner
          </h1>
          <div className="mt-8 border-l-2 border-white/30 pl-6">
            <p className="max-w-xl text-lg text-white/85 md:text-xl">
              Next-generation tactical autonomous drone system. 850 kW hybrid engine.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-foreground px-8 py-3 font-mono text-sm font-bold uppercase tracking-widest text-background transition-opacity hover:opacity-85"
              >
                Initiate
              </a>
              <a
                href="#specs"
                className="border border-white/30 bg-black/30 px-8 py-3 font-mono text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur transition-colors hover:bg-white/10"
              >
                Specs
              </a>
            </div>
          </div>
        </div>
        <HeadingWidget />
      </div>
    </section>
  )
}
