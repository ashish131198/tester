import { ArrowDown, CalendarDays, Clock3, MapPin } from 'lucide-react'

export function EventHero() {
  return (
    <section className="hero" id="top" aria-labelledby="event-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> Technology meetup · Mumbai, India</p>
        <h1 id="event-title">Manual QA Tester | Software Quality Assurance</h1>
        <p className="hero-subline">Software Testing · Automation · AI</p>
        <p className="hero-description">
          Join us for an exciting technology meetup focused on Software Testing, Automation,
          Artificial Intelligence, and modern development trends. Connect with industry
          professionals, explore new technologies, and learn practical skills to grow your career.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#registration">
            Registration information
            <ArrowDown aria-hidden="true" />
          </a>
          <a className="text-link" href="#overview">Explore event details</a>
        </div>
        <div className="hero-meta" aria-label="Event date and venue">
          <span><CalendarDays aria-hidden="true" /> Sunday, December 20</span>
          <span><MapPin aria-hidden="true" /> Mumbai, Maharashtra</span>
        </div>
      </div>

      <aside className="date-card" aria-label="Event schedule">
        <div className="date-card-topline">
          <span>Save the date</span>
          <span className="date-card-year">2026</span>
        </div>
        <div className="date-card-date">
          <span className="date-month">DECEMBER</span>
          <span className="date-day">20</span>
          <span className="date-weekday">SUNDAY</span>
        </div>
        <div className="date-card-rule" />
        <div className="date-card-time">
          <Clock3 aria-hidden="true" />
          <div>
            <span>EVENT HOURS</span>
            <strong>10:00 AM — 4:00 PM</strong>
          </div>
        </div>
        <span className="date-card-orbit date-card-orbit-one" aria-hidden="true" />
        <span className="date-card-orbit date-card-orbit-two" aria-hidden="true" />
      </aside>
    </section>
  )
}
