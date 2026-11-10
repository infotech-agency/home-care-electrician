import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  House,
  MapPin,
  Zap,
} from 'lucide-react';

import ContactButton from '@/components/common/ContactButton';

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-heading">
      <div className="container home-hero-layout">
        <div className="home-hero-content">
          <div className="home-hero-location">
            <MapPin size={15} aria-hidden="true" />
            Malviya Nagar &amp; Hauz Rani, New Delhi
          </div>

          <h1 id="home-hero-heading">
            Your home.
            <br />
            Our electrical
            <br />
            <span>care.</span>
          </h1>

          <p className="home-hero-description">
            A faulty switch or a fresh installation.
            Get electrical repairs, wiring, fans and lighting
            attended to, right at your doorstep.
          </p>

          <div className="home-hero-buttons">
            <ContactButton />
            <ContactButton kind="whatsapp" />
          </div>

          <div className="home-hero-assurances">
            <span>
              <House size={17} aria-hidden="true" />
              Residential home visits
            </span>

            <span>
              <Clock3 size={17} aria-hidden="true" />
              Open 24 hours
            </span>
          </div>

          <Link href="#services" className="home-hero-explore">
            Explore electrical services
            <ArrowDown size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="home-hero-visual">
          <div className="home-hero-photo">
            <Image
              src="/images/electrician.jpg"
              alt="Electrician working on an electrical panel, illustrative stock photograph"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 55vw"
            />

            <div className="home-hero-photo-overlay" />

            <div className="home-hero-photo-label">
              <span className="home-hero-label-line" />
              ELECTRICAL HELP, AT HOME
            </div>

            <div className="home-hero-photo-caption">
              <span>From everyday repairs</span>
              <strong>to a better-connected home.</strong>
            </div>

            <span className="home-hero-photo-credit">
              Illustrative service photography
            </span>
          </div>

          <Link href="/contact/" className="home-hero-visit">
            <span className="home-hero-visit-icon">
              <Zap size={24} strokeWidth={1.8} aria-hidden="true" />
            </span>

            <span className="home-hero-visit-copy">
              <strong>Let’s get it sorted.</strong>
              <span>Discuss your requirement. Arrange a visit.</span>
            </span>

            <ArrowUpRight
              className="home-hero-visit-arrow"
              size={23}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      <div className="home-hero-bottom">
        <div className="container home-hero-bottom-inner">
          <span>Electrical care for the place you call home.</span>

          <div className="home-hero-service-types">
            <span>Repairs</span>
            <span>Installation</span>
            <span>Maintenance</span>
          </div>
        </div>
      </div>
    </section>
  );
}