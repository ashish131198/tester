import { MapPin, UsersRound } from 'lucide-react'

const topics = [
  'Software Testing',
  'Automation',
  'Artificial Intelligence',
  'Modern development trends',
]

const audience = [
  'Software Developers',
  'Manual QA Testers',
  'Automation Testers',
  'IT Professionals',
  'Students',
  'Technology Enthusiasts',
]

export function EventDetails() {
  return (
    <div className="event-content" id="overview">
      <section className="overview-section" aria-labelledby="overview-heading">
        <div className="section-heading">
          <p className="eyebrow">The meetup</p>
          <h2 id="overview-heading">What happens at the meetup</h2>
        </div>
        <div className="overview-body">
          <p>
            Connect with industry professionals, explore new technologies, attend interactive
            sessions, and learn practical skills to grow your career.
          </p>
          <ul className="topic-list" aria-label="Meetup topics">
            {topics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
        </div>
      </section>

      <section className="details-grid" aria-label="Event information">
        <article className="info-card venue-card">
          <div className="info-icon"><MapPin aria-hidden="true" /></div>
          <p className="card-label">Venue</p>
          <h3>Mumbai Convention Centre</h3>
          <p className="muted-copy">Mumbai, Maharashtra, India</p>
        </article>

        <article className="info-card audience-card" id="audience">
          <div className="info-icon"><UsersRound aria-hidden="true" /></div>
          <p className="card-label">Who it&apos;s for</p>
          <h3>A community across tech</h3>
          <ul className="audience-list">
            {audience.map((person) => <li key={person}>{person}</li>)}
          </ul>
        </article>
      </section>

      <section className="registration-panel" id="registration" aria-labelledby="registration-heading">
        <div>
          <p className="eyebrow">Registration</p>
          <h2 id="registration-heading">Free registration</h2>
          <p className="registration-note">
            No confirmed registration link or instructions were provided. The reception sign-up
            instructions in the supplied details were marked as sample only.
          </p>
        </div>
        <span className="registration-status">Link not provided</span>
      </section>
    </div>
  )
}
