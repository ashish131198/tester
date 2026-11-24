import { ArrowUpRight } from 'lucide-react'

export function EventHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Tech and Innovation Meetup 2026 home">
        <span className="wordmark-mark" aria-hidden="true">TI</span>
        <span className="wordmark-copy">
          <strong>TECH &amp; INNOVATION</strong>
          <span>MUMBAI · 2026</span>
        </span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a href="#overview">Overview</a>
        <a href="#audience">Who it&apos;s for</a>
        <a className="nav-cta" href="#registration">
          Registration info
          <ArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}
