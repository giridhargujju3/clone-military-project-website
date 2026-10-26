import { Contact } from '@/components/contact'
import { DeployCta, Features, Intro } from '@/components/features'
import { Hero } from '@/components/hero'
import { Pricing } from '@/components/pricing'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Specs } from '@/components/specs'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <Features />
        <DeployCta />
        <Specs />
        <Pricing />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
