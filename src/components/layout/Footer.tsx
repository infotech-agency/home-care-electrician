import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Clock, Phone } from 'lucide-react';
import { business, nearbyServiceAreas } from '@/data/business';
import ContactButton from '../common/ContactButton';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">
              <Image
                src="/images/logo.jpeg"
                width={76}
                height={76}
                alt="Home Care Electrician Service"
              />

              <h3>
                Home Care
                <br />
                Electrician Service
              </h3>
            </div>

            <p>
              Electrical repairs, installations and maintenance.
              At your home, in Malviya Nagar and Hauz Rani.
            </p>
          </div>

          <div>
            <span className="footer-label">Explore</span>
            <Link href="/">Home</Link>
            <Link href="/services/">Our services</Link>
            <Link href="/contact/">Contact &amp; location</Link>
          </div>

          <div>
            <span className="footer-label">Electrical care</span>

            <Link href="/services/#wiring-connections">
              Wiring &amp; connections
            </Link>

            <Link href="/services/#fans-lighting">
              Fans &amp; lighting
            </Link>

            <Link href="/services/#repairs-diagnostics">
              Repairs &amp; diagnostics
            </Link>

            <Link href="/services/#home-installations">
              Home installations
            </Link>
          </div>

          <div>
            <span className="footer-label">Find us</span>

            <p>
              <MapPin size={16} aria-hidden="true" />
              {business.address}
            </p>

            <p>
              <Clock size={16} aria-hidden="true" />
              {business.hours}
            </p>

            <a href={`tel:${business.phone}`}>
              <Phone size={16} aria-hidden="true" />
              {business.phoneDisplay}
            </a>

            <a
              href={business.maps}
              target="_blank"
              rel="noreferrer"
            >
              Get directions
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <section
          className="container footer-service-areas"
          aria-labelledby="footer-areas-heading"
        >
          <h2 id="footer-areas-heading">
            Electrician home visits in nearby areas
          </h2>

          <p className="footer-areas-intro">
            Share your location when contacting us to confirm
            a home visit.
          </p>

          <ul className="footer-area-keywords">
            {nearbyServiceAreas.map((area) => (
              <li key={area}>Electrician service in {area}</li>
            ))}
          </ul>
        </section>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Home Care Electrician Service
          </span>
          <span>Made for the place you call home.</span>
        </div>
      </footer>

      <div className="floating-actions">
        <ContactButton compact />
        <ContactButton kind="whatsapp" compact />
      </div>
    </>
  );
}