import { cn } from '@/lib/utils'

type BackgroundVideoProps = {
  src: string
  poster: string
  className?: string
}

export function BackgroundVideo({ src, poster, className }: BackgroundVideoProps) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
      className={cn('absolute inset-0 size-full object-cover', className)}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
