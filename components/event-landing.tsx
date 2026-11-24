import { EventDetails } from '@/components/event-details'
import { EventHeader } from '@/components/event-header'
import { EventHero } from '@/components/event-hero'

export function EventLanding() {
  return (
    <main className="event-page">
      <div className="page-shell">
        <EventHeader />
        <EventHero />
        <EventDetails />
        <footer className="site-footer">
          <span>Tech &amp; Innovation Meetup 2026</span>
          <span>Mumbai, Maharashtra, India</span>
        </footer>
      </div>
    </main>
  )
}
