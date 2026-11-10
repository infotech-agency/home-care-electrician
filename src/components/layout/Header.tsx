'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, MapPin, Clock, Phone } from 'lucide-react';
import { business } from '@/data/business';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const normalizePath = (value: string) => value.replace(/\/$/, '');

  return (
    <>
      <div className="utility">
        <div className="container">
          <span>
            <MapPin size={13} />
            Malviya Nagar &amp; Hauz Rani, New Delhi
          </span>

          <span>
            <Clock size={13} />
            Open 24 hours · Visit timing by arrangement
          </span>
        </div>
      </div>

      <header>
        <div className="container nav">
          <Link
            href="/"
            aria-label="Home Care Electrician Service home"
            className="brand"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/logo.jpeg"
              width={116}
              height={116}
              alt="Home Care Electrician Service"
              priority
            />

            <span>
              HOME CARE
              <small>ELECTRICIAN SERVICE</small>
            </span>
          </Link>

          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={open ? 'menu open' : 'menu'}
          >
            {navigation.map(({ href, label }) => {
              const active =
                normalizePath(pathname) === normalizePath(href);

              return (
                <Link
                  key={href}
                  href={href}
                  className={active ? 'active' : ''}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="nav-cta">
            <a
              href={`tel:${business.phone}`}
              className="button button-primary compact navbar-call"
              aria-label={`Call Home Care on ${business.phoneDisplay}`}
            >
              <Phone size={18} aria-hidden="true" />

              <span className="navbar-call-copy">
                <span className="navbar-call-label">Call us</span>
                <span className="navbar-call-number">74289 64734</span>
              </span>
            </a>
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}